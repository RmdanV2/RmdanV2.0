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
let cap = `๐ฝ๐๐ ๐๐๐ผ๐๐๐ ๐๐
    
Terutama Terimakasih Teruntuk:
โธ @${'6285697467632'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
โธ 0@s.whatsapp.net

โโโโโโโโโโโโโโโโโโโโโ
โข ALLAH SWT
โข ๐๐๐ ๐ฟ๐ง๐๐๐ค๐ฃ
โข ๐๐ข๐๐๐ฃ (๐๐)
โข Adiwajshing
โข ๐ฝ๐๐ ๐๐๐ง๐จ๐๐ค๐ฃ ๐ฎ.๐ฌ.๐ฌ
โข ๐ฝ๐๐ฉ๐ ๐๐๐ง๐จ๐๐ค๐ฃ
โข Penyedia Layanan API
โข Orang-orang yang Berdonasi
โโโโโโโโโโโโโโโโโโโโโ`
  let buttonMessage= {
'document':{'url':'https://www.instagram.com/rmdanlol_/'},
'mimetype':global.ddocx,
'fileName':'๐๐๐ง๐จ๐๐ค๐ฃ ๐ฎ.๐ฌ.๐ฌ',
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
{'buttonId':'.menu','buttonText':{'displayText':'๐Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'๐ฐHallo'},'type':1}
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