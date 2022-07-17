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
		channelId: "994157312950407168",
		guildId: "994002258658345120",       
		adapterCreator: bot.guilds.cache.get("994002258658345120").voiceAdapterCreator
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
