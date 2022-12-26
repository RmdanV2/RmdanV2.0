import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {

 let start = `💻𝙈𝙪𝙡𝙖𝙞 𝘼𝙠𝙨𝙚𝙡𝙚𝙧𝙖𝙨𝙞....𝙈𝙤𝙝𝙤𝙣 𝙏𝙪𝙣𝙜𝙜𝙪 𝙎𝙚𝙗𝙚𝙣𝙩𝙖𝙧`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   await m.reply(boost6)
   await m.reply(boost7)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*_𝘽𝙤𝙩 𝘽𝙚𝙧𝙝𝙖𝙨𝙞𝙡 𝘿𝙞𝙥𝙚𝙧𝙘𝙚𝙥𝙖𝙩_*\n\n*_⚡: ${speed} Detik!_*`

     conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}