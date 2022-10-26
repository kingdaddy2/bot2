const dataMemberBuy = require("../models/membersBuy");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, args, prefix) => {
console.log('t')
let dataMember = await dataMemberBuy.find({member: message.author.id})
console.log('tt')

for(const d of dataMember){
await dataMemberBuy.updateOne({_id: d._id}, {end: true})
}
console.log('rrt')

message.channel.send('تم الغاء جميع عملياتك السابقة')

}

module.exports.config = {
  name: "buyrest",
  aliases: ["الغاء"]
};
