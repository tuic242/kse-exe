const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.on('ready', () => {
    console.log(`En ligne`)
    client.user.setActivity('V0.1', ({type: "WATCHING"}))
})

client.on('guildMemberAdd', (member) => {
    let channelID = '613707298350563328';
    if(member.guild.id != '788188330519953410') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member.user.tag} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '613707298350563328';
    if(member.guild.id != '788188330519953410') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`${member.user.tag} Quitte le serveur.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})

client.login(process.env.TOKEN)
