import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('September 14 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `𝙎𝙖𝙮𝙖 𝘿𝙖𝙧𝙞 𝙊𝙬𝙣𝙚𝙧 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙢𝙗𝙚𝙧𝙞𝙩𝙖𝙝𝙪𝙠𝙖𝙣 𝘽𝙖𝙝𝙬𝙖 𝘽𝙊𝙏 𝙄𝙣𝙞 𝙈𝙖𝙨𝙞𝙝 𝘽𝙀𝙏𝘼 𝘿𝙖𝙣 𝘿𝙖𝙡𝙖𝙢 𝙋𝙚𝙣𝙜𝙚𝙢𝙗𝙖𝙣𝙜𝙖𝙣
𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 𝟮.𝟬.𝟬 (𝘽𝙚𝙩𝙖 𝙑𝙚𝙧𝙨𝙞𝙤𝙣) 25 12 2022-2023.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.icikiwir']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: ` Ultah 𝙍𝙢𝙙𝙖𝙣🍀 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/077317b79c2e71fe3d8e5.jpg`)).buffer(),
                        sourceUrl: 'https://www.instagram.com/rmdanlol_/'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true

export default handler