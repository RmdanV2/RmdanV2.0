import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
  const ultah = new Date('September 14 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let info = `𝘽𝙤𝙩 𝙞𝙣𝙞 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙨𝙘𝙧𝙞𝙥𝙩 𝙙𝙖𝙧𝙞\n𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮\n\n*Version:* 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙀𝙙𝙞𝙩𝙞𝙤𝙣 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬.𝟬 `

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '𝘽𝙚𝙡𝙞 𝙎𝙘? 𝙆𝙡𝙞𝙠',
                        url: 'https://wa.me/6285697467632'
                    }
                },
                {
                    urlButton: {
                        displayText: '𝙆𝙚 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
                        url: 'https://www.instagram.com/rmdanlol_/',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://www.instagram.com/rmdanlol_/',
                        mediaType: 2,
                        description: `𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮`,
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮`,          previewType: 0,
                        thumbnail: await (await fetch(giflogo2)).buffer(),
                        mediaUrl: 'https://www.instagram.com/rmdanlol_/'
                        
                      }}
})
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler
