exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *About ${BotName}*
╠════════════════════
║├≽️⚜ *AUTHOR*: _NFQ SQUAD_
║├≽️⚜ *DESIGNER*: _AR15BOT_ sipp
║├≽️⚜ *YOUTUBE*: _DRAWL NAG_
╠════════════════════
╠════════════════════
║  🌀 *${BotName}* 🌀
║
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│
║│2. *Gruop Wa*
║│ _${grupch3}
║│
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║ |
║╰───────────
║
║ *MADE BY NFQ SQUAD*
╚════════════════════`
}
