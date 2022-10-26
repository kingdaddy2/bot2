const Discord = require("discord.js");
const client = new Discord.Client();
const data = require("../models/account");
const dataMemberBuy = require("../models/membersBuy");

module.exports.run = async (client, message, args, prefix) => {
  let num = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  let args2 = parseInt(num);
  if (!num) return message.channel.send(`**:x: برجاء ادخال عدد الحسابات !**`);
  const findacc = await data.find({}).limit(args2);
  let role = message.guild.roles.cache.find(r => r.id === "876967643763073084");
  let chadiowe = client.channels.cache.find(
    channel => channel.id === "876960241177227304"
  );
  let owner = "742546837319319664";
var failed = false
  if (findacc) {
    if (num) {
      try {
        await message.author.send(`Checking ur DM !`).catch(err =>{
        return message.channel.send(`:x: فشلت العمليه .. خاصك مقفل !`);
failed = true
})
      } catch {
        return message.channel.send(`:x: فشلت العمليه .. خاصك مقفل !`);
      }
if(failed === true) return;
let find = await dataMemberBuy.find({member: message.author.id, end: false})
console.log(find)
if(find[0]) return message.channel.send("يجب عليك الغاء العمليه السابقه او انهاؤها\nللالغاء اكتب\n`-buyrest`")
let dataBuy = await new dataMemberBuy({member: message.author.id, GuildID: message.guild.id, end: false}).save()
console.log(dataBuy)
if(num < 1) return message.channel.send(`الرجاء كتابة عدد صحيح`)
if(isNaN(num)) return message.channel.send(`الرجاء كتابة عدد صحيح`)
      if (num > findacc.length)
        return message.channel.send(
          `**:x: لا يوجد هذا العدد من الحسابات !**\n العدد الموجود : ${findacc.length}`
        );
      if (num >= 10) {
        let one = 6000;
        let price2 = num * one;
        let price = (price2 * 95) / 100;

        let start = new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setFooter(
            client.user.username,
            client.user.displayAvatarURL({ dynamic: true })
          )
          .setDescription(
            `برجاء تحويل : \`${price2}\` الى : <@${owner}> \n\`\`\`#credit <@${owner}> ${price2}\`\`\``
          );

        message.channel.send(start).then(async m => {
          const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price);
          m.channel
            .awaitMessages(filter, {
              max: 1,
              time: 60 * 1000 * 4,
              errors: ["time"]
            })
            .then(async memem => {
if(!memem.first()) return;

find = await dataMemberBuy.find({member: message.author.id, end: false})
console.log(find)
if(find.find(d => `${d._id}` !== `${dataBuy._id}`)) return;
              let acc = "";
              let ass = findacc.map(async d => (acc += `${d.Accountdata}\n`));
              let asssss = findacc.map(async d =>
                data.findOneAndRemove({ Accountdata: d.Accountdata })
              );
              message.author.send(
                `**السلام عليكم عزيزي العميل ، الحسابات كلها مكتوبه بالشكل الاتي : \n Email:Password**\n\n${acc}`
              );
              await message.channel.send(`**تم تسليمك الحسابات بنجاح !**\n **سوف يتم حذف التكت خلال 10 ثواني**`);
              setTimeout(() => { message.channel.delete(); },10000);
await dataMemberBuy.updateOne({_id: dataBuy._id}, {end: true})
              let logembed = new Discord.MessageEmbed()
                .setAuthor(
                  message.author.username,
                  message.author.displayAvatarURL({ dynamic: true })
                )
                .setTimestamp()
                .setFooter(
                  client.user.username,
                  client.user.displayAvatarURL({ dynamic: true })
                )
                .setTitle(`تم اعطاء حساب جديد :`)
                .setDescription(
                  `**الشخص المستلم : ${message.author} \n عدد الحسابات : ${num}**`
                );
              await chadiowe.send(logembed);
              await message.member.roles.add(role);
            })
            .catch(async err => {
await dataMemberBuy.updateOne({_id: dataBuy._id}, {end: true})

              m.channel
                .send("انتهت مهلة التحويل تم الغاء العملية")
                .then(err => {
                  setTimeout(() => {
                    err.delete();
                    m.delete();
                  }, 5000);
                });
            });
        });
      } else {
        let one = Math.floor(6000 * 20 / 19) + 1;
        let price2 = num * one;
        let price = Math.floor(price2 - price2 * (5 / 100));

        let start = new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setFooter(
            client.user.username,
            client.user.displayAvatarURL({ dynamic: true })
          )
          .setDescription(
            `برجاء تحويل : \`${price2}\` الى : <@${owner}> \n\`\`\`#credit <@${owner}> ${price2}\`\`\``
          );
        message.channel.send(start).then(async m => {
          const filter = response =>
            response.content.startsWith(
              `**:moneybag: | ${message.author.username}, has transferred `
            ) &&
            response.content.includes(`${owner}`) &&
            response.author.id === "282859044593598464" &&
            response.content.includes(price);
          m.channel
            .awaitMessages(filter, {
              max: 1,
              time: 60 * 1000 * 4,
              errors: ["time"]
            })
            .then(async memem => {
if(!memem.first()) return;
find = await dataMemberBuy.find({member: message.author.id, end: false})
console.log(find)
if(find.find(d => `${d._id}` !== `${dataBuy._id}`)) return;
              let acc = "";
              let ass = findacc.map(async d => (acc += `${d.Accountdata}\n`));
              let asssss = findacc.map(async d =>
                data.findOneAndRemove({ Accountdata: d.Accountdata })
              );
              message.author.send(
                `**السلام عليكم عزيزي العميل ، الحسابات كلها مكتوبه بالشكل الاتي : \n Email:Password**\n\n${acc} \n\n **ضمان الحسابات لمده 15 دقيقه فقط**\n\n**لا تنسى كتابة كلمة شكر , فضلا وليس امرا <#876960231719059498>**`
              );
await dataMemberBuy.updateOne({_id: dataBuy._id}, {end: true})

              await message.channel.send(`**تم تسليمك الحسابات بنجاح !**\n **سوف يتم حذف التكت خلال 10 ثواني**`);
              setTimeout(() => { message.channel.delete(); },10000);
              let logembed = new Discord.MessageEmbed()
                .setAuthor(
                  message.author.username,
                  message.author.displayAvatarURL({ dynamic: true })
                )
                .setTimestamp()
                .setFooter(
                  client.user.username,
                  client.user.displayAvatarURL({ dynamic: true })
                )
                .setTitle(`تم اعطاء حساب جديد :`)
                .setDescription(
                  `**الشخص المستلم : ${message.author} \n عدد الحسابات : ${num}**`
                );
              await chadiowe.send(logembed);
              await message.member.roles.add(role);
            })
            .catch(async err => {
await dataMemberBuy.updateOne({_id: dataBuy._id}, {end: true})

              m.channel
                .send("انتهت مهلة التحويل تم الغاء العملية")
                .then(err => {
                  setTimeout(() => {
                    err.delete();
                    m.delete();
                  }, 5000);
                });
            });
        });
      }
    }
  }
  if (!findacc) {
    message.channel.send(`لا يوجد حسابات !`);
  }
};

module.exports.config = {
  name: "buy",
  aliases: ["شراء"]
};
