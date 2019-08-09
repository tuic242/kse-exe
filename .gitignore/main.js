const Discord = require('discord.js')
const bot = new Discord.Client()
const express = require('express');
const app = express();

var prefix = "§"


//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[Help.exe]', type: 0}});
    console.log("Bot Ready !");
})


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

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}

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
    

bot.login(process.env.TOKEN)



