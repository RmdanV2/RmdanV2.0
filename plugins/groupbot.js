let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `ππ’ππ‘ ππ ππ₯π¨π£ π’πππππππ ππ’π§*\n\n\nβββγ πΏπ€π£'π© ππ€π§πππ© ππ€π£ππ©ππ€π£ γβββ`,
	rows: [
	    {title: ` βΊ Group ${namebot}`, description: `Group Utama ${namebot}`, rowId:".gcbot"}
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler