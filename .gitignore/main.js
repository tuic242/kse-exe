const Discord = require('discord.js')
const bot = new Discord.Client()
const express = require('express');
const app = express();

//Debut Parametres Heroku 
app.set('port',(process.env.PORT || 5000))


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'Ne pas faire usage du lien envoyer en mp', type: 0}});
    console.log("Bot Ready !");
})


bot.on('message', function (message) {
    if (message.content === 'Dit.exe') {
        message.channel.send('**Mon préfix est ".exe" mais je suis pour le moment inutilisable**')
    }
})

bot.on('message', function (message) {
    if (message.content === 'Help.exe') {
        message.channel.send('** Voici toute mais commande : ** \n***Rappelle : je suis toujours en développement *** \n**[InfoJ.exe] Permet de connaitre le statut des métiers **')
    }
})

bot.on('message', function (message) {
    if (message.content === 'Test1.exe') {
        message.channel.send('`Test1.exe Mise a jour bien intégrer`')
    }
})

bot.on('message', function (message) {
    if (message.content === 'InfoJ.exe') {
        message.channel.send('**Voici les statut des recrutement de tout les metier : ** \n:cop: **Gendarme : `Close #recrutement-gn`** \n:fire_engine: **Sapeurs Pompiers : `Open #recrutement_sp`** \n:customs: **Douane : `Close #recrutement-dn` ** \n:construction_worker: **Dir : `Open #recrutement-dir`**')
    }
})

client.on('message', msg => {
    if (msg.guild && msg.content.startsWith('/private')) {
      let text = msg.content.slice('/private'.length); // cuts off the /private part
      msg.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
  });


bot.login(process.env.TOKEN)



