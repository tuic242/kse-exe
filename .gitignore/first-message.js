const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if (reactions.length > 0) {
        setTimeout(() => addReactions(message, reactions), 750)
    }
}

module.exports = async (bot, id, test, reactions = []) => {
    const channel = await bot.channels.fetch(id)

    channel.message.fetch().then((message) => {
        if (message.size === 0) {
            // rienr eirneirnre
            channel.send(text).then((message) => {
                addReactions(message, reactions)
            })
        } else {
            // rienriejrnre
            for (const message of messages) {
                message[1].edit(text)
                addReactions(message[1], reactions)
          }
      }
  })
}
