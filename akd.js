const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")


const { joinVoiceChannel } = require('@discordjs/voice');
	bot.on('ready', () => { 
		joinVoiceChannel({
		channelId: "SES KANALI İD",
		guildId: "SUNUCU İD",       
		adapterCreator: bot.guilds.cache.get("SUNUCU İD").voiceAdapterCreator
		});
});


////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()

////////// Durum \\\\\\\\\\
bot.status({
text:"AKD DEVELOMENT",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
prefix:".",
})

//////////// Komutlar \\\\\\\\\\
bot.command({
name:"ping",
aliases:"gecikme",
description:"Botun pingini gösterir.",
code:`
Pong! \`$ping\`
`
})
