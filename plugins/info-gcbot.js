let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 𝙂𝙧𝙤𝙪𝙥 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 : https://chat.whatsapp.com/G3OCjnTsIbIFdOhdERQFMo
🍀 𝙎𝙚𝙧𝙫𝙚𝙧 𝘿𝙞𝙨𝙘𝙤𝙧𝙙 : https://discord.gg/4HvezMAw
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ MENU','.menu']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
