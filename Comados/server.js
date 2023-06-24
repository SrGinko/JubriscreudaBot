const {EmbedBuilder, SlashCommandBuilder, Colors } = require("discord.js")


const serverEmbed = new EmbedBuilder()
    .setColor(0xf1c40f)
    .setTitle("Acesso ao Servidor Manicomio")
    .addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Endereço do Servidor', value: 'ManicomioServer0.aternos.me', inline: true },
		{ name: 'Porta do Servidor', value: '32462', inline: true },
	)
    .setImage("https://media.discordapp.net/attachments/1031036409231986778/1061772249876664330/image.png?width=574&height=320")

    const ApocalipseEmbed = new EmbedBuilder()
    .setColor(0xf1c40f)
    .setTitle("Acesso ao Servidor de OneBlock")
    .addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Endereço do Servidor', value: 'ManicomioOneBlock.aternos.me', inline: true },
		{ name: 'Porta do Servidor', value: '31124', inline: true },
	)
    module.exports = {
        data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Informa dados para a entrada no servidor de minecraft."),

        async execute(interaction){
            await interaction.reply({embeds: [serverEmbed, ApocalipseEmbed]})
        }
    }