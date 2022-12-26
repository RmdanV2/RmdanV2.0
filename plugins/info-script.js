let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

 𝙎&𝙆
𝟭. 𝙅𝙖𝙣𝙜𝙖𝙣 𝙙𝙞𝙥𝙚𝙧𝙟𝙪𝙖𝙡 𝙗𝙚𝙡𝙞𝙠𝙖𝙣 𝙎𝙘𝙧𝙞𝙥𝙩 𝙞𝙣𝙞
𝟮. 𝙅𝙖𝙣𝙜𝙖𝙣 𝙨𝙖𝙡𝙖𝙝 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙨𝙘𝙧𝙞𝙥𝙩 𝙞𝙣𝙞!
𝟯. 𝙅𝙖𝙣𝙜𝙖𝙣 𝙡𝙪𝙥𝙖 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙔𝙤𝙪𝙩𝙪𝙗𝙚
𝟰. 𝙅𝙖𝙣𝙜𝙖𝙣 𝙙𝙞 𝙥𝙚𝙧 𝙟𝙪𝙖𝙡 𝙗𝙚𝙡𝙞𝙠𝙖𝙣
• 𝙅𝙞𝙠𝙖 𝙖𝙙𝙖 𝙚𝙧𝙤𝙧 𝙙𝙞 𝙨𝙘 𝙝𝙪𝙗  https://wa.me/6285697467632

-------- 𝙏𝙝𝙖𝙣𝙠𝙨 𝙩𝙤 ---------
𝘼𝙡𝙡𝙖𝙝 𝙎𝙒𝙏
𝙈𝙮 𝘽𝙧𝙖𝙞𝙣
𝙍𝙚𝙙 𝘿𝙧𝙖𝙜𝙤𝙣 (𝙏𝙚𝙖𝙘𝙝𝙚𝙧)
𝙍𝙖𝙢𝙙𝙖𝙣𝙉𝙚𝙩𝙃𝙪𝙣𝙩𝙚𝙧(𝙈𝙚)
𝘼𝙙𝙞𝙬𝙖𝙟𝙨𝙝𝙞𝙣𝙜
𝘽𝙊𝙏 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬.𝟬
𝙐𝙥𝙜𝙧𝙖𝙙𝙚 𝙎𝙞𝙨𝙩𝙚𝙢, 𝙏𝙚𝙠𝙨,𝙁𝙞𝙩𝙪𝙧
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://www.instagram.com/rmdanlol_/'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
