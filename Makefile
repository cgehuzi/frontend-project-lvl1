install:
	npm ci

game:
	npx brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest