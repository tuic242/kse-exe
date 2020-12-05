const firstMessage = require('./first-message')

module.exports = (client) => {
    const channelId = '696684380374171740'

    const getEmoji = (emojiName) => 
      client.emojis.cache.find((emoji) => emoji.name === emojiname)

    const emojis = {
        NotificationMiniJeux: 'video_game',
        NotificationStream: 'red_circle',
    }

    const reaction = []

    let emojitext = 'Clique sur une des réactions pour avoir le rôle que tu veux. \n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reaction.push(emoji)

        const role = emoji[key]
        emojiText += `${emoji} = ${role}\n`
    }

    firstMessage(client, channelId, emojitext, [])
}