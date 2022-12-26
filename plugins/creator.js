let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/${nomorown.split`@`[0]}`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ https://wa.me/${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *Nama* : 𝙍𝙖𝙢𝙙𝙖𝙣𝙇𝙄𝙉𝙐𝙓
${htjava} *Nama RL* : 𝙍𝙖𝙢𝙙𝙖𝙣
${htjava} *Gender* : 𝘽𝙤𝙮𝙨
${htjava} *Agama* : 𝙄𝙨𝙡𝙖𝙢
${htjava} *Tanggal lahir* : 𝙋𝙧𝙞𝙫𝙖𝙩𝙚
${htjava} *Umur* : 𝙋𝙧𝙞𝙫𝙖𝙩𝙚
${htjava} *Kelas* : 𝙋𝙧𝙞𝙫𝙖𝙩𝙚
${htjava} *Hobby* : 𝘾𝙤𝙙𝙞𝙣𝙜
${htjava} *Sifat* : - 
${htjava} *Tinggal* : 𝙅𝙖𝙠𝙨𝙚𝙡, 𝘿𝙚𝙥𝙤𝙠
${htjava} *Waifu* : 𝘽𝙪𝙠𝙖𝙣 𝙒𝙄𝘽𝙐 𝘼𝙅𝙂

${htjava} *𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢* : ${sig}
•·––––––––––––––––––––––––––·•
`
  let teks = '𝙋𝙞𝙡𝙞𝙝 𝙙𝙞𝙗𝙖𝙬𝙖𝙝 𝙠𝙖𝙠'
const sections = [
   {
	title: `${htjava} 𝙊𝙬𝙣𝙚𝙧 –––––––––·•`,
	rows: [
	    {title: "• 𝙉𝙤𝙢𝙤𝙧 ", rowId: ".owner nomor"},
	{title: "• 𝘽𝙞𝙤𝙙𝙖𝙩𝙖", rowId: ".owner bio"},
	]
    },{
	title: `${htjava} 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 𝙈𝙚 –––––––·•`,
	rows: [
	    {title: "• 𝘿𝙤𝙣𝙖𝙨𝙞", rowId: ".donasi"},
	{title: "• 𝙎𝙚𝙬𝙖", rowId: ".sewa"},
	{title: "• 𝘽𝙪𝙮 𝙋𝙧𝙚𝙢𝙞𝙪𝙢", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "𝘾𝙡𝙞𝙘𝙠 𝙃𝙚𝙧𝙚 !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['𝙎𝙚𝙬𝙖𝘽𝙊𝙏', `${usedPrefix}sewa`],
                ['𝙈𝙚𝙣𝙪', `${usedPrefix}menu`]
            ], m)
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

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
