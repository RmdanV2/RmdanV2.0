let handler = async (m, { conn, args, usedPrefix, command }) => {

  await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
  m.reply('𝙎𝙪𝙠𝙨𝙚𝙨 𝙢𝙚𝙣𝙜𝙜𝙖𝙣𝙩𝙞 𝙣𝙖𝙢𝙖 𝙜𝙧𝙤𝙪𝙥')
}

handler.help = ['Setnamegc <text>']
handler.tags = ['group']
handler.command = /^setnamegc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

export default handler