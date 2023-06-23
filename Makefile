run: lint
	npm run start:dev
lint:
	npm run lint
jest: lint
	npm run test
clean:
	npm cache verify
init:
	npx prisma migrate dev --name seed && npx ts-node src/seeding/todo.ts

ci:
	act --container-architecture linux/amd64 --workflows .github/workflows/ci.yml

.PHONT: jest

