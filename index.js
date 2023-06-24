const {Client, Events, GatewayIntentBits, Collection, EmbedBuilder, Colors, ButtonBuilder, embedLength, Embed} = require("discord.js")
const client = new Client({intents: [GatewayIntentBits.Guilds]})
const dotenv = require('dotenv')
dotenv.config()
const {CHAVE, CLIENT_ID, GUILD_ID} = process.env
const fs = require("node:fs")
const path = require("node:path")

const commandPath = path.join(__dirname, "Comados")
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"))

module.exports = client;

client.commands = new Collection()

for(const file of commandFiles){
    const filePath = path.join(commandPath, file)
    const commands = require(filePath)
    if("data" in commands && "execute" in commands){
        client.commands.set(commands.data.name, commands )
    }else{
        console.log(`Esse comando em${filePath} está em "data" ou em "execute ausent"`)
    }
}

client.once(Events.ClientReady, c =>{
    console.log(`Estou pronta pra trabalhar${c.user.tag}`)
})


client.on("ready", () =>{
    client.user.setActivity(`Minecraft`)
})

client.login(CHAVE)

const exampleEmbed = new EmbedBuilder()
	    .setColor("Random")
	    .setTitle('Minecraft apk')
	    .setURL('https://www.mediafire.com/file/govmtlanmiu5ncc/minecraft-1-20-0.apk/file')
        .setImage('https://img.ibxk.com.br/2018/11/programas/8125222104324541-t100x100.png')
	    .setDescription('Minecraft.apk  versão 1.20.0')

    const stardewEmbed = new EmbedBuilder()
        .setColor("Random")
        .setTitle('Stardew Valley')
        .setURL('https://www.mediafire.com/file/k183zjcu3nyp5w9/Stardew.Valley.v1.5.6.rar/file')
        .setImage('https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png')
        .setDescription('Stardew Valley v1.5.6')

    const pokeEmbed = new EmbedBuilder()
        .setColor("Random")
        .setTitle('Pokemon FireRed ')
        .setURL('https://www.mediafire.com/file/0j503ng6xpuftk3/Pokemon+-+Fire+Red+(BR).gba/file')
        .setImage('https://www.esports.net/br/wp-content/uploads/sites/3/2022/10/pokemon-firered.jpg')
        .setDescription('Pokemon FireRed (Pt_br) GBA')


const AmberEmbed = new EmbedBuilder()
    .setColor("Red")
	.setTitle('Amber')
	.setAuthor({ name: 'GenshinBuilds', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/amber' })
	.setDescription('Build da Amber')
    .setImage('https://media.discordapp.net/attachments/1119014051033403473/1119460785454858310/image.png?width=704&height=179')
	.setThumbnail('https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/amber/header_image.png?strip=all&quality=10&w=900')
    const amber2Embed = new EmbedBuilder()
        .setColor("Red")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119466840280801390/image.png")

const BarbaraEmbed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle('Barbara')
    .setAuthor({ name: 'GenshinBuilds', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/barabara' })
    .setDescription('Build da Barbara')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119467130958647396/image.png')
    .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/7/76/Character_Barbara_Full_Wish.png/revision/latest?cb=20220507160248')

    const Barbara2Embed = new EmbedBuilder()
        .setColor("Blue")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119467353781059724/image.png")

const BeidouEmbed = new EmbedBuilder()
    .setColor("Purple")
    .setTitle('Beidou')
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/beidou' })
    .setDescription('Build da Beidou')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119469077757431808/image.png')
    .setThumbnail('https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/beidou/header_image.png?strip=all&quality=10&w=900')

    const Beidou2Embed = new EmbedBuilder()
        .setColor("Purple")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119469249874898984/image.png")

const ChongyunEmbed = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle('Chongyun')
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/chongyun' })
    .setDescription('Build do Chongyun')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119470370341257436/image.png')
    .setThumbnail('https://static.wikia.nocookie.net/genshin-impact/images/2/2f/Personagem_Chongyun_Desejo.png/revision/latest?cb=20220907163440&path-prefix=pt-br')

    const Chongyun2Embed = new EmbedBuilder()
        .setColor("Aqua")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119461258182279168/image.png")


const BennettEmbed = new EmbedBuilder()
    .setColor("Red")
    .setTitle('Bennett')
    .setAuthor({ name: 'GenshinGuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/bennett' })
    .setDescription('Build do Bennett')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119474903268216864/image.png')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTb_hRs8egTcJxm911UcqsnBHT2_1KJmaIYuprKetdj8Oz6iRrTn79116adZRMT7fKLA&usqp=CAU')

    const Bennett2Embed = new EmbedBuilder()
        .setColor("Red")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119475045677400064/image.png")

const DilucEmbed = new EmbedBuilder()
    .setColor("Red")
    .setTitle('Diluc')
    .setAuthor({ name: 'GenhsinGuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/diluc' })
    .setDescription('Build do Diluc')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119475342885802055/image.png')
    .setThumbnail('https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/diluc/header_image.png?strip=all&quality=10&w=900')

    const Diluc2Embed = new EmbedBuilder()
        .setColor("Red")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119475499467550781/image.png")

const DionaEmbed = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle('Diona')
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/diona' })
    .setDescription('Build da Diona')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119475722080223323/image.png')
    .setThumbnail('https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/diona/header_image.png?strip=all&quality=10&w=900')

    const Diona2Embed = new EmbedBuilder()
        .setColor("Aqua")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119475805572038747/image.png")

const FischlEmbed = new EmbedBuilder()
    .setColor("Purple")
    .setTitle('Fischl')
    .setAuthor({ name: 'GenshinGuilds', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/fischl' })
    .setDescription('Build da Fischl')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119476557568811058/image.png')
    .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Character_Fischl_Full_Wish.png/revision/latest?cb=20220507161249')

    const Fischl2Embed = new EmbedBuilder()
        .setColor("Purple")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119476675214848082/image.png")

const JeanEmbed = new EmbedBuilder()
    .setColor("Green")
    .setTitle('Jean')
    .setAuthor({ name: 'GenshinGuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/jean' })
    .setDescription('Build da Jean')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119478012455436330/image.png')
    .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Character_Jean_Full_Wish.png/revision/latest?cb=20221014022733')

    const Jean2Embed = new EmbedBuilder()
        .setColor("Green")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119478193519333386/image.png")

const KaeyaEmbed = new EmbedBuilder()
    .setColor("Aqua")
    .setTitle('Kaeya')
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/kaeya' })
    .setDescription('Build do Kaeya')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119479021542064179/image.png')
    .setThumbnail('https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/kaeya/header_image.png?strip=all&quality=10&w=900')

    const Kaeya2Embed = new EmbedBuilder()
        .setColor("Aqua")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119479117759402126/image.png")

    const KeqingEmbed = new EmbedBuilder()
    .setColor("Purple")
    .setTitle('Keqing')
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/keqing' })
    .setDescription('Build do Keqing')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1119479550619947038/image.png')
    .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/b/be/Character_Keqing_Full_Wish.png/revision/latest?cb=20220507113259')
    
    const Keqing2Embed = new EmbedBuilder()
        .setColor("Purple")
        .setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119479627040178247/image.png")

const AlbedoEmbed =new EmbedBuilder()
    .setColor("Orange")
    .setTitle("Albedo")
    .setAuthor({ name: 'GenshinBuild', iconURL: 'https://genshin-builds.com/_next/image?url=%2Flogo.png&w=96&q=75', url: 'https://genshin-builds.com/pt/character/keqing' })
    .setDescription('Build do Keqing')
    .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1122261055280779385/image.png')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpmeX0QnQaJ_SdzjMqdMySj-Haa9n62LPLQ&usqp=CAU')
    const Albedo2Embed =new EmbedBuilder()
        .setColor("Orange")
        .setImage('https://cdn.discordapp.com/attachments/1119014051033403473/1122261189305569290/image.png')

client.on(Events.InteractionCreate, async interaction => {
    if(interaction.isStringSelectMenu()){
        
        const selected = interaction.values[0]
        switch (selected) {
            case "Minecraft":
                    await interaction.reply({embeds: [exampleEmbed]})
                break;
            case "Stardew Valley":
                    await interaction.reply({embeds: [stardewEmbed]})
                break;
                case "PokemonFireRed":
                    await interaction.reply({embeds: [pokeEmbed]})
                break;
        }
    
    }
    if(interaction.isStringSelectMenu()){
        let select = interaction.values[0]
        switch (select) {
            case "Pimenta Jaeyun":
                await interaction.reply({embeds: [PimentaEmbed, Pimenta2Embed]})
                break;
            case "Minerios":
                await interaction.reply({embeds: [MineriosEmbed]})
                break;
            case "Corlapis":
                await interaction.reply({embeds: [CorLapisEmbed]})
                break;
            case "Fungos Maritimos":
                await interaction.reply({embeds: [FungosMaritmosEmbed]})
            default:
                break;
        }
    }
    if(interaction.isStringSelectMenu()){
        
        const select = interaction.values[0]
        switch (select) {
            case "Amber":
                    await interaction.reply({embeds: [AmberEmbed, amber2Embed]})
                break;
            case "Barbara":
                    await interaction.reply({embeds: [BarbaraEmbed, Barbara2Embed]})
                break;
            case "Beidou":
                    await interaction.reply({embeds: [BeidouEmbed, Beidou2Embed]})
                break;
            case "Bennett":
                    await interaction.reply({embeds: [BennettEmbed, Bennett2Embed]})
                break;
            case "Chongyun":
                    await interaction.reply({embeds: [ChongyunEmbed, Chongyun2Embed]})
                break;
            case "Diluc":
                    await interaction.reply({embeds: [DilucEmbed, Diluc2Embed]})
                break;
            case "Diona":
                    await interaction.reply({embeds: [DionaEmbed, Diona2Embed]})
                break;
            case "Fischl":
                await interaction.reply({embeds: [FischlEmbed, Fischl2Embed]})
                break;
            case "Jean":
                    await interaction.reply({embeds: [JeanEmbed, Jean2Embed]})
                break;
            case "Kaeya":
                    await interaction.reply({embeds: [KaeyaEmbed, Kaeya2Embed]})
                break;
            case "Keqing":
                    await interaction.reply({embeds: [KeqingEmbed, Keqing2Embed]})
                break;
            case "Albedo":
                await interaction.reply({embeds: [AlbedoEmbed, Albedo2Embed]})
            break;
            
        }
    }

    if(!interaction.isChatInputCommand())return

    const command = interaction.client.commands.get(interaction.commandName)
        if(!command){
            console.error("Comando nao encontrado!")
            return
        }
        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply("Houve um erro ao executar o comando")
        }{
        
    }
})
const PimentaEmbed = new EmbedBuilder()
.setColor("Red")
.setTitle("Pimenta Jaeyun")
.setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119014174274617416/image.png")
const Pimenta2Embed = new EmbedBuilder()
.setColor("Red")
.setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1119014311956856842/image.png")

const MineriosEmbed = new EmbedBuilder()
.setColor("Default")
.setTitle("Minérios")
.setImage("https://media.discordapp.net/attachments/1119014051033403473/1122255318106255360/image.png?width=381&height=395")

const CorLapisEmbed = new EmbedBuilder()
.setColor("DarkGold")
.setTitle("Cor Lápis")
.setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1122258556268335225/image.png")

const FungosMaritmosEmbed = new EmbedBuilder()
.setColor("Blue")
.setTitle("Fungos Maritimos")
.setImage("https://cdn.discordapp.com/attachments/1119014051033403473/1122260626413195374/image.png")