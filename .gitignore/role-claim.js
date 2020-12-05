const firstMessage = require('./first-message')

module.exports = (bot) => {
    const channelId = '696684380374171740'

    firstMessage(bot, channelId, 'hello', [])

}
