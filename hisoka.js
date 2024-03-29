require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const hariini = moment.tz('Asia/Jakarta').format('dddd,DD MM YYYY')
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    
	
	try {
        let isNumber = x => typeof x === 'number' && !isNaN(x)
        let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!isNumber(user.limit)) user.limit = limitUser
        } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
    	    anticall: false,
    		status: 0,
    		autobio: false
	    }
	    
        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('02 16 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	/*auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.updateProfileStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    */
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
        //------------------------------------------------------------------------------------------------------------
   

      //--------------------------------------------------------------------------------------------------------------
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lagu`)
delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak gambar`)
delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? kirim ${prefix}tebak lontong`)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const cmdGrup = ["linkgroup","ephemeral","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","mute","promote","demote"]
        const cmdDown = ["tiktoknowm","tiktokwm ⛔","tiktokmp3 ⛔","instagram","twitter","twittermp3","facebook","pinterestdl","ytmp3","ytmp4","getmusic","getvideo","joox","soundcloud"]
        const cmdSearch = ["openai","googlebard","play","yts","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","stalk","playstore","gsmarena","jadwalbioskop","nowplayingbioskop","aminio","wattpad","webtoons","drakor","iqra","hadist","alquran","tafsirsurah"]
        const cmdRand = ["coffe","quotesanime","motivasi","dilanquote","bucinquote","katasenja","puisi","couple","anime","waifu","husbu","neko","shinobu","waifus","nekos","trap","blowjob"]
        const cmdMaker = ["qc","3dchristmas","3ddeepsea","americanflag","3dscifi","3drainbow","3dwaterpipe","halloweenskeleton","sketch","bluecircuit","space","metallic","fiction","greenhorror","transformer","berry","thunder","magma","3dcrackedstone","3dneonlight","impressiveglitch","naturalleaves","fireworksparkle","matrix","dropwater","harrypotter","foggywindow","neondevils","christmasholiday","3dgradient","blackpink","gluetext","shadow","romantic","smoke","burnpapper","naruto","lovemsg","grassmsg","lovetext","coffecup","butterfly","harrypotter","retrolol","ffcover","crossfire","galaxy","glass","neon","beach","blackpink","igcertificate","ytcertificate"]
        const cmdFun = ["simih","halah","hilih","huluh","heleh","holoh","jadian","jodohku","delttt","tictactoe","family100","tebak","math","suitpvp"]
        const cmdMlbb = ["hitungwr","stalknick","joki","diamonml","ppcouple"]
        const cmdPrimbon = ["katabucin","katabijak","faktaunik","puisi","pantun","nomorhoki","artimimpi","artinama","ramaljodoh","ramaljodohbali","suamiistri","ramalcinta","cocoknama","pasangan","jadiannikah","sifatusaha","rezeki","pekerjaan","nasib","penyakit","tarot","fengshui","haribaik","harisangar","harisial","nagahari","arahrezeki","peruntungan","weton","karakter","keberuntungan","memancing","masasubur","zodiak","shio"]
        const cmdConv = ["attp ⛔","ttp ⛔","toimage","removebg","remini","sticker","stickerwm","emojimix","emojimix2","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","smeme","bass","blown","deep","earrape","fast","fat","nightcore","reverse","robot","slow","tupai"]
        const cmdStore = ["ping","owner","addlist","list","dellist","proses","done","stalknick","hitungwr","joki","diamonml"]
        const cmdOwner = ["react","chat","join","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot"]
        const allCmd = [...cmdGrup, ...cmdDown, ...cmdSearch, ...cmdRand, ...cmdMaker, ...cmdFun, ...cmdPrimbon, ...cmdConv, ...cmdStore, ...cmdOwner, ...cmdMlbb]
	    
        switch(command) {
	    case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/675976ea3bc917dcbb459.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n https://trakteer.id/lvy-npc/tip` }, { quoted: m })
            }
            break
            case 'daftar-bot-usm': {
hisoka.sendMessage(m.chat,   { text:"*Hai Kak*\n\n *KTP USM*\n━━━━━━━━\nNAMA : \nNIM : \nNO WA:\n\n*Kirim KTP kenomor dibawah\nhttps://wa.me/6281935593316\n*Proses sesuai antrian"}, { quoted: m })
            }
            break 
            case '📦-order': case 'daftar-premium-public': {

let menunya = `
💵*PAYMENT*💵
━━━━━━━━━━━━━━━
⭔ Dana : 088980818668
⭔ Gopay : 088980818668 
⭔ Ovo : 088980818668
 
✨*List Harga*✨
━━━━━━━━━━━━━━━
⭔ ~15K / BULAN~ 
✅ Diskon Awal 5K/Bulan

📦*FORMAT ORDER*📦
━━━━━━━━━━━━━━━
⭔ SS Bukti Pembayaran :
⭔ Nama : 
⭔ No HP : 

*_Kirim kenomor dibawah_
https://wa.me/6281935593316
*_Proses sesuai antrian_
`
 hisoka.sendMessage(m.chat, { text: menunya})
 hisoka.sendContact(m.chat, global.owner, m)
}
   break
   case 'joki': case 'jokimlbb': {
       let image = "https://telegra.ph/file/4b4071530fa8bc3dc257f.jpg";
let menunya = `
*Lvy Menyediakan JOKI MLBB*

━*JOKI AWAL SEASON / ⭐*━
◈ GRAND MASTER :- Rp 5.000
◈ EPIC :- Rp 7.000
◈ LEGEND :- Rp 8.000

━*JOKI MID & LAST SEASON / ⭐*━
◈ MASTER :- Rp 3.000
◈ GRAND MASTER :- Rp 4.000
◈ EPIC :- Rp 5.500
◈ LEGEND :- Rp 6.000
◈ MYHTIC :- Rp 11.000
◈ MYHTIC HONOR :- Rp 15.000
◈ MYHTIC GLORY :- Rp 20.000
◈ MYHTIC IMORTAL :- Rp 25.000
━━━━━━━━━━━━━━━
WA : ‪https://wa.me/+6281935593316
IG : @yosepwdd
TT : @yosepwd
`
hisoka.sendMessage(m.chat, { image: { url: image }, caption:menunya}, { quoted: m })

}
break
   case 'diamon': case 'diamonml': {
    let image = "https://telegra.ph/file/4b4071530fa8bc3dc257f.jpg";
    let text = `*Lvy Menyediakan DIAMON MLBB*

*MOBILE LEGENDS A*
Estimasi Proses : 1 - 20 Detik
Via ID Server
━━━━━━━━━━━━━━━
86 💎 Rp 23.000
172 💎 Rp 46.000
257 💎 Rp 68.000
344 💎 Rp 91.000
429 💎 Rp 113.000
514 💎 Rp 136.000
600 💎 Rp 158.000
706 💎 Rp 180.000
878 💎 Rp 225.000 
963 💎 Rp 245.000
1050 💎 Rp 272.000 
1220 💎 Rp 316.000 
1412 💎 Rp 360.000 
2195 💎 Rp 540.000 
3688 💎 Rp 900.000 
5532 💎 Rp 1.350.000 
9288 💎 Rp 2.250.000

WDP 1X 💎 Rp 28.000

TF DANA +100 PERAK !!
WA : ‪https://wa.me/+6281935593316
IG : @yosepwdd
TT : @yosepwd`;

hisoka.sendMessage(m.chat, { image: { url: image }, caption:text}, { quoted: m })

}
break
   case 'menu': case 'diamonml': {
    let image = "https://telegra.ph/file/3fb9ffa2550acf3326afc.jpg";
    let text = `Hi 👋 Saya Lvy ada yang bisa Lvy bantu kak ? 🥰

━━━━━━━━━━━━━━━  
✨Ketik : *.listmenu*
_untuk melihat fitur Lvy._
━━━━━━━━━━━━━━━
*📌INFO UPDATE & MAINTENANCE* ↓↓↓↓↓↓↓
https://whatsapp.com/channel/0029VaIZqLT3GJOqN5NQ0B2Y
━━━━━━━━━━━━━━━
*⚠️WARNING⚠️*
FAQ : 
Q: "Jika saya bukan warga USM?"
A: "silahkan daftar terlebih dahulu untuk fitur Premium dengancara ketik .daftar pilih _Daftar-Premium-Public_"

Q: "Jika saya  warga USM?"
A: "Silahkan ketik .daftar pilih _Daftar-Bot-USM_ lengkapi pendaftaran"

*By*: 
*KKN 2024 REJOMULYO*
*UNIVERSITAS SEMARANG* 
*(𝐘𝐨𝐬𝐞𝐩 𝐖𝐃 𝐆.𝟐𝟑𝟏.𝟐𝟎.𝟎𝟎𝟏𝟎)*`;

hisoka.sendMessage(m.chat, { image: { url: image }, caption:text}, { quoted: m })

}
break
   case 'yttascccnyasaya': {
m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star\n\nDonate : 6281615075793 (Link Aja)\nSaweria : https://saweria.co/DikaArdnt\nPaypal : https://www.paypal.me/Cakhaho\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0].toLowerCase() === 'mute') {
    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'unmute') {
    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'archive') {
    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'unarchive') {
    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'read') {
    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'unread') {
    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'delete') {
    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
            }
            break
	    case 'family100': {
if ('family100'+m.chat in _family100) {
    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
    throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
    id: 'family100'+m.chat,
    pesan: await hisoka.sendText(m.chat, hasil, m),
    ...random,
    terjawab: Array.from(random.jawaban, () => false),
    hadiah: 6,
}
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0].toLowerCase() === "lagu") {
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`)
    delete tebaklagu[m.sender.split('@')[0]]
    }
} else if (args[0].toLowerCase() === 'gambar') {
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
    delete tebakgambar[m.sender.split('@')[0]]
    }
} else if (args[0].toLowerCase() === 'kata') {
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`)
    delete tebakkata[m.sender.split('@')[0]]
    }
} else if (args[0].toLowerCase() === 'kalimat') {
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`)
    delete tebakkalimat[m.sender.split('@')[0]]
    }
} else if (args[0].toLowerCase() === 'lirik') {
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
    })
    await sleep(60000)
    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`)
    delete tebaklirik[m.sender.split('@')[0]]
    }
} else if (args[0].toLowerCase() === 'lontong') {
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
    let result = anu[Math.floor(Math.random() * anu.length)]
    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
    })
    await sleep(60000)
    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply(`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}`)
    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
    }
}
            }
            break
            case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
}
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
    react: {
        text: args[0],
        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
    }
}
hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            
            case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
if (!isCreator) throw mess.owner
await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
if (!isCreator) throw mess.owner
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
            case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'proses': {
if (!isCreator) throw mess.owner
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 // -1 limit
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let pro = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${hariini}\n⌚ JAM     : ${jam} WIB\n✨ STATUS  : Pending\`\`\`\n\nPesanan @${users.split("@")[0]} sedang di proses!`
hisoka.sendMessage(m.chat, { text: pro, mentions: [users] }, { quoted: m })

}
break
case 'done': {
if (!isCreator) throw mess.owner
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 // -1 limit
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let don = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${hariini}\n⌚ JAM     : ${jam} WIB\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${users.split("@")[0]} Next Order ya🙏`
hisoka.sendMessage(m.chat, { text: don, mentions: [users] }, { quoted: m })
}
break            
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               hisoka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
    teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
	    }
	    break
               case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0].toLowerCase() === 'close'){
    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'open'){
    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
    hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
             }
            }
            break
            case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
             if (args[0].toLowerCase() === 'open'){
await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
            }
            }
            break
            case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0].toLowerCase() === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0].toLowerCase() === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
 hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
}
             }
             break
             case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0].toLowerCase() === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${hisoka.user.name} telah di mute di group ini !`)
} else if (args[0].toLowerCase() === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
} else {
 hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
}
             }
             break
            case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await hisoka.groupInviteCode(m.chat)
hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0].toLowerCase() === '1') {
    await hisoka.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === '7') {
    await hisoka.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === '90') {
    await hisoka.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0].toLowerCase() === 'off') {
    await hisoka.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
    hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", ["Ephemeral 1","Ephemeral 7","Ephemeral 90","Ephemeral Disable"])
}
            }
            break
            case 'setnamabot': case 'setnamebot': {
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await hisoka.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${name}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
            if (!text) throw `this is a WhatsApp Bot named Hisoka-Morou`
            let name = await hisoka.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
            case 'anticall': {
            if (!isCreator) throw mess.owner
let ciko = db.data.settings[botNumber].anticall
if (args[0].toLowerCase() === "on") {
if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
ciko = true
m.reply(`AntiCall Aktif !`)
} else if (args[0].toLowerCase() === "off") {
if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
ciko = false
m.reply(`AntiCall Tidak Aktif !`)
} else {
hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
}
             }
             break
            case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await hisoka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
    await sleep(1500)
      let txt = `「 Broadcast Bot 」\n\n${text}`
      hisoka.sendText(i, txt)
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
    		for (let yoi of anu) {
    		    await sleep(1500)
    		    hisoka.sendText(yoi, txt)
    		}
    		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
    let read = i.readTimestamp
    let unread = i.receiptTimestamp
    let waktu = read ? read : unread
    teks += `⭔ @${i.userJid.split('@')[0]}\n`
    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
     let nama = store.messages[i].array[0].pushName
     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
     let metadata = await hisoka.groupMetadata(i)
     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
    let online = [...Object.keys(store.presences[id]), botNumber]
    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           m.reply(mess.wait)
let media = await hisoka.downloadMediaMessage(qmsg)
let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await hisoka.downloadMediaMessage(qmsg)
let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
            } else {
m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
}
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
if (/image/.test(mime)) {
    let media = await hisoka.downloadMediaMessage(qmsg)
    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
    await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
    let media = await hisoka.downloadMediaMessage(qmsg)
    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
    await fs.unlinkSync(encmedia)
} else {
    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hisoka.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('yosh', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) throw err
    let buffer = fs.readFileSync(ran)
    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
    fs.unlinkSync(ran)
})
            }
            break
            case "remini":
case "hd":
  {
    if (!m.isGroup) throw mess.group
    if (/image/.test(mime)) {
        m.reply(mess.wait)
        hisoka.sendMessage(m.chat, {react: {text: '♻️',key: m.key, } },{ quoted: m }, )
      let media = await hisoka.downloadAndSaveMediaMessage(qmsg);
      let { TelegraPh } = require('./lib/uploader')
      let anu = await TelegraPh(media)
      hisoka.sendMessage(m.chat,{image: {url: `https://api.lolhuman.xyz/api/upscale?apikey=YoshCasaster&img=${anu}`,},caption:"*Done....*\n📦Bot Free, Bantu Donate ya\n https://trakteer.id/lvy-npc/tip", },{ quoted: m }, );
      fs.unlinkSync(media) 
    } else {
      throw("Only Pictures");
    }
  }
  break
	        case 'tomp4': case 'tovideo': {
if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media)
    m.reply(util.format(anu))
}
await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
                if (!isCreator) throw mess.owner
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
                db.data.users[m.sender].limit -= 1 // -1 limit
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
        hisoka.sendMessage(m.chat, {react: {text: '♻️',key: m.key, } },{ quoted: m }, )
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption:"*Done....*\n📦Bot Free, Bantu Donate ya\n https://trakteer.id/lvy-npc/tip", },{ quoted: m }, );
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let Message = {
    image: { url: images },
    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let caption = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`
hisoka.sendPoll(m.chat, caption, [`Ytmp3 ${anu.url}`,`Ytmp4 ${anu.url}`])
            }
            break
	    case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('yosh', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let Message = {
    image: { url: 'https://coffee.alexflipnote.dev/random' },
    caption: `☕ Random Coffe`
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'
hisoka.sendMessage(m.chat, {react: {text: '♻️',key: m.key, } },{ quoted: m }, )
		        let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
		        let Message = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wikimedia': {
if (!text) throw 'Masukkan Query Title'
hisoka.sendMessage(m.chat, {react: {text: '♻️',key: m.key, } },{ quoted: m }, )
		let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case "openai":
        {
            if (!isCreator) throw mess.owner
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
            db.data.users[m.sender].limit -= 1 // -1 limit
          if (!q) throw 'Pertanyaan Nya Apa Bang?'
          let gpt3 = await fetchJson("https://aemt.me/openai?text=" + q);
          m.reply(util.format(gpt3.result));
        }

        break
      case "googlebard":
        {
            if (!isCreator) throw mess.owner
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1 // -1 limit
          if (!q) throw 'Pertanyaan Nya Apa Bang?'
          let gpt3 = await fetchJson("https://aemt.me/bard?text=" + q);
          m.reply(util.format(gpt3.result));
        }

        break
        case "translate":
            {
              if (!q)throw `Example: ${prefix + command} en,Toturial`
              var kode_negara = q.split(",")[0];
              var xyy = q.split(",")[1];
              var { data } = await axios.get(
                `https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=YoshCasaster&text=${xyy}`,
              );
              var init_txt = `From : ${data.result.from}\n`;
              init_txt += `To : ${data.result.to}\n`;
              init_txt += `Original : ${data.result.original}\n`;
              init_txt += `Translated : ${data.result.translated}\n`;
              init_txt += `Pronunciation : ${data.result.pronunciation}\n`;
              hisoka.sendMessage(m.chat, { text: init_txt }, { quoted: m });
            }
            break
        case "ppcouple":
        get_result = await fetchJson(
          "https://api.lolhuman.xyz/api/random/ppcouple?apikey=YoshCasaster",
        );
        get_result = get_result.result;
        ini_txt = `👦🏻 *Male* : ${get_result.male}\n\n`;
        ini_txt += `👧🏻 *Female*: ${get_result.female}`;
        throw(ini_txt);
        break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let Message = {
    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
             /////////////////////////////////////////////////////////////////
      case "katabijak":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=YoshCasaster`,
        );
        reply(get_result.result);
        break;
      //////////////////////////////////////////////////////////////////
      case "katabucin":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=YoshCasaster`,
        );
        reply(get_result.result);
        break;
      ////////////////////////////////////////////////////////////////
      case "pantun":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=YoshCasaster`,
        );
        throw (get_result.result);
        break;
      ////////////////////////////////////////////////////////////////
      case "faktaunik":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=YoshCasaster`,
        );
        reply(get_result.result);
        break;
      ////////////////////////////////////////////////////////////////
      case "puisi":
        get_result = await fetchJson(
          `https://api.lolhuman.xyz/api/random/${command}?apikey=YoshCasaster`,
        );
        reply(get_result.result);
        break;
      ////////////////////////////////////////////////////////////////
            case "infogempa":
                {
                  var { data } = await axios.get(
                    `https://api.lolhuman.xyz/api/infogempa?apikey=YoshCasaster`,
                  );
                  var caps = `📍*Lokasi* : ${data.result.lokasi}\n`;
                  caps += `📅*Waktu* : ${data.result.waktu}\n`;
                  caps += `📈*Potensi* : ${data.result.potensi}\n`;
                  caps += `🌋*Magnitude* : ${data.result.magnitude}\n`;
                  caps += `🌊*Kedalaman* : ${data.result.kedalaman}\n`;
                  caps += `📌*Koordinat* : ${data.result.koordinat}`;
                  hisoka.sendMessage(
                    m.chat,
                    { image: { url: data.result.map }, caption: caps },
                    { quoted: m },
                  );
                }
                break
                case "infocuaca":
        {
          if (!q) throw `Example: ${prefix + command} Bandung`
          var { data } = await axios.get(
            `https://api.lolhuman.xyz/api/cuaca/${q}?apikey=YoshCasaster`,
          );
          var xy = `📍*Tempat* : ${data.result.tempat}\n`;
          xy += `🌤️ *Cuaca* : ${data.result.cuaca}\n`;
          xy += `🌪️ *Angin* : ${data.result.angin}\n`;
          xy += `📄 *Description* : ${data.result.description}\n`;
          xy += `☁️ *Kelembapan* : ${data.result.kelembapan}\n`;
          xy += `🧊 *Suhu* : ${data.result.suhu}\n`;
          xy += `⛅ *Udara* : ${data.result.udara}\n`;
          xy += `🏞️ *Permukaan laut* : ${data.result.permukaan_laut}\n`;
          xy += `🌍 *Latitude*: ${data.result.latitude}\n`;
          xy += `🌎 *Longitude*: ${data.result.longitude}`;
          hisoka.sendMessage(m.chat, { text: xy }, { quoted: m });
        }
        break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
let anu = await fetchJson(api('yosh', '/api/'+command, {}, 'apikey'))
let Message = {
    text: anu.result.message
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('yosh', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('yosh', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
hisoka.sendMessage(m.chat, { image: { url: api('yosh', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
if (!text) throw `Example : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
    ["capricorn", new Date(1970, 0, 1)],
    ["aquarius", new Date(1970, 0, 20)],
    ["pisces", new Date(1970, 1, 19)],
    ["aries", new Date(1970, 2, 21)],
    ["taurus", new Date(1970, 3, 21)],
    ["gemini", new Date(1970, 4, 21)],
    ["cancer", new Date(1970, 5, 22)],
    ["leo", new Date(1970, 6, 23)],
    ["virgo", new Date(1970, 7, 23)],
    ["libra", new Date(1970, 8, 23)],
    ["scorpio", new Date(1970, 9, 23)],
    ["sagittarius", new Date(1970, 10, 22)],
    ["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
            
	    case 'stalker': case 'stalknick': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
let [type, id, zone] = args
if (type.toLowerCase() == 'ff') {
    if (!id) throw `No Query id, Example ${prefix + command} id`
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${id}?apikey=YoshCasaster`)
    m.reply(get_result.result);
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ml') {
if (!id) throw `Example: ${prefix + command} id/server`
get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${id}?apikey=YoshCasaster`,);
m.reply(get_result.result);
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'aov') {
    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
    let anu = await fetchJson(api('yosh', '/api/nickaov', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
    if (anu.status == false) return m.reply(anu.result.message)
    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'cod') {
    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
    let anu = await fetchJson(api('yosh', '/api/nickcod', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
    if (anu.status == false) return m.reply(anu.result.message)
    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'pb') {
    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
    let anu = await fetchJson(api('yosh', '/api/nickpb', { apikey: global.APIKeys[global.APIs['yosh']], query: id }))
    if (anu.status == false) return m.reply(anu.result.message)
    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ig') {
    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
    let { result: anu } = await fetchJson(api('yosh', '/api/stalker/ig', { username: id }, 'apikey'))
    if (anu.status == false) return m.reply(anu.result.message)
    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'npm') {
    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
    let { result: anu } = await fetchJson(api('yosh', '/api/stalker/npm', { query: id }, 'apikey'))
    if (anu.status == false) return m.reply(anu.result.message)
    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
} else {
    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
}
            }
            case "hitungwr": case "wr":
        {
          if (!q) throw (`Contoh: 
⭔ ${prefix + command} Total Match + Total Winrate + Req Winrate
⭔ ${prefix + command} 1000+58+90`);
          let [total_match, total_winrate, req_winrate ] = text.split`+`
              var { data } = await axios.get(
            `https://api.zahwazein.xyz/information/hitungwr?apikey=zenzkey_d395a7237940&text=${total_match}&text2=${total_winrate}&text3=${req_winrate}`,
          );
          var xy = `⭔*Total Match* : ${data.result.total_match}\n`;
          xy += `⭔*Total Winrate* : ${data.result.total_winrate}\n`;
          xy += `⭔*Req Winrate* : ${data.result.req_winrate}\n`;
          xy += `📄 *Keterangan* : ${data.result.description}`;
          
          hisoka.sendMessage(m.chat, { text: xy }, { quoted: m });
        }
        break
        case 'qc': case 'qcs': {
            if (!q) throw(`Contoh: ${prefix + command} pink hallo\n\nlist warna\n▸ pink\n▸ biru\n▸ merah\n▸ hijau\n▸ kuning\n▸ ungu\n▸ birutua\n▸ birumuda\n▸ abu\n▸ orange\n▸ hitam\n▸ putih\n▸ teal\n▸ merahmuda\n▸ cokelat\n▸ salmon\n▸ magenta\n▸ tan\n▸ wheat\n▸ deeppink\n▸ api\n▸ birulangit\n▸ jingga\n▸birulangitcerah\n▸ hotpink\n▸ birumudalangit\n▸ hijaulaut\n▸ merahtua\n▸ oranyemerah\n▸ cyan\n▸ ungutua\n▸ hijaulumut\n▸ hijaugelap\n▸ birulaut\n▸ oranyetua\n▸ ungukehitaman\n▸ fuchsia\n▸ magentagelap\n▸ abu-abutua\n▸ peachpuff\n▸ hijautua\n▸ merahgelap\n▸ goldenrod\n▸ abu-abutua\n▸ ungugelap\n▸ emas\n▸ perak`)
            if (text.length > 100) return reply(`🚩 Max 100 character.`)
            let [color, ...message] = text.split(' ');
            message = message.join(' ');
            let backgroundColor;
            switch(color) {
            case 'pink':
            backgroundColor = '#f68ac9';
            break;
            case 'biru':
            backgroundColor = '#6cace4';
            break;
            case 'merah':
            backgroundColor = '#f44336';
            break;
            case 'hijau':
            backgroundColor = '#4caf50';
            break;
            case 'kuning':
            backgroundColor = '#ffeb3b';
            break;
            case 'ungu':
            backgroundColor = '#9c27b0';
            break;
            case 'birutua':
            backgroundColor = '#0d47a1';
            break;
            case 'birumuda':
            backgroundColor = '#03a9f4'; 
            break;
            case 'abu':
            backgroundColor = '#9e9e9e';
            break;
            case 'orange':
            backgroundColor = '#ff9800';
            break;
            case 'hitam':
            backgroundColor = '#000000';
            break;
            case 'putih':
            backgroundColor = '#ffffff';
            break;
            case 'teal':
            backgroundColor = '#008080';
            break;
            case 'merahmuda':
            backgroundColor = '#FFC0CB';
            break;
            case 'cokelat':
            backgroundColor = '#A52A2A';
            case 'salmon':
            backgroundColor = '#FFA07A'; 
            break; 
            case 'magenta':
            backgroundColor = '#FF00FF'; 
            break; 
            case 'tan':
            backgroundColor = '#D2B48C'; 
            break;
            case 'wheat':
            backgroundColor = '#F5DEB3'; 
            break;
            case 'deeppink':
            backgroundColor = '#FF1493'; 
            break; 
            case 'api':
            backgroundColor = '#B22222';
            break;
            case 'birulangit':
            backgroundColor = '#00BFFF';
            break; 
            case 'jingga':
            backgroundColor = '#FF7F50';
            break;
            case 'birulangitcerah':
            backgroundColor = '#1E90FF'; 
            break; 
            case 'hotpink':
            backgroundColor = '#FF69B4'; 
            break; 
            case 'birumudalangit':
            backgroundColor = '#87CEEB'; 
            break; 
            case 'hijaulaut':
            backgroundColor = '#20B2AA'; 
            break; 
            case 'merahtua':
            backgroundColor = '#8B0000'; 
            break; 
            case 'oranyemerah':
            backgroundColor = '#FF4500'; 
            break; 
            case 'cyan':
            backgroundColor = '#48D1CC'; 
            break; 
            case 'ungutua':
            backgroundColor = '#BA55D3'; 
            break; 
            case 'hijaulumut':
            backgroundColor = '#00FF7F'; 
            break; 
            case 'hijaugelap':
            backgroundColor = '#008000'; 
            break; 
            case 'birulaut':
            backgroundColor = '#191970'; 
            break; 
            case 'oranyetua':
            backgroundColor = '#FF8C00'; 
            break; 
            case 'ungukehitaman':
            backgroundColor = '#9400D3'; 
            break; 
            case 'fuchsia':
            backgroundColor = '#FF00FF'; 
            break; 
            case 'magentagelap':
            backgroundColor = '#8B008B'; 
            break;
            case 'abu-abutua':
            backgroundColor = '#2F4F4F'; 
            break;
            case 'peachpuff':
            backgroundColor = '#FFDAB9'; 
            break;
            case 'hijautua':
            backgroundColor = '#BDB76B'; 
            break;
            case 'merahgelap':
            backgroundColor = '#DC143C'; 
            break;
            case 'goldenrod':
            backgroundColor = '#DAA520'; 
            break;
            case 'abu-abutua':
            backgroundColor = '#696969'; 
            break;
            case 'ungugelap':
            backgroundColor = '#483D8B'; 
            break;
            case 'emas':
            backgroundColor = '#FFD700'; 
            break;
            case 'perak':
            backgroundColor = '#C0C0C0'; 
            break;
            default:
            throw('Warna yang dipilih tidak tersedia.')
            }
            let obj = {
            type: 'quote',
            format: 'png',
            backgroundColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [
            {
            entities: [],
            avatar: true,
            from: {
            id: 1,
            name: pushname,
            photo: { 
            url: await hisoka.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
            }
            },
            text: message,
            replyMessage: {},
            },
            ],
            };
            let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
            'Content-Type': 'application/json',
            },
            });
            let buffer = Buffer.from(response.data.result.image, 'base64');
            hisoka.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            case "tiktoknowm": case "tt":
        {
          if (!q) throw `Example: ${prefix + command} link`
          if (!isCreator) throw mess.owner
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
          m.reply(mess.wait)
          var { data } = await axios.get(
            `https://api.lolhuman.xyz/api/tiktok?apikey=YoshCasaster&url=${q}`,
          );
          var tt = `⭐ *Title* : ${data.result.title}\n`;
          tt += `⭐ *Keyword* : ${data.result.keyword}\n`;
          tt += `⭐ *Durasi* : ${data.result.duration}\n`;
          tt += `⭐ *Description* : ${data.result.description}\n`;

          hisoka.sendMessage(
            m.chat,
            {
              video: { url: data.result.link },
              mimetype: "video/mp4",
              caption: tt,
            },
            { quoted: m },
          );
        }
        break
            case 'tiktokwm': case 'tiktokwatermark': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/api/tiktokwm', { url: text }, 'apikey'))
let Message = {
    video: { url: anu.result.link },
    caption: `Download From ${text}`
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
    let anu = await fetchJson(api('yosh', '/api/instagram2', { url: isUrl(text)[0] }, 'apikey'))
    for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
} else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
    let anu = await fetchJson(api('yosh', '/api/instastory', { url: isUrl(text)[0] }, 'apikey'))
    hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
}
            }
            break
            case 'joox': case 'jooxdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/downloader/joox', { query: text }, 'apikey'))
let msg = await hisoka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/api/downloader/twitter', { url: text }, 'apikey'))
let Message = {
    video: { url: anu.result.HD || anu.result.SD },
    caption: util.format(anu.result)
}
hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/api/downloader/twitter', { url: text }, 'apikey'))
let Message = {
		    image: { url: anu.result.thumb },
    caption: util.format(anu.result)
}
let msg = await hisoka.sendMessage(m.chat, Message, { quoted: m })
hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/api/downloader/facebook', { url: text }, 'apikey'))
hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('yosh', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
            case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
    text,
    mentionedJid: m.mentionedJid,
    creator: m.sender,
    at: + new Date,
    locked: false,
}
m.reply(`Done!`)
            }
            break
            case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
m.reply(`Done!`)
            }
            break
            case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
            }
            break
            case 'addlist': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getlist': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'list': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'dellist': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
m.reply(`\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKetik ${prefix}start Untuk Mencari Partner\`\`\``)
            }
			break
            case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
if (!room) {
    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Ketik ${prefix}start Untuk Mencari Partner \`\`\``)
    throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete db.data.anonymous[room.id]
if (command === 'leave') break
            }
            case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
    m.reply(`\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, ketik ${prefix}keluar Untuk Menghentikan Sesi Anonymous Anda\`\`\``)
    throw false
}
let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
    hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
    room.b = m.sender
    room.state = 'CHATTING'
    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
} else {
    let id = + new Date
    db.data.anonymous[id] = {
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
    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
}
break
            }
            case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
if (!romeo) {
    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, ketik ${prefix}start Untuk Mencari Partner\`\`\``)
    throw false
}
let other = romeo.other(m.sender)
if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete db.data.anonymous[romeo.id]
let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
    await hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
    room.b = m.sender
    room.state = 'CHATTING'
    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
} else {
    let id = + new Date
    db.data.anonymous[id] = {
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
    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
}
break
            }
            case 'public': {
if (!isCreator) throw mess.owner
hisoka.public = true
m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
if (!isCreator) throw mess.owner
hisoka.public = false
m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
}, {
    speed: 0,
    total: 0,
    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                    hisoka.sendMessage(m.chat,   { text:"┏━ 『INFO OWNER』━⬤\n┃◈ NAMA : *𝐘𝐨𝐬𝐞𝐩 𝐖𝐃*\n┃◈ NO WA : *+6281935593316*\n┃◈ IG : *@yosepwdd*\n┃◈ TT : *@yosepwd*\n┃◈ Hobby : *YTTA*\n┃◈ KATA-KATA : *NATUS VINCERE*\n┃◈ PORTOFOLIO : *https://bit.ly/YosepWD*\n┗━━━━━⬤\nSeperti itulah kurang lebih  『 *>.<* 』\nJangan spam Lvy yaa,\nNanti Lvy Marah 😡😡😡"}, { quoted: m })
                    hisoka.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('yosh', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('yosh', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('yosh', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('yosh', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('yosh', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('yosh', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `⭔ Judul: ${judul}\n`
            capt += `⭔ Dibaca: ${dibaca}\n`
            capt += `⭔ Divote: ${divote}\n`
            capt += `⭔ Bab: ${bab}\n`
            capt += `⭔ Waktu: ${waktu}\n`
            capt += `⭔ Url: ${url}\n`
            capt += `⭔ Deskripsi: ${description}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'pay': case 'payment': case 'donate': {
m.reply(`Dana : ${adana}\nOvo : ${aovo}\nGopay : ${agopay}`)
}
break

            
            
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('yosh', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Like: ${i.like}\n`
            capt += `⭔ Creator: ${i.creator}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('yosh', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break 
            case 'help': case 'yay': case 'listmenu': {
hisoka.sendPoll(m.chat, "List Menu\nSimbol ⛔ = MAINTENANCE ", ['MenuAll','MenuGroup','MenuDownload','MenuSearch','MenuRandom','MenuMaker','MenuFun','MenuMlbb','MenuPrimbon','MenuConvert','MenuMain','MenuOwner'])
            }
            break
            
            case 'menuall': case 'allmenu': {
let anu = `┌──⭓ *All Menu*
│
${allCmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            case 'daftar': {
let anu = `Pilih Yang Sesuai`
hisoka.sendPoll(m.chat, anu, ['Daftar-Bot-USM','Daftar-Premium-Public'])
            }
            break
            case 'menugc': case 'menugrup': case 'menugroup': {
let anu = `┌──⭓ *Group Menu*
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menudownload': case 'menudl': case 'menudown': {
let anu = `┌──⭓ *Downloader Menu*
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menusearch': {
let anu = `┌──⭓ *Search Menu*
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            case 'menurandom': {
let anu = `┌──⭓ *Random Menu*
│
${cmdRand.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menumaker': {
let anu = `┌──⭓ *Maker Menu*
│
${cmdMaker.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            case 'menufun': {
let anu = `┌──⭓ *Fun Menu*
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            case 'menumlbb': {
let anu = `┌──⭓ *Fun Menu*
│
${cmdMlbb.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break  
            case 'menuprimbon': {
let anu = `┌──⭓ *Primbon Menu*
│
${cmdPrimbon.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menuconvert': {
               let anu = `┌──⭓ *Convert Menu*
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menumain': {
let anu = `┌──⭓ *Main Menu*
│
${cmdStore.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'menuowner': {
let anu = `┌──⭓ *Owner Menu*
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│⭔ ${prefix}`+ v).join('\n')}
│
└───────⭓`
hisoka.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            default:
if (budy.startsWith('=>')) {
    if (!isCreator) return m.reply(mess.owner)
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2)
        bang = util.format(sat)
            if (sat == undefined) {
bang = util.format(sul)
            }
            return m.reply(bang)
    }
    try {
        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
        m.reply(String(e))
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return m.reply(mess.owner)
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await m.reply(evaled)
    } catch (err) {
        await m.reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return m.reply(mess.owner)
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    })
}
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
        if (/^.*(next|leave|start)/.test(m.text)) return
        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
        let other = [room.a, room.b].find(user => user !== m.sender)
        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
            contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
            }
        } : {})
    }
    return !0
}
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
