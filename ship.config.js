module.exports = {
  appName: "@dzangolab/vue",
  buildCommand: ({ isYarn, version }) => {
    return "pnpm build";
  },
  installCommand: ({ isYarn }) => {
    return "pnpm -r install";
  },
  monorepo: {
    mainVersionFile: "package.json",
    packagesToBump: ["apps/*", "packages/*"],
    packagesToPublish: ["packages/*"],
  },
  publishCommand: ({ isYarn, tag, defaultCommand, dir }) => {
    return "pnpm publish --access public";
  },
};
