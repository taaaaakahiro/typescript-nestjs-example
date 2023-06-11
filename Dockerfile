# ビルド環境
FROM node:19-bullseye-slim as builder
WORKDIR /app

RUN apt-get update \
    && apt-get install -y openssl

## ビルド必要なパッケージをインストール
COPY package*.json ./
RUN npm install


## ビルドの実施
COPY . /app

RUN npm run build
RUN npx prisma generate

# 実行環境
FROM node:19-bullseye-slim
ENV NODE_ENV production
WORKDIR /app

## ビルド環境からビルド済みのファイル等をコピーし、当該フォルダのオーナーをnodeユーザーへ変更
COPY --from=builder --chown=node:node /app /app
## 動作に必要なパッケージのインストール
RUN npm ci --only=production
EXPOSE 3000

## nodeユーザーとして実行
USER node
CMD ["node", "dist/main"]
