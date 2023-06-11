run:
	npm run start:dev
lint:
	npm run lint
jest: lint
	npm run test
clean:
	npm cache verify

init:
	npx prisma migrate dev --name todo && npx ts-node src/seeding/todo.ts

.PHONT: jest