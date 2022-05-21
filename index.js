require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const DiscordStrategy = require("./discordStrategy");

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(passport.initialize());

app.get("/", (req, res) => {
  return res.json("OK");
});

app.get("/auth", passport.authenticate("discord"));
app.get(
  "/auth/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/",
  }),
  async (req, res) => {
    return res.redirect("/");
  }
);

app.listen(port, () => console.info(`App is listening on port ${port}`));

