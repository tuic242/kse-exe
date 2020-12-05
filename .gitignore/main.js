const { Client, RichEmbed } = require('discord.js');
const bot = new Client();
const express = require('express');
const app = express();

var prefix = "§"


//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))

bot.on('ready', () => {
	console.log('Bot Launched..')
	bot.user.setStatus('Online')
        bot.user.setActivity('800 membres', ({type: "WATCHING"}))
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
        .setTitle("__**Introduction :**__")
        .setColor('#2e1400')
        .setDescription(" Keep Still Entertainment et un serveur créé en 2017 par 6 adolescents passionnés par le roleplay, dans l'objectif d'en faire sur ROBLOX, KSE avec les années évoluera, changera de nom, de map, de maturité. \n\n Aujourd'hui KSE a pour objectif de changer l'image du roleplay francophone sur ROBLOX, mais aussi de développer des serveurs sûrs d'autres jeux (comme sur ARMAIII par exemple), mais aussi de développer et de ce lancer dans des projets de développement et de création jeux vidéo. \n\n __**Le groupe KSE :**__ \n - KSP / Keep Still Production : Studio de developpement des jeux KSE. \n - KSE / Keep Still Entertainment : Editeur et administrateur des production de KSP. \n\n __**Les projets de KSE :**__ \n - LCPD:FR / Map Workshop LCDP:FR / Projet CLOS / ROBLOX \n - ISPAGNAC RP / Maj Maison Ispagnac / Projet en cours archivassions / ROBLOX \n - ISPAGNAC REMAKE / Map Ispagnac modifie / Projet en cours de développement / ROBLOX \n - X / Map Maison PasDeNom / Projet en cours de developpement / ROBLOX \n\n __**Le staff Le staff de KSE est constitué de 4 grades :**__ \n - Administrateur : Personne ayant soit fonde le serveur ou ayant récolté la plus haute confiance des fondateurs et ayant travaillé dur pour le serveur. \n - Modérateur : Personne ayant la mission et tous les pouvoirs dans objectif de faire respecter les règles générales de KSE mais aussi en fonction des jeux d'affection \n - Equipe de développement : Personne étant membre du studio de développement KSP")
        .setThumbnail("https://cdn.discordapp.com/attachments/613697754614595597/784589295168127006/KSEDISC.png")
        .setTimestamp()

        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'REGL1') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Reglement :**__")
        .setColor('#2e1400')
        .setDescription("***Voici le relgement de KSE***")
        .setThumbnail("https://cdn.discordapp.com/attachments/613697754614595597/784589295168127006/KSEDISC.png")
        .setTimestamp()

        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'REGL2') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Reglement ROBLOX :**__")
        .setColor('#2e1400')
        .setDescription("\n\n Article 1.1 : Le Hors RolePlay, qui consiste à faire des actions qui ne pourraient être réalisé dans la vraie vie, est interdit et sanctionnable. \n\n Article 1.2 :Tout troll, freekill pourra être passible d’un bannissement permanant. \n\n Article 1.4 : Le Meta Gaming, qui consiste à de savoir quelque chose qu'il est impossible de savoir dans votre roleplay, est interdit et sanctionnable. \n\n Article 1.5 : Le vol de véhicule de métier est interdit et sanctionnable. \n\n Article 1.6 : Les attaques envers la brigade de la gendarmerie ou la caserne des sapeurs-pompiers sont interdites et sanctionnables. \n\n Article 1.7 : Le no fear role play, tel qu'ignorer la menace d'une arme quelle soit létale ou non, est absolument interdit et sanctionnable. \n\n Article 1.8 : Quitter pendant une action RolePlay, sauf raison valable ou crash, est interdit et sanctionnable. \n\n Article 1.9 : Tous reset/déconnexion lors d'une interpellation d'un staff est interdit et sanctionnable d'un bannissement permanent. \n\n Article 1.10 : Conduire hors des routes est interdit et sanctionnable. \n\n Article 1.11 : Deux zones sont classées militaire : la caserne des sapeurs-pompier et la brigade de gendarmerie, sauf l'accueil. \n\n Article 1.12 : Un gendarme/pompier est sanctionnable de la même façon qu’un civil avec en plus des sanction interne. \n\n Article 1.13 : Tirer depuis son véhicule est interdit et sanctionnable. \n\n Article 1.14 : Si vous faites un accident, laisser votre véhicule avancer seul ! Et appeler les Pompier, en hors RolePlay uniquement si personne ne l'as fais après 2 minutes. \n\n Article 1.15 : Le règlement de ROBLOX s’applique a KSE.")
	
        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'REGL3') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Reglement DISCORD :**__")
        .setColor('#2e1400')
        .setDescription("\n\n Article 2.1 : Votre pseudo doit absolument être en caractères alphanumérique, alphabet latin sous peine d'avertissement. \n\n Article 2.2 : Le harcèlement et la discrimination sont absolument interdits et sanctionnables d'un bannissement. \n\n Article 2.3 : Les images ou vidéos à caractère pornographique sont interdites et sanctionnables d'un bannissement. \n\n Article 2.4 : Les insulte sont interdites et sanctionnables. \n\n Article 2.5 : Tout ce qui peut être sanctionnable par la loi de notre nation, la République Française, est bannissable ici. \n\n Article 2.6 : Les doubles comptes sont interdits et sanctionnables. \n\n Article 2.7 : Toute publicité sur KSE qu'elle soit directe ou indirecte, ce qui consiste en une publicté envoyé en privé a nos joueurs ou le fait de mettre un crédit sur une photo ou de mettre le nom d’un serveur et un lien d’invitation en statut est une publicité, est interdite et sanctionnable voir bannissable. \n\n Article 2.8 : Le règlement de Discord s’applique a KSE. \n\n Article 2.9 : Il est interdit de parler de politique ou de religion sur KSE, KSP ainsi que leurs annexes. \n\n Article 2.10 : Toutes personne envoyant des pub en MP (sauf si la personne et ou était ami avec l'auteur) serrât BAN permanant du serveur et pourra être aussi ban sur d'autre serveur. Je ne rigole plus. Les cancer n'ont pas a être membre de la communauté robloxienne.")

        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'REGL4') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Reglement METIERS :**__")
        .setColor('#2e1400')
        .setDescription("\n\n Article 3.1 : Aucun chef métier ne doit compromettre l’intégrité de Keep Still Entertainment sous peine de révocation immédiate. \n\n Article 3.2 : Pour rejoindre un métier merci de vous dirigez vers les salons de recrutement. \n\n Article 3.3 : Avant de quitter un métier vous devez en informer votre chef ou état major sous peine de sanction. \n\n Article 3.4 : Apres concertation avec le @Conseil d'administration et l'état major concerné un membre d'un métier peut être de promue ou promue. \n\n Article 3.5 : Le chef métier a des responsabilité dans la vie commune du serveur.")

        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'REGL5') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Amendements :**__")
        .setColor('#2e1400')
        .setDescription("Amendement 1 : Keep Still Entertainment appartient a 50% a @M.leMaire Jeff Iste et 50% @Tuic242_ \n Amendement 2 : Le @Conseil d'administration a était crée dans l'objectif d'aiguiller les choix des propriétaires \n Amendement 3 : Le conseil administration et uniquement lui peut effectuer des sanction/action qui ne figure pas dans le règlement. \n Amendement 4 : Keep Still Entertainment contient uniquement deux rôles dans l'administration : @Administrateur et @Modérateur \n Amendement 5 : Il est interdit de parler de politique ou de religion sur KSE, KSP ainsi que leurs annexes. \n Amendement 6 : Tout ce qui peut être sanctionnable par la loi de notre nation, la République Française, est bannissable ici.")
        .setTimestamp()

        message.channel.send({embed});
    }
})

bot.on('message', function (message) {
    if (message.content === 'SERVOFF') {
        const embed = new Discord.RichEmbed()
        .setTitle("__**Status Serveur ROBLOX :**__")
        .setColor('#2e1400')
        .setDescription("Le serveur est actuellement Offline")
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

bot.on('message', message => {
    if(message.author.bot)
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === "Roles"):
            if(embedMsg)
            {
                message.react('🎮')
                .then(reaction => react.message.react('🔴'))
                .then(reaction => reaction.message.delete(5000))
                .then(msg => console.log("Delete Message"))
                .catch(err => console.error);
            }
        }
        return;
    }

    if(message.content.toLowerCase() === '?roles')
    {
        const embed = new RichEmbed();
        embed.setTitle("Roles")
        embed.setColor("BLUE");
        embed.setDescription("Clique sur 🎮 pour savoir quand une session mini jeux se deroulera. \n\n Clique sur 🔴 pour etre tenue au courant des streams.")
        message.channel.send(embed);
    }
})


bot.login(process.env.TOKEN)



