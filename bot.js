const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}

client.on('ready', () => {
	console.log('I am Fucker!'); 
  });



client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
       
    var subChannel = message.guild.channels.find(c => c.name === 'طلبات');
   
  if(message.content.startsWith('شراء')) {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
       
               let embed = new Discord.RichEmbed()

        message.channel.send(`
<:Working:476155004894314503> **1:| بوت بروفايل**
<:Working:476155004894314503> **2:| بوت رابط,متغير كل 24ساعة**
<:Working:476155004894314503> **3:| بوت نسخة للسيرفر,في حال تعرض للتهكير**
<:Working:476155004894314503> **4:| بوت ادمن فيه كل الاوامر الادمنيه**
<:Working:476155004894314503> **5:| بوت ترحيب,مع تم دعوتك من قبل**
<:Working:476155004894314503> **6:| بوت مانع الجحفلة***
<:Working:476155004894314503> **7:| بوت ست اونلاين يعرض لك الاعضاء المتواجده في الرومات**
<:Working:476155004894314503> **8:| بوت بردوكسات عام يشمل تحديد الرتبة**
<:mui:497056037044617219> **9:| بوتات ميوزك6**
<:mui:497056037044617219> **10:| بوتات ميوزك 5**
<:mui:497056037044617219> **11:| بوت ميوزك الأدمن**
<:mui:497056037044617219> **12:| بوت قرأن مجانآ لفترة محدوده**
---------------
**لو حاب تشتري اكتب**
**رقم الطلبيه فقط**
**مثال**
-------------
**1**
		`).then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit('**الحين اكتب اسم البوت ,اسامي البوتات.**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit('**ماذا تريد ان يكون مفتاح تشغيل البوت؟**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit('**<:realy:497172662540566538>هل لديك شى تبي تضيفة؟**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**هل انت متاكد؟**')
                                       .setColor('RANDOM')
                                        .addField('رقم الطلبية', name, true)
                                        .addField('اسم البوت,اسامي البوتات', age, true)
                                        .addField('برفكس البوت,برفكسات البوتات', fromwhere, true)
                                        .addField('اشياء اضافية', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | **تم تقديم طلبك سوف يتم الرد عليك في اقرب وقت وشكرآ** ').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                 .setColor('RANDOM')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('رقم الطلبيه', name)
                                                .addField('اسم البوت,اسامي البوتات', age)
                                                .addField('برفكس البوت,برفكسات البوتات', fromwhere)
                                                .addField('اشياء اضافية', fa2dh)
                                                .addField('حسابه', message.author)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('👌').then(() => msgS.react('❎'))
                                                   

                                                   
                                                   
                                                   
                                                 
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
  }
});


client.on('message', msg => {
  if (msg.author.bot) return;
  var prefix = '#';

  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find("name","chat")
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
const w = ['./no4.png'];
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);

      })
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 277, 138);

                                    ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(`${hours}:${minutes}:${seconds} ${suffix}`, 314, 200);
                                                     var guild;
    while (!guild)
                        guild = member.guild
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
                        member.guild.fetchInvites().then(invs => {
      let user = Invite.inviter;
      let invites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = invites.reduce((p, v) => v.uses + p, 0);

 channel.send(`**Invited By** : **${Invite.inviter} (${inviteCount})**`);

})
}
            dat[Inv] = Invite.uses;
})
})
                              //NAMEً
                              ctx.font = '44px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ⤵`, 260, 44);


                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '22px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`${member.guild.name}`, 315, 76);

                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();

                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();
 channel.sendFile(canvas.toBuffer())
                          })
})
});





client.login(process.env.BOT_TOKEN);
