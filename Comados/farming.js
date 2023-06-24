const {SlashCommandBuilder, EmbedBuilder, Colors, Embed} = require("discord.js")


const FarmingEmbed = new EmbedBuilder()
    .setTitle('Materiais de Talento dos Personagens')
    .setColor("Random")
    .setAuthor({ name: 'GenshinPro', iconURL: 'https://genshinpro.com.br/wp-content/uploads/2020/10/cropped-max-logo-white-2.png', url: 'https://genshinpro.com.br/farming/' })
    .setDescription("Farmings de Materiais de Talento dos Personagens e Materiais de Ascensão de Armas")
    .setThumbnail("https://genshinpro.com.br/wp-content/uploads/2020/10/cropped-max-logo-white-2.png")
    .setFields(
        {name:'\u200B', value:'\u200B'},
        {name: 'Materiais', value: '\u200B', inline: true},
        {name: 'Dias', value:'\u200B', inline: true},
        {name: 'Personagens', value: '\u200B', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Liberdade', inline: true},
        {name: '\u200B', value: 'Segunda, Quinta', inline: true},
        {name: '\u200B', value: 'Amber, Barbara, Diona, Klee, Sucrose, Childe', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Prosperidade', inline: true},
        {name: '\u200B', value: 'Segunda, Quinta', inline: true},
        {name: '\u200B', value: 'Keqing, Ningguang, Qiqi, Xiao', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Esforço', inline: true},
        {name: '\u200B', value: 'Terça, Sexta', inline: true},
        {name: '\u200B', value: 'Chongyun, Xiangling, Ganyu, Hutao', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Resistência', inline: true},
        {name: '\u200B', value: 'Terça, Sexta', inline: true},
        {name: '\u200B', value: 'Bennett, Diluc, Jean, Mona, Noelle, Razor', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Poemas', inline: true},
        {name: '\u200B', value: 'Quarta, Sábado', inline: true},
        {name: '\u200B', value: 'Fischl, Kaeya, Lisa, Venti, Albedo', inline: true},
        {name: '\u200B', value: 'Ensinamentos de Ouro', inline: true},
        {name: '\u200B', value: 'Quarta, Sábado', inline: true},
        {name: '\u200B', value: 'Beidou, Xingqiu, Zhongli, Xinyan', inline: true},
    )

    const armEmbed = new EmbedBuilder()
    .setTitle('Materiais de Ascensão de Armas')
    .setColor("Random")
    .setAuthor({ name: 'GenshinPro', iconURL: 'https://genshinpro.com.br/wp-content/uploads/2020/10/cropped-max-logo-white-2.png', url: 'https://genshinpro.com.br/farming/' })
    .setThumbnail("https://genshinpro.com.br/wp-content/uploads/2020/10/cropped-max-logo-white-2.png")
    .setFields(
        {name: 'Materiais', value: '\u200B', inline: true},
        {name: 'Dias', value:'\u200B', inline: true},
        {name:'\u200B', value:'\u200B'},
        {name: '\u200B', value: 'Decarabia', inline: true },
        {name: '\u200B', value: 'Segunda, Quinta', inline: true},
        {name:'\u200B', value:'\u200B'},
        {name: '\u200B', value: 'Guyun', inline: true},
        {name: '\u200B', value: 'Segunda, Quinta', inline: true},
        {name:'\u200B', value:'\u200B'},
        {name: '\u200B', value: 'Elixir de Chumbo', inline: true },
        {name: '\u200B', value: 'Terça, Sexta', inline: true},
        {name:'\u200B', value:'\u200B'},
        {name: '\u200B', value: 'Lobo Boreal', inline: true},
        {name: '\u200B', value: 'Terça, Sexta', inline: true},
        {name:'\u200B', value:'\u200B'}, 
        {name: '\u200B', value: 'Aerosiderite', inline: true},
        {name: '\u200B', value: 'Quarta, Sábado', inline: true},
        {name:'\u200B', value:'\u200B'},
        {name: '\u200B', value: 'Grilhões', inline: true},
        {name: '\u200B', value: 'Quarta, Sábado', inline: true},
    )

module.exports = {
    data: new SlashCommandBuilder()
    .setName("farm")
    .setDescription("Mostra itens a ser farmados no seus respequitivos dias"),

    async execute(interaction){
        await interaction.reply({embeds: [FarmingEmbed, armEmbed]})
    },

    /*data: new SlashCommandBuilder()
    .setName("asdasdasd")
    .setDescription("dasdasd"),*/
}