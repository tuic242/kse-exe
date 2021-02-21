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

client.on('message', message => {
 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
  
});

client.on('message', function (message) {
    if (message.content === 'HINTRO') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Introduction :**__")
        .setColor('#2e1400')
        .setDescription(" Keep Still Entertainment et un serveur créé en 2017 par 6 adolescents passionnés par le roleplay, dans l'objectif d'en faire sur ROBLOX, KSE avec les années évoluera, changera de nom, de map, de maturité. \n\n Aujourd'hui KSE a pour objectif de changer l'image du roleplay francophone sur ROBLOX, mais aussi de développer des serveurs sûrs d'autres jeux (comme sur ARMAIII par exemple), mais aussi de développer et de ce lancer dans des projets de développement et de création jeux vidéo. \n\n __**Le groupe KSE :**__ \n - KSP / Keep Still Production : Studio de developpement des jeux KSE. \n - KSE / Keep Still Entertainment : Editeur et administrateur des production de KSP. \n\n __**Les projets de KSE :**__ \n - LCPD:FR / Map Workshop LCDP:FR / Projet CLOS / ROBLOX \n - ISPAGNAC RP / Maj Maison Ispagnac / Projet en cours archivassions / ROBLOX \n - ISPAGNAC REMAKE / Map Ispagnac modifie / Projet en cours de développement / ROBLOX \n - X / Map Maison PasDeNom / Projet en cours de developpement / ROBLOX \n\n __**Le staff Le staff de KSE est constitué de 4 grades :**__ \n - Administrateur : Personne ayant soit fonde le serveur ou ayant récolté la plus haute confiance des fondateurs et ayant travaillé dur pour le serveur. \n - Modérateur : Personne ayant la mission et tous les pouvoirs dans objectif de faire respecter les règles générales de KSE mais aussi en fonction des jeux d'affection \n - Equipe de développement : Personne étant membre du studio de développement KSP")
        .setThumbnail("https://cdn.discordapp.com/attachments/613697754614595597/784589295168127006/KSEDISC.png")
        .setTimestamp()

        message.channel.send({embed});
    }
})

client.login(process.env.TOKEN)
