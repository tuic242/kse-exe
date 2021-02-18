const Discord = require('discord.js')
const client = new Discord.Client({partials: ["MESSAGE", "CHANNELS", "REACTION" ]});
const prefix = '_'

client.on('ready', () => {
    console.log(`En ligne`)
    client.user.setActivity('le groupe KSE', ({type: "WATCHING"}))
})

client.on('guildMemberAdd', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('A Bientot !')
    .setDescription(`${member} Quitte le serveur.`)
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

client.login(process.env.TOKEN)
