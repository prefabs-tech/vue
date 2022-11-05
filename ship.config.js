module.exports = {
  buildCommand: ({ isYarn, version }) => {
    // Always use pnpm
    return 'pnpm run build';
  },
  installCommand: ({ isYarn }) => {
    // Always use pnpm
    return 'pnpm install';
  },
  monorepo: {
    mainVersionFile: "package.json",
    packagesToBump: ["libs/*", "packages/*"],
    packagesToPublish: ["libs/*"],
    updateDependencies: false,
  },
  publishCommand: ({ isYarn, tag, defaultCommand, dir }) => {
    // Always use npm
    return `npm publish --access public --tag ${tag} || echo "Does not publish"`
  },
};
