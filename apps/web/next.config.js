const withTM = require("next-transpile-modules")(["@packages/domain"]);

module.exports = withTM({
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true
});
