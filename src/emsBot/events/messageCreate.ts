import { Client, Message } from "discord.js";

export const messageCreateEvent = {
	name: 'messageCreate',
	async execute(client: Client, message: Message) {
		console.log(message.guild.roles.cache.find((x) => x.name === 'admin'));

		await message.member.roles.add('928751426476331079');
	},
};
