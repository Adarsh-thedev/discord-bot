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
      clientID: "917363335639478292",
      clientSecret: "N-N21W3ibWZRaPAcV7Wse6MmshWiJtU9",
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
          botToken:
            "OTE3MzYzMzM1NjM5NDc4Mjky.Ya3nLw.9jTlpmeADmGreAUKj3Y3z9QXqQs",
          guildId: "914807760988811274",
          userId: p.id,
          roles: ["917384340445470750"],
        })
        .then(console.log);
      return console.info(p);
    }
  )
);
