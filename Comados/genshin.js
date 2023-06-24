const {SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require("discord.js")
const { execute } = require("./server")

const genshin = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Selecione o desejado")
            .addOptions(
            {
                label: "Albedo",
                description: "Build do Albedo",
                value: "Albedo"
            },
            {
                label: "Alhaitham",
                description: "Build do Alhaitham",
                value: "Alhaitham"
            },
            {
                label: "Amber",
                description:"Build da Amber",
                value: "Amber"
            },
            {
                label:"Arataki Itto",
                description: "Build do Arataki Itto",
                value: "Arataki Itto"
            },
            {
                label: "Barbara",
                description:"Build da Barbara",
                value: "Barbara"
            },
            {
                label: "Beidou",
                description:"Build da Beidou",
                value: "Beidou"
            },
            {
                label: "Bennett",
                description:"Build do Bennett",
                value: "Bennett"
            },
            {
                label: "Candace",
                description: "Build da Candace",
                value: "Candace"
            },
            {
                label: "Chongyun",
                description: "Build do Chongyun",
                value: "Chongyun"
            },
            {
                label: "Collei",
                description: "Build da Collei",
                value: "Collei"
            },
            {
                label: "Cyno",
                description: "Build do Cyno",
                value: "Cyno"
            },
            {
                label: "Dehya",
                description: "Build da Dehya",
                value: "Dehya" 
            },
            {
                label: "Diluc",
                description: "Build do Diluc",
                value: "Diluc"
            },
            {
                label: "Diona",
                description: "Build da Diona",
                value: "Diona"
            },
            {
                label: "Dori",
                description: "Build da Dori",
                value: "Dori"
            },
            {
                label: "Eula",
                description: "Build da Eula",
                value: "Eula"
            },
            {
                label: "Faruzen",
                description: "Build da Faruzen",
                value: "Faruzen"
            },
            {
                label: "Fischl",
                description: "Build da Fischl",
                value: "Fischl"
            },
            {
                label: "Gayun",
                description: "Build da Gayun",
                value: "Gayun"
            },
            {
                label: "Gorou",
                description: "Build do Gorou",
                value: "Gorou"
            },
            {
                label: "HuTao",
                description: "Build da HuTao",
                value: "HuTao"
            },
            {
                label:"Jean",
                description: "Build da Jean",
                value: "Jean"
            },
            {
                label: "Kazuha",
                description: "Build do Kazuha",
                value: "Kazuha"
            },
            {
                label: "Kaeya",
                description: "Build do Kaeya",
                value: "Kaeya"
            },
            {
                label: "Ayaka",
                description: "Build da Ayaka",
                value: "Ayaka"
            })
    )

            module.exports = {

                data: new SlashCommandBuilder()
                    .setName("genshin")
                    .setDescription("Apresenta build dos personagens."),

                async execute(interaction){
                    await interaction.reply({content: "Selecione um dos personagens: ", components: [genshin]})
                }
            }