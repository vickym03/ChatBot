const mongoose = require("mongoose");

const ChatDataModel = new mongoose.Schema({
    
    
    chats: [
        {
            role: String,
            content: String
           
        }
    ]
});



module.exports = mongoose.model.Chats || mongoose.model("Chats", ChatDataModel);

