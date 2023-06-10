run:
	npm run start:dev
lint:
	npm run lint
jest: lint
	npm run test
clean:
	npm cache verify

.PHONT: jest