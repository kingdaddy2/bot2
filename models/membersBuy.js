const mongoose = require("mongoose");

const membersBuy = new mongoose.Schema({
member: String,
GuildID: String,
end: Boolean

});

const MessageModel = (module.exports = mongoose.model(
  "membersBuy",
  membersBuy
));
