let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw 'πππππππ‘ ππͺπππ ππππ πΌππ’ππ£'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.help = ['π']
handler.tags = ['group']
handler.command = /^π$/i

handler.rowner = true
handler.botAdmin = true
handler.group = true

export default handler 
