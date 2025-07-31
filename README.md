# @prefabs.tech/vue

A set of vue 3 libraries to be used in our monorepo apps.

## Demo
Please find out [demo app](https://app-ofvi39.ws0.12deg.io/vue/) for examples.

## Packages
  - @prefabs.tech/vue3-config (https://www.npmjs.com/package/@prefabs.tech/vue3-config)
  - @prefabs.tech/vue3-form (https://www.npmjs.com/package/@prefabs.tech/vue3-form)
  - @prefabs.tech/vue3-i18n (https://www.npmjs.com/package/@prefabs.tech/vue3-i18n)
  - @prefabs.tech/vue3-layout (https://www.npmjs.com/package/@prefabs.tech/vue3-layout)
  - @prefabs.tech/vue3-tanstack-table (https://www.npmjs.com/package/@prefabs.tech/vue3-tanstack-table)
  - @prefabs.tech/vue3-ui (https://www.npmjs.com/package/@prefabs.tech/vue3-ui)
  - @prefabs.tech/vue3-user (https://www.npmjs.com/package/@prefabs.tech/vue3-user)

# Installation & Usage
## Install dependencies
Install dependencies recursively with this command
```
make install
```

## Build all packages
```
make build
```

## Lint code
```
make lint
```

## Typecheck code
```
make typecheck
```

## Test
```
make test
```

# Developing locally & testing
The best way to verify the changes done to the libraries is to test them locally before releasing them. To test libraries locally link each libraries to the `vue-app` using `pnpm link` command. [More on pnpm link](https://pnpm.io/cli/link).

To link and unlink the library locally run these commands from the `vue-app` where you are linking the library:
```
pnpm link ./<path_to_libraries_monorepo>/packages/<library_name>
```

To unlink the linked library
```
pnpm unlink ./<path_to_libraries_monorepo>/packages/<library_name>
```

## Running demo app
```
make dev
```

## Troubleshooting
  - Make sure that `package.json` and `pnpm-lock.yml` are synchronized.
  - You may need to restart your vue-app before link and unlink to see the changes.
  - All the libraries that defines or uses context has to be linked in order to link one libraries that use the context or defines it.
