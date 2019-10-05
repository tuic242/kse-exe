const Discord = require('discord.js')
const bot = new Discord.Client()
const express = require('express');
const app = express();


//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[Help.exe]', type: 0}});
    console.log("Bot Ready !");
})

bot.on('guildMemberAdd', member => {
    bot.channels.get('613703562060496922').send(`**Bienvenue à toi, bon roleplay ${member}**`);
});

bot.on('guildMemberRemove', member => {
    bot.channels.get('613703562060496922').send(`**Aurevoir et bonne chance :) ${member}**`);
});

bot.on('message', function(message) {
    if (message.content == "!clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(args[0]);
                }, function(err){message.channel.send("Error.exe")})                        
        }
    }

});

bot.on('message', function (message) {
    if (message.content === 'Dit.exe') {
        message.channel.send('**Tu te souviens de cette commande c est bien mais je suis maintenant fonctionnelle alors utilise Help.exe**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'Help.exe') {
        message.channel.send('***Rappelle : Je suis en développement*** \n**Mais commande grand public : ** \n**[InfoJ.exe] Cette commande permet de connaitre le statut des métiers (Si il son ouvert ou fermer) ** \n**[S2.exe] Pas besoin de l’expliquer…….. ** \n \n**Mais commande spécial ** \n**[HelpJ.exe] Cette commande est réserver uniquement au chef métier si une personne vient a \nl’utiliser autre, elle pourrait se voir averti**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'HelpJ.exe') {
        message.channel.send(':warning:__**SEULE LES CHEFS METIERS PEUVENT UTILISER C’EST COMMANDE**__:warning: \n** Voici les commandes chefs métiers : ** \n**[AccepteGN.exe]** \n**[AccepteSP.exe]** \n**[AccepteDN.exe]** \n**[AccepteDIR.exe]** \n**[RefuserDIR.exe]** \n**[RefuserDN.exe]** \n**[RefuserSP.exe]** \n**[RefuserGN.exe]**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'Test1.exe') {
        message.channel.send('`Test1.exe Mise a jour bien intégrer`')
    }
})

bot.on('message', function (message) {
    if (message.content === 'InfoJ.exe') {
        message.channel.send('**Voici les statut des recrutement de tout les metier : ** \n:cop: **Gendarme : `Close #recrutement-gn`** \n:fire_engine: **Sapeurs Pompiers : `Open #recrutement_sp`** \n:customs: **Douane : `Open #recrutement-dn` ** \n:construction_worker: **Dir : `Open #recrutement-dir`**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'S3.exe') {
        message.channel.send('**404**')
    }
})

///Commande Metiers
///Partie Accepte

bot.on('message', function (message) {
    if (message.content === 'AccepteGN.exe') {
        message.channel.send('**Les chefs metiers de la Gendarmerie Nationale on accepeter ta candidature. Bienvenu dans ton nouveaux metier** \n**https://discord.gg/kpNV3YZ**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'AccepteSP.exe') {
        message.channel.send('**Les chefs metiers des Sapeurs Pompiers on accepeter ta candidature. Bienvenu dans ton nouveaux metier** \n**https://discord.gg/w8jPCNc**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'AccepteDN.exe') {
        message.channel.send('**Les chefs metiers de la Douane on accepeter ta candidature. Bienvenu dans ton nouveaux metier** \n**https://discord.gg/6SE6Es9**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'AccepteDIR.exe') {
        message.channel.send('**Les chefs metiers de la DIR on accepeter ta candidature. Bienvenu dans ton nouveaux metier** \n**https://discord.gg/Va4MgXt**')
    }
})

///Partie Refuser

bot.on('message', function (message) {
    if (message.content === 'RefuserDIR.exe') {
        message.channel.send('**Les chefs métiers de la DIR on malheureusement refuser ta candidature, tu peux demander la raison est essayer d améliore ta candidature pour que la prochaine fois tu sois accepter, courage**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'RefuserDN.exe') {
        message.channel.send('**Les chefs métiers de la Douane on malheureusement refuser ta candidature, tu peux demander la raison est essayer d améliore ta candidature pour que la prochaine fois tu sois accepter, courage**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'Aide') {
        message.channel.send('**<@&438631658196041738> <@&430666903464443904> Merci d aider le joueur**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'H84484848') {
        let uEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
	.setTitle('__**Information, Roblox Roleplay France, Serveur Discord**__')
	.addField('**Reglement :**', 'Pour le reglement generale : <#614153976526536818>', 'Pour la hiérarchie et les article relatant au serveur Roblox Roleplay France : <#627906211592929330>',  true)  
	.addField('**Lien :**', '[Roblox Jeux](https://www.roblox.com/games/2434529364/RP-FR-Ispagnac-V1-2-8)', '[Roblox Groupe](https://www.roblox.com/groups/4036459/RRF-Roblox-Roleplay-France#!/about)', true)
	.addField('**Propriétaire :**, ***Jeffiste***, ***Tuic242***, true)
	.setImage('https://cdn.discordapp.com/attachments/613699577664765953/629979994885455872/Screenshot_3_-_Copie.png')
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})




bot.login(process.env.TOKEN)



