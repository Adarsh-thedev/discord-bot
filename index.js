require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const DiscordStrategy = require("./discordStrategy");

const app = express();

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

app.listen(8000, () => console.info("App is listening on port 8000"));
