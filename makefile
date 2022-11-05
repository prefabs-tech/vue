tag = 0
version = 0.1

build:
	@printf "\033[0;32m>>> Build packages\033[0m\n"
	pnpm build

install:
	@printf "\033[0;32m>>> Installing dependencies\033[0m\n"
	pnpm -r install

lint:
	@printf "\033[0;32m>>> Lint code\033[0m\n"
	pnpm lint

lint.fix:
	@printf "\033[0;32m>>> Lint code\033[0m\n"
	pnpm lint:fix

outdated:
	@printf "\033[0;32m>>> Check for outdated dependencies\033[0m\n"
	pnpm -r outdated

release:
	@printf "\033[0;32m>>> Tagging repo for next release\033[0m\n"
	git checkout $(version)
	git pull origin $(version)
	git tag $(version).$(tag)
	git push origin $(version).$(tag)
	git checkout $(version)-develop

sort-package:
	@printf "\033[0;32m>>> Format package.json\033[0m\n"
	pnpm sort-package

test:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	pnpm test

test.ci:
	@printf "\033[0;32m>>> Running tests\033[0m\n"
	pnpm test:ci

test.integration:
	@printf "\033[0;32m>>> Running integration tests\033[0m\n"
	pnpm test:integration

test.unit:
	@printf "\033[0;32m>>> Running unit tests\033[0m\n"
	pnpm test:unit

typecheck:
	@printf "\033[0;32m>>> Running Type check\033[0m\n"
	pnpm typecheck
