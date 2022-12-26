let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Sistem Bot
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝘽𝙊𝙏 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬.𝟬 𝘽𝙚𝙧𝙟𝙖𝙡𝙖𝙣 𝘿𝙚𝙣𝙜𝙖𝙣 𝘽𝙖𝙞𝙠', 'status@broadcast')
}
handler.help = ['botstats']
handler.tags = ['info']
handler.command = /^(botstats)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 