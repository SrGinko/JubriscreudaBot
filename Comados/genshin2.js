const {SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js")
const { execute } = require("./server")

const genshin = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Selecione o desejado")
            .addOptions(
                {
                    label: "Ayato",
                    description: "Build do Ayato",
                    value: "Ayato"
                },
                {
                    label: "Keqing",
                    description: "Build da Keqing",
                    value: "Keqing"
                },
                {
                    label: "Klee",
                    description: "Build da Klee",
                    value: "Klee"
                },
                {
                    label: "Kujou Sara",
                    description: "Build da Kujou Sara",
                    value: "Kujou Sara"
                },
                {
                    label: "Kuki Shinobu",
                    description: "Build da Kuki Shinobu",
                    value: "Kuki Shinobu"
                },
                {
                    value: "Lisa",
                    description: "Build da Lisa",
                    label: "Lisa"
                },
                {
                    label: "Mona",
                    description: "Build da Mona",
                    value: "Mona"
                },
                {
                    label: "Noelle",
                    description: "Build da Noelle",
                    value: "Noelle"
                }
            )
    )
    module.exports = {
        data: new SlashCommandBuilder()
            .setName("genshini")
            .setDescription("Continuação dos personagens"),
        
        async execute(interaction){
            await interaction.reply({content: `Selecione um dos personagens`, components:[genshin]})
        }
    }