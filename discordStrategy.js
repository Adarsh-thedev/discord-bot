const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");
const scope = ["identify", "email", "guilds"];

passport.use(
  new DiscordStrategy(
    {
      clientID: "914782292126359574",
      clientSecret: "PY49Z8CErbNbw6yGrhJXowvfVtM7YHgW",
      callbackURL: "/auth/redirect",
      scope,
    },
    (a, r, p, d) => {
      //   console.log(a, r, d);
      return console.info(p);
    }
  )
);
