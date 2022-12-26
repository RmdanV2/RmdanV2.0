import db from '../lib/database.js' 
 import { canLevelUp } from '../lib/levelling.js' 
  
 export function before(m) { 
     let user = db.data.users[m.sender] 
     if (!user.autolevelup) 
         return !0 
     let before = user.level * 1 
     while (canLevelUp(user.level, user.exp, global.multiplier)) 
         user.level++ 
  
     if (before !== user.level) { 
         user.role = global.rpg.role(user.level).name 
         m.reply(` 
 ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} 𝙇𝙚𝙫𝙚𝙡𝙚𝙙 𝙐𝙋﹗ 
 •  𝙋𝙧𝙚𝙫𝙞𝙤𝙪𝙨 𝙡𝙚𝙫𝙚𝙡 : ${before} 
 •  𝙉𝙚𝙬 𝙡𝙚𝙫𝙚𝙡 : ${user.level} 
 •  𝙍𝙤𝙡𝙚 : ${user.role} 
 ᴜsᴇ *.profile* ᴛᴏ ᴄʜᴇᴄᴋ 
         `.trim()) 
     } 
 } 
 export const disabled = true