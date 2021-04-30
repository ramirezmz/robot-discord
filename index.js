const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
  console.log('Client Ready');
});

client.on('message', async (msg) =>{
  console.log(msg.content);
});

client.login('ODM1NjM2Njg3NzUzMDUyMTcx.YISVTw.B_PTmJ5q818qN74tH33NyUSjRvM');
