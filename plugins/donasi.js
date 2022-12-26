import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/077317b79c2e71fe3d8e5.jpg`
    return conn.sendButton(m.chat, 'Donasi Pm Owner aja.\n❏  :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/rmdanlol_",
                mediaType: "VIDEO",
                title: '𝘿𝙤𝙣𝙖𝙨𝙞 𝙏𝙤 𝙍𝙖𝙢𝙙𝙖𝙣 𝙑𝟮 ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler