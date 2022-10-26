const Discord = require("discord.js");
var client = new Discord.Client();
const { loadCommands } = require("./utils/loadCommands");
const mongoose = require("mongoose");
const prefix = require("./models/prefix");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://foggy-quick-bromine.glitch.me/`); /// حط اسم المشروع تبعك name تعديل مهم بدل
}, 280000);
mongoose.connect("mongodb+srv://elitenetflix:852852852@aa@cluster0.i0x5o.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
loadCommands(client);

client.on("ready", () => {
  console.log("ready");
});

client.on("message", async message => {
  if (message.author.bot) return;

  //Getting the data from the model
  const data = await prefix.findOne({
    GuildID: message.guild.id
  });
  const messageArray = message.content.split(/ +/);
  const cmd = messageArray[0].toLocaleLowerCase();
  const args = messageArray.slice(0);

  if (data) {
    const prefix = data.Prefix;
    if (!message.content.startsWith(prefix)) return;
    const commandfile =
      client.commands.get(cmd.slice(prefix.length)) ||
      client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) {
      commandfile.run(client, message, args, prefix);
    }
  } else if (!data) {
    const prefix = "-"; /// PREFIX

    if (!message.content.startsWith(prefix)) return;
    const commandfile =
      client.commands.get(cmd.slice(prefix.length)) ||
      client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (commandfile) {
      commandfile.run(client, message, args, prefix);
    }
  }
});

client.login(process.env.token);
let Eris = require('eris')

 client = Eris(process.env.token)
let members = []

const awaitMessage = async (channel, options = {})=>{
return await new Promise((re) =>{
if(options.Number === true){
client.on('messageCreate', async (msg) =>{
if(channel.id === msg.channel.id && Number(Number(msg.content))) re(msg)
})
return;
}

if(options.tranfers === true){
client.on('messageCreate', async (msg) =>{
if(channel.id === msg.channel.id && options.probotID === msg.author.id){
console.log(msg.content)
if(!msg.content.includes(options.member.username)) return;
if(!msg.content.includes(':moneybag:')) return;
let money = msg.content.replace(options.member.username, '').replace('**:moneybag: | ', '').replace('**', '').replace(', has transferred ', '')
.replace('`', '')
.replace('`', '')
.replace('$', '')
.replace(' to ', '')
.replace(`<@!${options.ownerID}>`, '')
.replace(`<@${options.ownerID}>`, '')

 re(money)
}
})
return;
}

client.on('messageCreate', async (msg) =>{
if(channel.id === msg.channel.id) re(msg)
})



})
}

let removeMember = (_id) =>{
let find = members.find(d => d._id === _id)
if(!find) return;

members.shift(find)

}
let addMember = (id) =>{
const rand = Math.random().toString(36).substr(2, 18); 

members.unshift({
id: id,
awaitBuy: true,
_id: rand
})
return {
id: id,
awaitBuy: true,
_id: rand
}

}
let dataMember = (_id) =>{
return members.find(d => `${d._id}` === `${_id}`)
}
let getData = (id, awaitBuy = false) =>{
if(awaitBuy === "noRequest") return members.find(d => d.id === id)
return members.find(d => d.id === id && d.awaitBuy === awaitBuy)
}
const data = require("./models/account");
var tranferID = "878484812946608158"

client.on('messageReactionAdd', async (msg, emoji, member) =>{
if(!msg.channel.guild) return;

if(emoji.name === "Netflix" && msg.id === "878496165304340510"){
client.removeMessageReaction(msg.channel.id, msg.id, "Netflix:878494774712217601", member.id)


if(getData(member.id, true)) return;
let dataBuy = addMember(member.id)

let user = await client.getDMChannel(member.id).catch(err =>{})
if(!user) return removeMember(dataBuy._id)
//const data = require("../models/account");
const findacc = await data.find({});
user.createMessage(`قم بارسال عدد الحسابات التي تريدها\n الكمية المتوفرة حاليا : ${findacc.length}`)

let count = await awaitMessage(user, {Number: true})

if(count.content < 1) {
removeMember(dataBuy._id)
return user.createMessage('لا يمكنك شراء اقل من 1')
}

if(count.content > findacc.length) {
removeMember(dataBuy._id)
return user.createMessage('لا يوجد هذا الكمية')
}

// console.log(count) 
var priceAccount = Math.floor(5000 * 20 / 19) + 1
let price = Number(count.content) * priceAccount

await msg.channel.guild.channels.get(tranferID).editPermission(member.id, 2048, 0, "member")


user.createMessage("لشراء قم بتحويل "+ price +" لـ <@463208341804548097> \n```#credit <@463208341804548097> "+ price +"```\nفي: <#"+ tranferID +">")

              setTimeout(async () => { 
await msg.channel.guild.channels.get(tranferID).editPermission(member.id, 0, 2048, "member")
if(!dataMember(dataBuy._id)) return;
removeMember(dataBuy._id)

return user.createMessage(`لقد تاخرت في التحويل ، تم الغاء العملية`)
 },180000);

let tranfers = await awaitMessage(msg.channel.guild.channels.get(tranferID), {tranfers: true, ownerID: "463208341804548097", member: member, probotID: "282859044593598464"})

let pay = Number(tranfers)
if(!Number(Number(tranfers))) {
await msg.channel.guild.channels.get(tranferID).editPermission(member.id, 0, 2048, "member")
removeMember(dataBuy._id)

return user.createMessage(`لقد قمت بالتحويل لشخص خطا ، تم الغاء العملية`)
}
        let priceNow = Math.floor(price - price * (5 / 100));
if(pay === Math.floor(priceNow)){
await msg.channel.guild.channels.get(tranferID).editPermission(member.id, 0, 2048, "member")
removeMember(dataBuy._id)
var acc = ""
 user.createMessage(`**السلام عليكم عزيزي العميل ، الحسابات كلها مكتوبه بالشكل الاتي : \n Email:Password** note: لديك ضمان (5) دقائق فقط لتجربة الحسابات اذا كانت اقل من (10) حسابات و (10) دقائق اذا كان (+10) حسابات\n\n`)
var n =0
for(const d of findacc){
if(n !== Number(count.content)){
n++
await data.deleteOne({ _id: d._id })

if(acc.length > 1900){
acc = ""
user.createMessage(`${acc}`)
}

acc += `${d.Accountdata}\n`
}
     
}
msg.channel.guild.channels.get('876960241177227304').createMessage({embed:{
  title:"تم تسليم حساب جديد:",
  description:`**تم تسليم <@${member.id}> ${count.content} حساب نتفلكس**`,
  footer:"",
}})
 user.createMessage(`${acc}`)
return member.addRole("876967643763073084")

}else{
await msg.channel.guild.channels.get(tranferID).editPermission(member.id, 0, 2048, "member")
removeMember(dataBuy._id)
return user.createMessage(`لم يتم تحويل المبلغ كامل ، تم الغاء العملية`)
}
}
})

client.connect()