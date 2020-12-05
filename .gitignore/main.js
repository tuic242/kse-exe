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
        bot.user.setGame('Tuic242', 'https://www.twitch.tv/tuic242_')
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
                .setThumbnail("https://cdn.discordapp.com/attachments/613697754614595597/784589295168127006/KSEDISC.png")
                .setTimestamp()
                .setColor("RANDOM")
                .addField("Keep Still Entertainment :", msge);
                message.delete()
                message.guild.members.map(m => m.send(mpall))
            }

});

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
    if (message.content === 'HROLE') {
        const embed = new Discord.RichEmbed()
        .setTitle("Introduction :")
        .setColor('#2e1400')
        .setDescription(" Keep Still Entertainment et un serveur créé en 2017 par 6 adolescents passionnés par le roleplay, dans l'objectif d'en faire sur ROBLOX, KSE avec les années évoluera, changera de nom, de map, de maturité. \n\n Aujourd'hui KSE a pour objectif de changer l'image du roleplay francophone sur ROBLOX, mais aussi de développer des serveurs sûrs d'autres jeux (comme sur ARMAIII par exemple), mais aussi de développer et de ce lancer dans des projets de développement et de création jeux vidéo. \n\n __**Le groupe KSE :**__ \n - KSP / Keep Still Production : Studio de developpement des jeux KSE. \n - KSE / Keep Still Entertainment : Editeur et administrateur des production de KSP. \n\n __**Les projets de KSE :**__ \n - LCPD:FR / Map Workshop LCDP:FR / Projet CLOS / ROBLOX \n - ISPAGNAC RP / Maj Maison Ispagnac / Projet en cours archivassions / ROBLOX \n - ISPAGNAC REMAKE / Map Ispagnac modifie / Projet en cours de développement / ROBLOX \n - X / Map Maison PasDeNom / Projet en cours de developpement / ROBLOX \n\n __**Le staff Le staff de KSE est constitué de 4 grades :**__ \n - Administrateur : Personne ayant soit fonde le serveur ou ayant récolté la plus haute confiance des fondateurs et ayant travaillé dur pour le serveur. \n - Modérateur : Personne ayant la mission et tous les pouvoirs dans objectif de faire respecter les règles générales de KSE mais aussi en fonction des jeux d'affection \n - Equipe de développement : Personne étant membre du studio de développement KSP")
        .setThumbnail("https://yagami.xyz/content/uploads/2018/11/discord-512-1.png")
        .setTimestamp()

        message.channel.send({embed});
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



