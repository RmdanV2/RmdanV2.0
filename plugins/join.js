let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
	let user = global.db.data.users[m.sender]
	if (user.joinlimit == 0) throw 'Limit Join anda sudah habis! (0 / 1)'
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    let expiredd = 86400000
    expired = Math.floor(Math.min(1, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 1)))
user.joinlimit -= 1
    m.reply(`𝘽𝙚𝙧𝙝𝙖𝙨𝙞𝙡 𝙟𝙤𝙞𝙣 𝙜𝙧𝙪𝙥 ✅ ${res}\n𝘽𝙊𝙏 𝘼𝙆𝘼𝙉 𝙆𝙀𝙇𝙐𝘼𝙍 𝘿𝘼𝙇𝘼𝙈 𝟭 𝙃𝘼𝙍𝙄`)
    m.reply(`(${user.joinlimit}/1) Limit For Using Join`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']
handler.private = true
handler.limit = true

handler.command = /^join$/i

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))