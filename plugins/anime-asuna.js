import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://revita.herokuapp.com/api/wallpaper/asuna?apikey=ApiRevita'
	conn.sendButton(m.chat, 'ðððððª ð£ð®ð ð¤ð¢', wm, await(await fetch(url)).buffer(), [['ðNextð',`.${command}`]],m)
}
handler.command = /^(asuna)$/i
handler.tags = ['anime']
handler.help = ['asuna']
handler.premium = false
handler.limit = true

export default handler