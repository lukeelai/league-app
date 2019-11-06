const proxy = require("http-proxy-middleware");
module.exports = app => {
  app.use(
    "/lol/platform/v3/champion-rotations",
    proxy({ target: "https://na1.api.riotgames.com", changeOrigin: true })
  );
};
