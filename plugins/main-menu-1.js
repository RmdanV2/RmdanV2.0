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
 await conn.sendButton(m.chat, `๐๐๐ฎ๐ ๐ฟ๐๐ง๐ ๐๐ฌ๐ฃ๐๐ง ๐๐ฃ๐๐๐ฃ ๐๐๐ข๐๐๐ง๐๐ฉ๐๐๐ช๐ ๐๐ฃ ๐ฝ๐๐๐ฌ๐ ๐ฝ๐๐ ๐๐ฃ๐ ๐๐๐จ๐๐ ๐ฝ๐๐๐ผ ๐ฟ๐๐ฃ ๐ฟ๐๐ก๐๐ข ๐๐๐ฃ๐๐๐ข๐๐๐ฃ๐๐๐ฃ
๐๐๐ง๐จ๐๐ค๐ฃ: ๐ฎ.๐ฌ.๐ฌ (๐ฝ๐๐ฉ๐ ๐๐๐ง๐จ๐๐ค๐ฃ) 25 12 2022-2023.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aสส Mแดษดแด','.? all'],['Lษชsแด Mแดษดแด','.icikiwir']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: ` Ultah ๐๐ข๐๐๐ฃ๐ : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
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