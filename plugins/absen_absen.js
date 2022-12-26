let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*𝙈𝙤𝙝𝙤𝙣 𝙢𝙖𝙖𝙛, 𝙏𝙞𝙙𝙖𝙠 𝙖𝙙𝙖 𝙖𝙗𝙨𝙚𝙣 𝙝𝙖𝙧𝙞 𝙞𝙣𝙞*_\n\n*${usedPrefix}𝙈𝙪𝙡𝙖𝙞 𝘼𝙗𝙨𝙚𝙣* - 𝙐𝙣𝙩𝙪𝙠 𝙢𝙚𝙢𝙪𝙡𝙖𝙞 𝙖𝙗𝙨𝙚𝙣`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*𝙆𝙖𝙢𝙪 𝙎𝙪𝙙𝙖𝙝 𝘼𝙗𝙨𝙚𝙣 𝙏𝙊𝘿*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
┌「 *Absen* 」  
├ Total: ${absen.length}
${list} 
└────`.trim()
    await conn.sendButton(m.chat, caption, global.wm, [['✔️ABSEN', `${usedPrefix}absen`], ['📑LIST ABSEN', `${usedPrefix}cekabsen`]], m)
}
handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true
handler.admin = true

export default handler
