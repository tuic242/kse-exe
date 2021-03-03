const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '_';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`En ligne`)
    client.user.setActivity('le groupe KSE', ({type: "WATCHING"}))
})

client.on('guildMemberAdd', (member) => {
    let channelID = '788188331267457086';
    if(member.guild.id != '788188330519953410') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member.user.tag} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '788188331267457086';
    if(member.guild.id != '788188330519953410') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`${member.user.tag} Quitte le serveur.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('ping #brain')
    }
    if(command === 'help'){
        message.channel.send('***En cours de redaction***')
    }
})

client.on('message', function (message) {
    if (message.content === '_infrastrucutures') {
    let embed = new Discord.MessageEmbed()
    .setColor('#E70606')
	.setTitle('Status de nos infrastructures')	
    .setDescription(`🎮 Serveur ROBLOX = ❌ \n\n 📰 Serveur DISCORD KSE = ✅ \n\n 🚓 Serveur DISCORD Gendarmerie = ✅ \n\n 🚒 Serveur DISCORD Sapeurs Pompiers = ✅ \n\n 👷 Serveur DISCORD D.I.R = ⚠️[MAINTENANCE] \n\n 🛡️ Serveur DISCORD Staff = ✅ \n\n ***Un probleme avec une de nos infrastructure ? Merci de le signaler <#613710890981654538>***`) 
	.setTimestamp()
	message.channel.send(embed)
    }
})

client.on('message', function (message) {
    if (message.content === '_serveuroff') {
    let embed = new Discord.MessageEmbed()
    .setColor('#2e1400')
	.setTitle('<:Probleme:622741519492710440> Session ROLEPLAY')	
    .setDescription(`Aucune session n'est possible, le serveur V1.4 étant affecté par un problème important d'optimisation. Notre équipe de développement et entrain de travailler sur une version 2.`) 
	.setTimestamp()
	message.channel.send(embed)
    }
})

client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});

client.login(process.env.TOKEN)
