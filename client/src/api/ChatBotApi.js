import { api } from "./api";

//********************** user and bot interaction***************************//

const botApi = (action) => {
    console.log(action)
    const url = `http://localhost:5000/chat`
    const body = {
        chats: action.chats
    }
    console.log("body", body)
    return api._post(url, body).then((response) => {
        console.log(response)
        const payload = response
        return {
            payload
        }
    }).catch((error) => {
        console.log("error userapi", error)
        return {
            error
        }
    })
}


//********************** save the messages to DB***************************//

const saveApi = (action) => {
    const url = `http://localhost:5000/save`
    const body = {
        chats: action.chats,
    }
    return api._post(url, body).then((response) => {
        const payload = response.data
        return {
            payload
        }
    }).catch((error) => {
        return {
            error
        }
    })
}


//**********************get the saved messages from DB***************************//

const getMsgsApi = (action) => {
    const url = `http://localhost:5000/getMsgs`

    return api._get(url).then((response) => {
        const payload = response.data
        return {
            payload
        }
    }).catch((error) => {
        return {
            error
        }
    })
}




export const ChatbotApi = {
    botApi,
    saveApi,
    getMsgsApi,
}





