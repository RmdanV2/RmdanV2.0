import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import osu from 'node-os-utils'
import fetch from 'node-fetch'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, isRowner}) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
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
  let NotDetect = 'Not Detect'
        let cpux = osu.cpu
        let cpuCore = cpux.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let HostN = osu.os.hostname()
        let OS = osu.os.platform()
        let ipx = osu.os.ip()
        let cpuModel = cpux.model()
        let cpuPer
        let p1 = cpux.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
                driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
                driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
                ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
                ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
                netsIn = (info.total.inputMb + ' MB'),       
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
                netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])        
        let _ramTotal = (ramTotal + ' MB')
        let cek = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
        let ip = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.ip)
        let cr = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.country)
        let cc = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.cc)
        
        let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks = d.toLocaleDateString(locale, { weekday: 'long' })
    let dates = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
        let times = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
        
  let old = performance.now()
  await m.reply(`𝙏𝙚𝙨𝙩𝙞𝙣𝙜 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝟮.𝟬...`)
  let neww = performance.now()
  let speed = neww - old
  await conn.reply(m.chat,`- 𝙋𝙞𝙣𝙜 -
${Math.round(neww - old)}ms
${speed}ms

- 𝙍𝙪𝙣𝙩𝙞𝙢𝙚 -
${muptime}
${readMore}
- 𝘾𝙝𝙖𝙩𝙨 -
• *${groupsIn.length}* Group Chats
• *${groupsIn.length}* Groups Joined
• *${groupsIn.length - groupsIn.length}* Groups Left
• *${chats.length - groupsIn.length}* Personal Chats
• *${chats.length}* Total Chats

- 𝙎𝙚𝙧𝙫𝙚𝙧 𝟮.𝟬 -
𝙍𝙖𝙢: ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})
 𝙁𝙧𝙚𝙚 𝙍𝙖𝙢: ${format(freemem())}

 𝙋𝙡𝙖𝙩𝙛𝙤𝙧𝙢: ${os.platform()}
 𝙎𝙚𝙧𝙫𝙚𝙧: ${os.hostname()}
 𝙊𝙎: ${OS}
 𝙄𝙋: ${ip}
 𝘾𝙤𝙪𝙣𝙩𝙧𝙮: ${cr}
 𝘾𝙤𝙪𝙣𝙩𝙧𝙮 𝘾𝙤𝙙𝙚: ${cc}
 𝘾𝙋𝙐 𝙈𝙤𝙙𝙚𝙡: ${cpuModel}
 𝘾𝙋𝙐 𝘾𝙤𝙧𝙚: ${cpuCore} Core
 𝘾𝙋𝙐: ${cpuPer}%
 𝙏𝙞𝙢𝙚 𝙎𝙚𝙧𝙫𝙚𝙧: ${times}

${readMore}
*${htjava} 𝙉𝙤𝙙𝙚𝙅𝙎 𝙈𝙚𝙢𝙤𝙧𝙮 𝙐𝙨𝙖𝙜𝙚
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

`,m)
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed|info)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}