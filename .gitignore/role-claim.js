const firstMessage = require('./first-message')

module.exports = (client) => {
    const channelId = '696684380374171740'

    firstMessage(client, channelId, 'hello', [])

}
