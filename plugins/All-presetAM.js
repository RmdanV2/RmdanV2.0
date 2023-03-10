let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
โฆ @${nomorown.split`@`[0]} โฆ
------- ${nameown} -------

  *๐๐ค๐ฉ๐:*
โข `๐๐ฌ๐ฃ๐๐ง ๐ฉ๐๐๐๐  ๐ข๐๐ฃ๐๐ง๐๐ข๐ ๐จ๐๐ซ๐ ๐๐ค๐ฃ๐ฉ๐๐๐ฉ
โข ๐๐ฌ๐ฃ๐๐ง ๐๐๐ง๐๐๐  ๐๐ก๐ค๐๐ ๐๐ง ๐ฉ๐๐ฃ๐ฅ๐ ๐๐ก๐๐จ๐๐ฃ
โข ๐ฝ๐๐ง๐๐๐๐๐ง๐๐ก๐๐ ๐ฎ๐๐ฃ๐ ๐จ๐ค๐ฅ๐๐ฃ & ๐ฉ๐๐๐๐  ๐จ๐ฅ๐๐ข
โข ๐๐ฌ๐ฃ๐๐ง ๐๐๐ฃ๐ฎ๐ ๐ข๐๐ง๐๐จ๐ฅ๐ค๐ฃ ๐ฎ๐๐ฃ๐ ๐๐๐ง๐ ๐๐๐ฉ๐๐ฃ ๐๐๐ฃ๐๐๐ฃ ๐ฝ๐๐
โข ๐๐ค ๐๐๐ก๐ฅ'

  let teks = `${htjava} _๐๐๐ก๐๐ ๐๐ง๐๐จ๐๐ฉ ๐ฃ๐ฎ๐ ๐๐๐๐๐ฌ๐๐ ๐ ๐๐ \n${htjava} *๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐ผ๐๐๐๐๐ ๐๐๐๐๐๐*`
const sections = [
   {
	title: `${htjava} ๐๐ง๐๐จ๐๐ฉ ๐๐๐ฃ๐ช โโโโโโโโโยทโข`,
	rows: [
	{title: "โข Preset 1", rowId: ".p1"},
    {title: "โข Preset 2", rowId: ".p2"},
	{title: "โข Preset 3", rowId: ".p3"},
	{title: "โข Preset 4", rowId: ".p4"},
	{title: "โข Preset 5", rowId: ".p5"},
	{title: "โข Preset 6", rowId: ".p6"},
	{title: "โข Preset 7", rowId: ".p7"},
	{title: "โข Preset 8", rowId: ".p8"},
	{title: "โข Preset 9", rowId: ".p9"},
	{title: "โข Preset 10", rowId: ".p10"},
]
    },{
	title: `${htjava} ๐๐ช๐ฅ๐ฅ๐ค๐ง๐ฉ ๐๐ โโโโโโโยทโข`,
	rows: [
	    {title: "โข ๐ฟ๐ค๐ฃ๐๐จ๐", rowId: ".owner nomor"},
	{title: "โข ๐๐๐ฌ๐", rowId: ".sewa"},
	{title: "โข ๐ฝ๐ช๐ฎ ๐๐ง๐๐ข๐๐ช๐ข", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *๐๐ง๐๐จ๐๐ฉ ๐๐๐ฃ๐ช* ${htka}`,
  buttonText: "๐พ๐ก๐๐๐  ๐๐๐ง๐ !",
  sections
}

  try {
    if (/(presetmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`โฎโฐ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['presetmenu']
handler.tags = ['fun']
handler.command = /^(presetmenu)/i


export default handler
