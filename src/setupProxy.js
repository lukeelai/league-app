const proxy = require("http-proxy-middleware");
module.exports = app => {
  app.use(
    "/lol/platform/v3/champion-rotations/",
    proxy({ target: "https://na1.api.riotgames.com", changeOrigin: true })
  );
  app.use(
    "/lol/summoner/v4/summoners/by-name/",
    proxy({ target: "https://na1.api.riotgames.com", changeOrigin: true })
  );
  app.use(
    "/lol/league/v4/entries/by-summoner/",
    proxy({ target: "https://na1.api.riotgames.com", changeOrigin: true })
  );
  app.use(
    "/lol/champion-mastery/v4/champion-masteries/by-summoner/",
    proxy({ target: "https://na1.api.riotgames.com", changeOrigin: true })
  );
};
