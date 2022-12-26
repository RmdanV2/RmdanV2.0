let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '𝙃𝘼𝙍𝘼𝙋 𝙈𝘼𝙎𝙐𝙆𝙆𝘼𝙉 𝙉𝙊𝙈𝙊𝙍 𝙔𝘼𝙉𝙂 𝘼𝙆𝘼𝙉 𝘿𝙄 𝙎𝙋𝘼𝙈 𝙋𝙀𝙎𝘼𝙉!\n𝙋𝙀𝙉𝙂𝙂𝙐𝙉𝘼𝘼𝙉 𝙔𝘼𝙉𝙂 𝘽𝙀𝙉𝘼𝙍:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝙣𝙤𝙢𝙤𝙧|𝙩𝙚𝙠𝙨|𝙟𝙪𝙢𝙡𝙖𝙝\n𝙅𝙪𝙢𝙡𝙖𝙝:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝟱𝟮𝟭𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵|𝙝𝙖𝙞 :𝙫|𝟮𝟱'
if (!pesan) throw '𝙃𝘼𝙍𝘼𝙋 𝙈𝘼𝙎𝙐𝙆𝙆𝘼𝙉 𝙋𝙀𝙎𝘼𝙉 𝙆𝙀 𝙎𝙋𝘼𝙈!\n𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙔𝘼𝙉𝙂 𝘽𝙀𝙉𝘼𝙍:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝙣𝙤𝙢𝙤𝙧|𝙩𝙚𝙠𝙨|𝙟𝙪𝙢𝙡𝙖𝙝\n𝘾𝙤𝙣𝙩𝙤𝙝:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝟱𝟮𝟭𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵|𝙢𝙚𝙧𝙚𝙨𝙥𝙤𝙣𝙨 :𝙫|𝟮𝟱'
if (jumlah && isNaN(jumlah)) throw '𝙆𝙐𝘼𝙉𝙏𝙄𝙏𝘼𝙎 𝙃𝘼𝙍𝙐𝙎 𝘼𝘿𝘼𝙇𝘼𝙃 𝙉𝙊𝙈𝙊𝙍!\n𝙋𝙀𝙉𝙂𝙂𝙐𝙉𝘼𝘼𝙉 𝙔𝘼𝙉𝙂 𝙏𝙀𝙋𝘼𝙏:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝙣𝙤𝙢𝙤𝙧|𝙩𝙚𝙠𝙨|𝙟𝙪𝙢𝙡𝙖𝙝\n𝘾𝙤𝙣𝙩𝙤𝙝:\n#𝙨𝙥𝙖𝙢𝙬𝙖 𝟱𝟮𝟭𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵𝟵|𝙢𝙚𝙧𝙚𝙨𝙥𝙤𝙣𝙨 :𝙫|𝟮𝟱'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '𝙏𝙀𝙍𝙇𝘼𝙇𝙐 𝘽𝘼𝙉𝙔𝘼𝙆 𝙋𝙀𝙎𝘼𝙉! 𝙅𝙐𝙈𝙇𝘼𝙃 𝙃𝘼𝙍𝙐𝙎 𝙆𝙐𝙍𝘼𝙉𝙂 𝘿𝘼𝙍𝙄 𝟱𝟬 𝙋𝙀𝙎𝘼𝙉'
await m.reply(`𝙎𝙋𝘼𝙈 𝙋𝙀𝙎𝘼𝙉 𝙆𝙀 𝙉𝙊𝙈𝙊𝙍 ${nomor} 𝙄𝙏𝙐 𝙎𝙐𝙆𝙎𝙀𝙎 𝘿𝙄𝙇𝘼𝙆𝙐𝙆𝘼𝙉 ✅\n𝙅𝙐𝙈𝙇𝘼𝙃 𝙏𝙀𝙍𝙆𝙄𝙍𝙄𝙈:\n ${fixedJumlah} 𝙬𝙖𝙠𝙩𝙪!`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = false
export default handler
