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
  let info = `š½š¤š© šš£š š¢šš£šššŖš£šš šš£ šØšš§šš„š© ššš§š\nššš¢ššš£ š½šš šš®\n\n*Version:* šš§šš«šš©š šššš©šš¤š£ ššš§šØšš¤š£ š®.š¬.š¬ `

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'š½šš”š šš? šš”šš ',
                        url: 'https://wa.me/6285697467632'
                    }
                },
                {
                    urlButton: {
                        displayText: 'šš šš£šØš©ššš§šš¢',
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
                        description: `ššš¢ššš£ š½šš šš®`,
                        title: `š Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `ššš¢ššš£ š½šš šš®`,          previewType: 0,
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
