let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*ππ€ππ€π£ π’πππ, πππππ  πππ πππ¨ππ£ πππ§π ππ£π*_\n\n*${usedPrefix}ππͺπ‘ππ πΌππ¨ππ£* - ππ£π©πͺπ  π’ππ’πͺπ‘ππ πππ¨ππ£`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*πππ’πͺ ππͺπππ πΌππ¨ππ£ πππΏ*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `β ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
βγ *Absen* γ  
β Total: ${absen.length}
${list} 
βββββ`.trim()
    await conn.sendButton(m.chat, caption, global.wm, [['βοΈABSEN', `${usedPrefix}absen`], ['πLIST ABSEN', `${usedPrefix}cekabsen`]], m)
}
handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true
handler.admin = true

export default handler
