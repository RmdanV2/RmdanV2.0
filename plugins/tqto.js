import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `𝘽𝙄𝙂 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊
    
Terutama Terimakasih Teruntuk:
➸ @${'6285697467632'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
• ALLAH SWT
• 𝙍𝙚𝙙 𝘿𝙧𝙖𝙜𝙤𝙣
• 𝙍𝙢𝙙𝙖𝙣 (𝙈𝙚)
• Adiwajshing
• 𝘽𝙊𝙏 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬.𝟬
• 𝘽𝙚𝙩𝙖 𝙑𝙚𝙧𝙨𝙞𝙤𝙣
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://www.instagram.com/rmdanlol_/'},
'mimetype':global.ddocx,
'fileName':'𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬.𝟬',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://www.instagram.com/rmdanlol_/',
'mediaType':2,
'previewType':'pdf',
'title':`Ultah Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`RmdanBOT`,
'thumbnail':await(await fetch('https://telegra.ph/file/077317b79c2e71fe3d8e5.jpg')).buffer(),
'sourceUrl':'https://www.instagram.com/rmdanlol_'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'🍀Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'📰Hallo'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}