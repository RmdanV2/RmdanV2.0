let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan 𝙍𝙖𝙢𝙙𝙖𝙣 𝘽𝙊𝙏 𝙑𝟮* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler
