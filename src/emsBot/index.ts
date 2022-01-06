import { Client, Intents, Collection } from 'discord.js';

import * as events from './events';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES],
});

(events as any).forEach(event => {
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args));
	}
});

export const startEmsBot = () => client.login(process.env.BOT_TOKEN);
