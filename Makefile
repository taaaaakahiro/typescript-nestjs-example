lint:
	npm run lint

run: lint
	npm run start:dev

test: lint
	npm run test

jest: test
	npm run test:e2e

clean:
	npm cache verify

init:
	npx prisma migrate dev --name seed && npx ts-node src/seeding/todo.ts

ci:
	act --container-architecture linux/amd64 --workflows .github/workflows/ci.yml

.PHONT: jest

