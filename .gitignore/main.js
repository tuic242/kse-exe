const Discord = require('discord.js')
const bot = new Discord.Client()
const express = require('express');
const app = express();

var prefix = "§"


//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))

bot.on('ready', () => {
	console.log('Bot Launched..')
	bot.user.setStatus('Online')
        bot.user.setGame('KSE')
});

bot.on('guildMemberAdd', member => {
    bot.channels.get('613703562060496922').send(`**Bienvenue à toi, bon roleplay ${member}**`);
});

bot.on('guildMemberRemove', member => {
    bot.channels.get('613703562060496922').send(`**Aurevoir et bonne chance :) ${member}**`);
});

bot.on('message', async message => {
    
            if(message.content.startsWith(prefix + "p")) {
 
                var args = message.content.split(" ").slice(1);
                var msge = args.join(' ');
 
                if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
                if(!msge) return message.channel.send("Precise un message")
 
                var mpall = new Discord.RichEmbed()
                .setThumbnail()
                .setTimestamp()
                .setColor("RANDOM")
                .addField("RRF Vous annonce :", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))
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
	.setTitle('__**Information Serveur Discord**__')
	.addField('**Reglement :**', '***Pour le reglement generale : <#614153976526536818>; Hiérarchie / Article  : <#627906211592929330>***', true)  	 
	.addField('**Lien :**', '[Roblox Jeux](https://www.roblox.com/games/2434529364/RP-FR-Ispagnac-V1-2-8) ; [Roblox Groupe](https://www.roblox.com/groups/4036459/RRF-Roblox-Roleplay-France#!/about)', true)
	.addField('**Propriétaire :**', '***Jeffiste, Tuic242***', true)
	.setImage('https://cdn.discordapp.com/attachments/613699577664765953/629979994885455872/Screenshot_3_-_Copie.png')
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'HROLE') {
        let uEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
	.setTitle('__**Hierachie Serveur Discord**__')
	.addField('**Propriétaire**', '***Jeffiste, Tuic242***', true)
        .addBlankField()  	 
	.addField('**Responsable General**', '***OfficerBerreta***', true)
        .addBlankField()
	.addField('**Equipe de Responsable**', '***Co-Responsable ; Responsable Administration/Moderation***', true)
        .addBlankField()
        .addField('**Equipe d Administration**', '***Administrateur***', true)
        .addBlankField()
        .addField('**Equipe de Responsable Metier**', '***Caserne, Brigade, Unite Douanier, Samu, D.I.R***', true)
        .addBlankField()
        .addField('**Equipe de Moderation**', '***Moderateur***', true)
        .addBlankField()
        .addField('**Equipe Assistant**', '***Assistant***', true)
	.setImage('https://cdn.discordapp.com/attachments/319151005365305344/632330523645313044/versionSTAFF.png')
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'Harticle') {
        let uEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
	.addField('**Article 1.1**', '***J- Le Responsable peut si il constate "Un évènement engendrant un risque important" ce donner le droit a toutes les permission, les propriétaire pourront a porter un jugement a cette utilisation abusive ou non. Si le responsable est dans l incapacité être présent ou ne répond pas c est le Co-responsable qui peut s accorder c est droit.***', true)
        .addBlankField()  	 
	.addField('**Article 1.2**', '***- Une personne possédant le rôle administrateur ou + peut si il constate "Un abus, manque de règlement" retire les fonction d un Gendarme , Sapeurs Pompiers, D.I.R, Douane/Police Municipale, même au chef, les haut staff pourront a porter un jugement a cette utilisation abusive ou non***', true)
        .addBlankField()
	.addField('**Article 1.3**', '***- @Responsable General A le droit a accès a tout les métiers si raison valable (pour la propreté il n a pas de rôle pour sont métiers de base comme pour les @Propriétaire   ***', true)
        .addBlankField()
        .addField('**Article 8.1**', '***-Le "Plan d urgence" ne peut être activer que par le responsable* il consiste a supprimer a mettre le serveur a quarantaine, fermer la map,mettre en alerte tout les staff ***', true)
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'HJOB') {
        let uEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
	.setTitle('__**Avoir un metier sur RRF :**__')
	.addField('**Se rendre dans la categorie pole emplois. Sélectionner le metier souhaiter**', '***(juste en dessous de la categorie "Diffusion"***', true)
        .addBlankField()  	 
	.addField('**Cliquer sur l epingle pour voir le modele demander**', '***(Image 1)***', true)
        .addBlankField()
	.addField('**Remplir la fiche**', '***PAS DE MENTION***', true)
        .addBlankField()
        .addField('**Attendre**', '***1 semaine maximun***', true)
        .addBlankField()
	.setImage('https://cdn.discordapp.com/attachments/625042428285681694/625044671479021608/Screenshot_15.png')
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'HSITE') {
        let uEmbed = new Discord.RichEmbed()
        .setColor('#E70606')
	.setTitle('*(https://robloxroleplayfrance.weebly.com/**')	 
	.setTimestamp()
	.setFooter('Roblox Roleplay France (RRF)', 'https://cdn.discordapp.com/attachments/614152106777247774/614152729132138526/2019-07-14_15.19.35.png');
	    
	message.channel.send({embed: uEmbed});
    }
})

    
bot.login(process.env.TOKEN)






bot.login(process.env.TOKEN)



