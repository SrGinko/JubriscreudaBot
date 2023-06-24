const{ ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder} = require("discord.js")

const rotas = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Selecione a Rota desejada")
            .addOptions({
                label: "Pimenta Jueyun",
                description: "Locais que se emcontra esse item",
                value:"Pimenta Jaeyun"
            },
            {
                label: "Minérios",
                description: "Exibe todos os minérios no mapa",
                value: "Minerios"
            },
            {
              label: "Cor Lápis",
              description: "Exibe locais aonde se encontra esse item",
              value: "Corlapis"  
            },
            {
                label: "Fungos Maritimos",
                description: "Exibe locais aonde se encontra esse item",
                value: "Fungos Maritimos"
            })
    )

module.exports = {
data: new SlashCommandBuilder()
    .setName("gitens")
    .setDescription("Exibe locais dos itens que deseja"),

    async execute(interaction){
        await interaction.reply({content: `Selecione o item desejado`, components: [rotas]})
    }
}