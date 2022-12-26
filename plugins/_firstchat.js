import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hai, ${ucapan()}

${user.banned ? '𝙈𝙖𝙖𝙛, 𝙠𝙖𝙢𝙪 𝙙𝙞𝙗𝙖𝙣𝙣𝙚𝙙 & 𝙏𝙞𝙙𝙖𝙠 𝙗𝙞𝙨𝙖 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙗𝙤𝙩 𝙞𝙣𝙞 𝙡𝙖𝙜𝙞' : `Ada yg bisa ${this.user.name} bantu?`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : '𝙉𝙤𝙩𝙚: 𝙅𝙖𝙣𝙜𝙖𝙣 𝙎𝙥𝙖𝙢 𝘽𝙤𝙩 𝙣𝙮𝙖', [user.banned ? 'OWNER' : 'OWNER', user.banned ? '.owner' : '.owner'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)