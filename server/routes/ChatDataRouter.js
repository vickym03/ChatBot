const express = require("express");
const ChatDataRouter = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const ChatDataModel = require("../model/ChatDataModel")




/*
use:user and bot interaction
url:http://localhost:5000/chat
method: post
body:  [ { role: 'user', content: 'hello' } ]

*/


const configuration = new Configuration({

    // organization: "org-ouNF96PdTfRuxH9ZieXmjzLl",
    apiKey: process.env.CHATBOT_KEY,
});

const openai = new OpenAIApi(configuration);


ChatDataRouter.post("/chat", async (request, response) => {
    // console.log("response", response.body)

    const { chats } = request.body;
    console.log("request.body", chats)

    const completion = await openai.createChatCompletion({
        // model: "gpt-3.5-turbo",
        model: "gpt-3.5-turbo-0301",
        messages: [
            // {
            //     role: "system",
            //     content: "You are a EbereGPT. You can help with graphic design tasks",
            // },
            ...chats,
        ],
    });
    response.send({ output: completion.data.choices[0].message });

})


/*
use:save the messages to DB
url:http://localhost:5000/save
method: post
body:

*/


ChatDataRouter.post("/save", async (request, response) => {
    console.log("save", request.body);
    const data = request.body
    const chatSave = new ChatDataModel(data)

    chatSave.save().then((result) => {
        console.log("result", result)
        response.status(201).send({
            data: {
                message: "Chat saved successfully",
                data: result,
                status: 201
            }
        })
    }).catch((error) => {
        console.log("error", error)
        response.status(404).send({
            data: {
                message: "Chat saved  failed",
                data: error
            }
        })
    })
})


/*
use:get the saved messages from DB
url:http://localhost:5000/getMsgs
method: post
body:
*/

ChatDataRouter.get("/getMsgs", async (request, response) => {

    ChatDataModel.find({}).then((result) => {
        console.log("result", result)

        const res = []
        result && result.forEach((ele) => {
            ele.chats.map((data) => {
                res.push({ role: data.role, content: data.content })
            })
            return (ele)
        })

        response.status(201).send({
            data: {
                message: "Chat  fetched successfully",
                data: res,
                status: 201
            }
        })
    }).catch((error) => {
        console.log("error", error)
        response.status(404).send({
            data: {
                message: " Chat  fetched failed",
                data: error
            }
        })
    })
})



module.exports = ChatDataRouter;


















