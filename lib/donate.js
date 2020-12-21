exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *Donasi Ke ${BotName}* 📟
╠════════════════════
║├≽️⚜ *SMARTFREN*: *088235435804*
║├≽️⚜ *TELKOMSEL*: *081357302007*
╠════════════════════
║   🌀 *${BotName}* 🌀
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│
║│2. Gruop Wa
║│ _${grupch3}_
║│
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY NFQ SQUAD*
╚════════════════════`
}

