let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    conn.sendHydrated(m.chat,
`*––––––––【 𝘼𝙁𝙆 】––––––––*`,
`   • 𝘼𝙬𝙖𝙮 𝙁𝙧𝙤𝙢 𝙆𝙚𝙮𝙗𝙤𝙖𝙧𝙙 𝙎𝙩𝙖𝙧𝙩𝙚𝙙 •

${conn.getName(m.sender)} 𝙞𝙨 𝙣𝙤𝙬 𝘼𝙁𝙆

𝙍𝙚𝙖𝙨𝙤𝙣: ${text ? '' + text : 'undefined'}`, null, null, null, null, null, [
[`𝘽𝙪𝙡𝙡𝙮 𝙔𝙜 𝘼𝙁𝙆`, `Ok`]
], m)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler