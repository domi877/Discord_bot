const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on('message', msg => {   if (msg.content === 'ping') {     msg.reply('pong');   } });



/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
Client.on('ready', () => {
    console.log('I am ready!');
  });
  
  // Create an event listener for new guild members
  Client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'dorfschelle');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Willkommen im schönen Flörsbachtal ${member}`);
 

});
  
 
 
 
 
  // Log our bot in using the token from https://discord.com/developers/applications
let TOKEN = "";
  Client.login(TOKEN);
