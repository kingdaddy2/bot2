const Discord = require('discord.js')
const client = new Discord.Client()
const data = require('../models/account')


module.exports.run = async (client, message, args, prefix) => {
    if (message.member.roles.cache.find(r => r.name === "Admins")) {

        const user = message.mentions.users.first();
        let num = message.content.split(" ").slice(2)
            .join(" ");
        let args2 = parseInt(num)

        if (!user) {
            let nouser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .addField(`:x: Error :`, `برجاء منشنت العضو الذي تريد اعطأه ! `)
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            return message.channel.send(nouser)
        }
        if (!num) return message.channel.send(`**برجاء ادخال عدد الحسابات !**`)
if(!Number(Number(num))) return message.channel.send(`**برجاء ادخال عدد الحسابات !**`)
        if (user) {
            let usususu = 'Minecar'
            const findacc = await data.find({}).limit(args2)
            let acc = ""
            let ass = findacc.map(async d => acc += `${d.Accountdata}\n`
            )
            let asssss = findacc.map(async d => data.findOneAndRemove({ Accountdata: d.Accountdata }))

            if (findacc) {
                if (num > findacc.length) return message.channel.send(`Max Limit : ${findacc.length}`)
                let chadiowe = client.channels.cache.find(channel => channel.id === '864539143107248149');
                let annnn = client.users.cache.get(`${user.id}`)
                user.send(`**السلام عليكم عزيزي العميل ، الحسابات كلها مكتوبه بالشكل الاتي : \n Email:Password**\n\n${acc} \n\n **ضمان الحسابات لمده 15 دقيقه فقط**\n\n**لا تنسى كتابة كلمة شكر , فضلا وليس امرا <#876960231719059498>**`)
                let role = message.guild.roles.cache.find(r => r.id === '864539142539968586');
                await message.channel.send(`**Done**`)
                var person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
                await person.roles.add(role)
                let logembed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`تم اعطاء حساب جديد :`)
                .setDescription(`**الي اعطى الحسابات : ${message.author}\n الشخص المستلم : ${person} \n عدد الحسابات : ${num}**`)
                await chadiowe.send(logembed)
            }
            if (!findacc) {
                await message.channel.send(`NO ACCS`)
            }
        }
    } else {
        message.channel.send(`:x: Error **${message.author.username}** : This command is only for Admins ..`)
    }
}

module.exports.config = {
    name: "give",
    aliases: []
}
