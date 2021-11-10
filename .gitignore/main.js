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
    client.user.setActivity('Keep Still Entertainment', ({type: "WATCHING"}))
})

client.on('message', async message => {
    
            if(message.content.startsWith(prefix + "p")) {
 
                var args = message.content.split(" ").slice(1);
                var msge = args.join(' ');
 
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                if(!msge) return message.channel.send("Precise un message")
 
                var mpall = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/613697754614595597/784589295168127006/KSEDISC.png")
                .setTimestamp()
                .setColor("RANDOM")
                .addField("Keep Still Entertainment :", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))
            }

});

client.on('guildMemberAdd', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
    let embed = new Discord.MessageEmbed()
    .setTitle('Bienvenue 👋 !')
    .setDescription(`${member.user.tag} Bonjours a toi ! Hesite pas aller lire le reglement.`)
    .setColor('#2e1400')
    .setTimestamp()
    client.channels.cache.get(channelID).send(embed)
})
client.on('guildMemberRemove', (member) => {
    let channelID = '613703562060496922';
    if(member.guild.id != '354263712430948354') return;
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

client.on('message', message => {
    if(message.author.bot) return;

    if(command === 'regl'){
        .setColor("#0099ff")
        .setTitle("**Reglement**")
        .setURL("kse.com")
        .setAuthor("Keep Still Entertainment")
        .setDescription("Description du Message")
    message.channel.send(embed);
});

client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});

client.login(process.env.TOKEN)
