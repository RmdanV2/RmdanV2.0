let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

  *𝙉𝙤𝙩𝙚:*
• `𝙊𝙬𝙣𝙚𝙧 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙣𝙚𝙧𝙞𝙢𝙖 𝙨𝙖𝙫𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩
• 𝙊𝙬𝙣𝙚𝙧 𝙗𝙚𝙧𝙝𝙖𝙠 𝙗𝙡𝙤𝙘𝙠𝙞𝙧 𝙩𝙖𝙣𝙥𝙖 𝙖𝙡𝙖𝙨𝙖𝙣
• 𝘽𝙚𝙧𝙗𝙞𝙘𝙖𝙧𝙖𝙡𝙖𝙝 𝙮𝙖𝙣𝙜 𝙨𝙤𝙥𝙖𝙣 & 𝙩𝙞𝙙𝙖𝙠 𝙨𝙥𝙖𝙢
• 𝙊𝙬𝙣𝙚𝙧 𝙃𝙖𝙣𝙮𝙖 𝙢𝙚𝙧𝙚𝙨𝙥𝙤𝙣 𝙮𝙖𝙣𝙜 𝙗𝙚𝙧𝙠𝙖𝙞𝙩𝙖𝙣 𝙙𝙚𝙣𝙜𝙖𝙣 𝘽𝙊𝙏
• 𝙉𝙤 𝙏𝙚𝙡𝙥'

  let teks = `${htjava} _𝙋𝙞𝙡𝙞𝙝 𝙋𝙧𝙚𝙨𝙚𝙩 𝙣𝙮𝙖 𝙙𝙞𝙗𝙖𝙬𝙖𝙝 𝙠𝙖𝙠\n${htjava} *𝙆𝙃𝙐𝙎𝙐𝙎 𝙋𝙍𝙀𝙎𝙀𝙏 𝘼𝙇𝙄𝙂𝙃𝙏 𝙈𝙊𝙏𝙄𝙊𝙉*`
const sections = [
   {
	title: `${htjava} 𝙋𝙧𝙚𝙨𝙚𝙩 𝙈𝙚𝙣𝙪 –––––––––·•`,
	rows: [
	{title: "▢ Preset 1", rowId: ".p1"},
    {title: "▢ Preset 2", rowId: ".p2"},
	{title: "▢ Preset 3", rowId: ".p3"},
	{title: "▢ Preset 4", rowId: ".p4"},
	{title: "▢ Preset 5", rowId: ".p5"},
	{title: "▢ Preset 6", rowId: ".p6"},
	{title: "▢ Preset 7", rowId: ".p7"},
	{title: "▢ Preset 8", rowId: ".p8"},
	{title: "▢ Preset 9", rowId: ".p9"},
	{title: "▢ Preset 10", rowId: ".p10"},
]
    },{
	title: `${htjava} 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝙈𝙚 –––––––·•`,
	rows: [
	    {title: "• 𝘿𝙤𝙣𝙖𝙨𝙞", rowId: ".owner nomor"},
	{title: "• 𝙎𝙚𝙬𝙖", rowId: ".sewa"},
	{title: "• 𝘽𝙪𝙮 𝙋𝙧𝙚𝙢𝙞𝙪𝙢", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *𝙋𝙧𝙚𝙨𝙚𝙩 𝙈𝙚𝙣𝙪* ${htka}`,
  buttonText: "𝘾𝙡𝙞𝙘𝙠 𝙃𝙚𝙧𝙚 !",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['fun']
handler.command = /^(presetmenu)/i


export default handler
