const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
const scope = ["identify", "email", "guilds", "guilds.join"];
const axios = require("axios");

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
      // console.log(a, r, d);
      // axios(
      //   `https://discord.com/api/guilds/914807760988811274/members/${p.id}`,
      //   {
      //     method: "put",
      //     headers: {
      //       Authorization:
      //         "Bot OTE3MzYzMzM1NjM5NDc4Mjky.Ya3nLw.NTJqcsqlaPi_6gqcUmQo39Wu-2o",
      //       "Content-Type": "application/json",
      //     },
      //     params: {
      //       access_token: a,
      //       roles: ["917384340445470750"],
      //     },
      //   }
      // ).catch((err) => {
      //   console.log("ERROR", err);
      // });
      oauth
        .addMember({
          accessToken: a,
          botToken: process.env.BOT_TOKEN,
          guildId: process.env.GUILD_ID,
          userId: p.id,
          roles: ["917384340445470750"],
        })
        .then(console.log);
      return console.info(p);
    }
  )
);
