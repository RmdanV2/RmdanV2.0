const cooldown = 1800000
let handler = async(m, { conn, usedPrefix, text, participants }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastlimit))
    if (new Date - user.lastlimit <= cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`𝙏𝙖𝙜 𝙖𝙡𝙡 𝙧𝙚𝙘𝙚𝙣𝙩𝙡𝙮 𝙪𝙨𝙚𝙙, 𝙥𝙡𝙚𝙖𝙨𝙚 𝙬𝙖𝙞𝙩 𝙩𝙞𝙡𝙡 𝙘𝙤𝙤𝙡𝙙𝙤𝙬𝙣 𝙛𝙞𝙣𝙞𝙨𝙝.

⏱️ ${timers.toTimeString()}`.trim(), './media/cooldown.jpg', [[`𝙈𝙚𝙣𝙪`, `${usedPrefix}valor`]], m, {asLocation: true})
  let teks = `${text ? text : '*––––––『 TAG All 』––––––*'}\n\n${readMore}`
		      	for (let mem of participants) {
		            teks += `\n@${mem.id.split('@')[0]}`
				}
            await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    user.lastlimit = new Date * 1
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(tagall|all)$/i

handler.group = true
handler.limit = true
handler.admin = true
handler.cooldown = cooldown

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)