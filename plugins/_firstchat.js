import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `ðHai, ${ucapan()}

${user.banned ? 'ðððð, ð ðð¢ðª ððððð£ð£ðð & ððððð  ððð¨ð ð¢ðð£ðððªð£ðð ðð£ ðð¤ð© ðð£ð ð¡ððð' : `Ada yg bisa ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'ðð¤ð©ð: ððð£ððð£ ðð¥ðð¢ ð½ð¤ð© ð£ð®ð', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ð"
    if (time >= 4) {
        res = "Selamat pagi ð"
    }
    if (time > 10) {
        res = "Selamat siang âï¸"
    }
    if (time >= 15) {
        res = "Selamat sore ð"
    }
    if (time >= 18) {
        res = "Selamat malam ð"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)