let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*𝙏𝙞𝙙𝙖𝙠 𝙖𝙙𝙖 𝙖𝙗𝙨𝙚𝙣 𝙗𝙚𝙧𝙡𝙖𝙣𝙜𝙨𝙪𝙣𝙜 𝙙𝙞𝙜𝙧𝙪𝙥 𝙞𝙣𝙞*_\n\n*${usedPrefix}𝙈𝙪𝙡𝙖𝙞 𝘼𝙗𝙨𝙚𝙣* - 𝙐𝙣𝙩𝙪𝙠 𝙢𝙚𝙢𝙪𝙡𝙖𝙞 𝙖𝙗𝙨𝙚𝙣`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *Yang sudah absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_${global.wm}_`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true

export default handler
