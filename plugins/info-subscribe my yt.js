let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*Bantu Follow Instagram Me*`
const templateButtons = [
    {index: 1, urlButton: {displayText: '𝙁𝙤𝙡𝙡𝙤𝙬 𝙈𝙮 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', url: 'https://www.instagram.com/rmdanlol_/'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['myig'] 
 handler.tags = ['info'] 
 handler.command = /^(myig)$/i 
  
 export default handler
