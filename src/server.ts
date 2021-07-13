import * as dotenv from 'dotenv';
import Discord from 'discord.js';


if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on(
  'message',
  async (msg: Discord.Message): Promise<void> => {
    console.log(msg.content);
    await msg.channel.send("Dan god !");
  },
);

client.login(process.env.DISC_TOKEN);
