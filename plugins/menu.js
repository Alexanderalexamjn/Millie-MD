
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `
╔══════════════════════
║
╠🎈 𝑩𝑶𝑻 𝑵𝑨𝑴𝑬 : 𝐌𝐑-𝐌𝐃
║
╠🎈 𝑳𝑰𝑩𝑹𝑨𝑹𝒀   : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃
║
╠🎈 𝑼𝑷𝑻𝑰𝑴𝑬    : ${uptime}
║
╠🎈 𝑽𝑬𝑹𝑺𝑰𝑶𝑵   : ${version}
║
╠🎈 𝑺𝑻𝑨𝑻𝑼𝑺    : 𝑷𝑼𝑩𝑳𝑰𝑪 
║
╠🎈 𝑻𝑶𝑻𝑨𝑳 𝑼𝑺𝑬𝑹 : ${user}
║
╠🎈 𝑹𝑬𝑮𝑰𝑺𝑻𝑬𝑹𝑬𝑫 : ${users+5}
║
╠🎈 𝑷𝑳𝑨𝑻𝑭𝑶𝑹𝑴: ${os.type()}
║
╚════════════════════════`
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`ɪɴꜱᴛᴀɢʀᴀᴍ `, `http://instagram.com/_munavir._`, null,null, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
