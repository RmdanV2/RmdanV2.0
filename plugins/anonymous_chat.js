async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '_𝙆𝙖𝙢𝙪 𝙩𝙞𝙙𝙖𝙠 𝙨𝙚𝙙𝙖𝙣𝙜 𝙗𝙚𝙧𝙖𝙙𝙖 𝙙𝙞 𝙖𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨 𝙘𝙝𝙖𝙩_', author, null, [['𝘾𝙖𝙧𝙞 𝙋𝙖𝙧𝙩𝙣𝙚𝙧', `.start`]], m)
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_𝙋𝙖𝙧𝙩𝙣𝙚𝙧 𝙢𝙚𝙣𝙞𝙣𝙜𝙜𝙖𝙡𝙠𝙖𝙣 𝙘𝙝𝙖𝙩_', author, null, [['𝘾𝙖𝙧𝙞 𝙋𝙖𝙧𝙩𝙣𝙚𝙧', `.start`]], m)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '_𝙆𝙖𝙢𝙪 𝙢𝙖𝙨𝙞𝙝 𝙗𝙚𝙧𝙖𝙙𝙖 𝙙𝙞 𝙙𝙖𝙡𝙖𝙢 𝙖𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨 𝙘𝙝𝙖𝙩, 𝙢𝙚𝙣𝙪𝙣𝙜𝙜𝙪 𝙥𝙖𝙧𝙩𝙣𝙚𝙧_', author, null, [['𝙆𝙚𝙡𝙪𝙖𝙧', `.leave`]], m)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, '_𝙋𝙖𝙧𝙩𝙣𝙚𝙧 𝙙𝙞𝙩𝙚𝙢𝙪𝙠𝙖𝙣!_', author, null, [['Next', `.next`]], m)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, '_Partner ditemukan!_', author, null, [['Next', `.next`]], m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_𝙢𝙚𝙣𝙪𝙣𝙜𝙜𝙪 𝙥𝙖𝙧𝙩𝙣𝙚𝙧..._', author, null, [['Keluar', `.leave`]], m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

export default handler