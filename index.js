const { Client, Intents } = require("discord.js");
require("dotenv").config();
const express = require("express");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

client.once("ready", () => {
  console.log(`${client.user.username} has logged In`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "hello") {
    message.reply(`${message.author.username} Hello from the bot!`);
  }
});

const app = express();

app.listen(8000, () => console.info("App is listening on port 8000"));
