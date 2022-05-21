const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
const scope = ["identify", "email", "guilds", "guilds.join"];

const DiscordOauth2 = require("discord-oauth2");
const oauth = new DiscordOauth2({
  version: "v9",
});

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/redirect",
      scope,
    },
    (a, r, p, d) => {
      oauth
        .addMember({
          accessToken: a,
          botToken: process.env.BOT_TOKEN,
          guildId: process.env.GUILD_ID,
          userId: p.id,
          roles: ["917384340445470750"],
        })
        .then((data) => {
          console.log(data, a);
          return data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    }
  )
);
