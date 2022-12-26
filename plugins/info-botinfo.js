import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import { join } from 'path'
import { promises } from 'fs'
import moment from 'moment-timezone'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
    let date = moment.tz('Asia/Kolkata').format("dddd, Do MMMM, YYYY")
    let time = moment.tz('Asia/Kolkata').format('HH:mm:ss')
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
    conn.sendHydrated(m.chat, 
    '*––––––『 BOT INFO 』––––––*', 
`𝙉𝙖𝙢𝙚: ${namebot}
𝙑𝙚𝙧𝙨𝙞𝙤𝙣: ${_package.version}
𝙇𝙞𝙗𝙧𝙖𝙧𝙮: ${_package.description}
𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧: ${developer}

𝙐𝙥𝙩𝙞𝙢𝙚: ${uptime}
𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚: ${totalreg}

𝘿𝙖𝙩𝙚: ${date}
𝙏𝙞𝙢𝙚: ${time} ﹙ɢᴍᴛ +5:30﹚

𝙎𝙚𝙧𝙫𝙚𝙧 𝙄𝙣𝙛𝙤 :
𝙋𝙞𝙣𝙜: ${speed} ᴍs
𝙍𝙖𝙢: ${format(totalmem() - freemem())} / ${format(totalmem())}

 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 𝙎𝙩𝙖𝙩𝙪𝙨 :
⮕ ${groupsIn.length} - 𝙂𝙧𝙤𝙪𝙥 𝘾𝙝𝙖𝙩𝙨
⮕ ${groupsIn.length} - 𝙂𝙧𝙤𝙪𝙥𝙨 𝙅𝙤𝙞𝙣𝙚𝙙
⮕ ${groupsIn.length - groupsIn.length} - 𝙂𝙧𝙤𝙪𝙥𝙨 𝙡𝙚𝙛𝙩
⮕ ${chats.length - groupsIn.length} - 𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝘾𝙝𝙖𝙩𝙨
⮕ ${chats.length} - 𝙏𝙤𝙩𝙖𝙡 𝙘𝙝𝙖𝙩𝙨
`.trim(), './media/botinfo.jpg', 'https://www.instagram.com/rmdanlol_/', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
[`𝙊𝙬𝙣𝙚𝙧`, `${usedPrefix}owner`],
[`𝘿𝙤𝙣𝙖𝙩𝙚`, `${usedPrefix}donate`]
], m, {asLocation: false})
}
handler.help = ['botinfo']
handler.tags = ['info']
handler.command = /^(botinfo)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
