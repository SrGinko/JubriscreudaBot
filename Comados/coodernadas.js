const {SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder, } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Selecione o que deseja')
            .addOptions({
                label: "Minecraft",
                description: "Link do Minecraft",
                value: "Minecraft"
            },
            {
                label:"Stardew Valley",
                description: "Link de Download do Stardew Valley  v1.5.6",
                value: "Stardew Valley"
            },
            {
                label:"Pokemon FireRed (Pt_br)",
                description: "Link de Download do Pokemon FireRed",
                value: "PokemonFireRed"
            })
    )

module.exports = {

    data: new SlashCommandBuilder()
    .setName("games")
    .setDescription("Disponibilia links de vários jogos no catalogo."),

    async execute(interaction){
        await interaction.reply({content:'Selecione o jogo que deseja:', components: [row]})
    }
}