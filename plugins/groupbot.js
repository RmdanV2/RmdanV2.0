let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧*\n\n\n━━━〔 𝘿𝙤𝙣'𝙩 𝙛𝙤𝙧𝙜𝙚𝙩 𝙙𝙤𝙣𝙖𝙩𝙞𝙤𝙣 〕━━━`,
	rows: [
	    {title: ` › Group ${namebot}`, description: `Group Utama ${namebot}`, rowId:".gcbot"}
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler