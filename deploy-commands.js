const {REST, Routes} = require("discord.js")

const dotenv = require("dotenv")
dotenv.config()
const {CHAVE, CLIENT_ID, GUILD_ID} = process.env

const fs = require("node:fs")
const path = require("node:path")
const commandPath = path.join(__dirname, "Comados")
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"))

const commands = []

	for (const file of commandFiles) {
		const command = require(`./Comados/${file}`)
		commands.push(command.data.toJSON())
	}
	const rest = new REST({ version: "10"}).setToken(CHAVE);

	(async () =>{
		try {
			console.log(`Resetando ${commands.length} comandos...`)
			const data = await rest.put(
				Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
				{body: commands}
			)
			console.log("Comandos registrados com sucesso")
		} catch (error) {
			console.error(error)
		}
	})()
