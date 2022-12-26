import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `𝙏𝙤𝙩𝙖𝙡 𝙁𝙞𝙩𝙪𝙧 𝘽𝙤𝙩 𝙎𝙖𝙖𝙩 𝙞𝙣𝙞: ${totalf}\n`,wm + '\n\n' + botdate, giflogo, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://www.instagram.com/rmdanlol_/',
                        mediaType: 2,
                        description: `𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮`,
                        title: `*Ultah Owner :* ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮`,          previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: 'https://www.instagram.com/rmdanlol_/'
                        
                      }}
})
  }


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
