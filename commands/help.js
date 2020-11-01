const fs = require("fs");

module.exports = {
  name: "help",
  description: "List all available commands.",
  execute(message) {
    let str = "";
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      str += `<b>Name</b>: !${command.name}, <b>Description</b>: ${command.description} \n`;
    }

    message.channel.send(str);
  },
};
