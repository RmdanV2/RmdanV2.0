let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '𝙋𝙖𝙙𝙖𝙝𝙖𝙡 𝙎𝙪𝙙𝙖𝙝 𝙅𝙖𝙙𝙞 𝘼𝙙𝙢𝙞𝙣'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.help = ['📌']
handler.tags = ['group']
handler.command = /^📌$/i

handler.rowner = true
handler.botAdmin = true
handler.group = true

export default handler 
