import { useState } from "react";
import "./Chat.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import PopUp from "../../layout/PopUp";
import { useSelector, useDispatch } from "react-redux";
import { botRequest, getMessageRequest, saveMessageRequest } from "../actions";
import { useEffect } from "react";
import { chatsDash } from "../../content/actions";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import DashBoard from "./DashBoard";
import ChatHistory from "./ChatHistory";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openSave, setOpenSave] = useState(false);

  //**********************Redux state***************************//

  const dispatch = useDispatch();

  const getData = useSelector((state) => {
    return {
      loading: state.botReducer.loading,
      bot: state.botReducer.bot,
      chatMessages: state.botReducer.chatMessages,
      getMsgs: state.botReducer.getMsgs,
      dashboard: state.dashboardReducer.dashboard,
      chatVisible: state.dashboardReducer.chat,
    };
  });

  const { loading, bot, chatMessages, getMsgs, chatVisible } = getData;

  const handleError = () => {
    console.log("error");
    setOpenError(true);
    setTimeout(() => {
      dispatch(chatsDash(false));
    }, 3000);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleSave = () => {
    if (chats && chats !== undefined && chats.length > 0) {
      dispatch(saveMessageRequest(chats));
      setOpenSave(true);
    }
  };

  const handleCloseSave = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSave(false);
  };

  const chatFunction = async (e, message) => {
    e.preventDefault();
    if (!message) return;
    setIsTyping(true);
    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);
    setMessage("");
    dispatch(botRequest(chats));

    //**********************Api callling***************************//

    fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //**********************Life cycle***************************//

  useEffect(() => {
    if (
      chatMessages &&
      chatMessages !== undefined &&
      chatMessages.status === 201
    )
      setOpenSave(true);
    else setOpenSave(false);
  }, [chatMessages]);

  useEffect(() => {
    dispatch(getMessageRequest());
  }, []);

  useEffect(() => {
    getMsgs && getMsgs.length > 0 && setChats(getMsgs);
  }, [getMsgs]);

  return (


    // <div>
    //   { chatVisible ? <DashBoard/> : <ChatHistory/>}
    // </div>


    <div>
      {/* <Dashbord /> */}

      <PopUp
        handleClose={handleCloseError}
        open={openError}
        severity={"error"}
        message={"Chat Ended"}
      />

      <PopUp
        handleClose={handleCloseSave}
        open={openSave}
        severity={"success"}
        message={"Chat saved successfully"}
      />
      {chatVisible ? (
        <>
          <Box>
            <Grid container columns={16}>
              <Grid item xs={13}>
                <Typography variant="h4">Chat</Typography>

                <main style={{ paddingBottom: "4px" }}>
                  <section>
                    {chats && chats.length > 0
                      ? chats.map((chat, index) => (
                          <p
                            key={index}
                            className={
                              chat.role === "assistant" ? "user_msg" : ""
                            }
                          >
                            <span>
                              <b
                                className={chat.role === "user" ? "Me" : "Bot"}
                              >
                                {chat.role === "user" ? "Me" : "Bot"}
                              </b>
                            </span>
                            <span>:</span>
                            <span>{chat.content}</span>
                          </p>
                        ))
                      : ""}
                    <div className="loading">
                      <i>{isTyping ? "...Typing" : ""}</i>
                    </div>
                  </section>
                </main>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {/* <Box item xs={1}> */}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    sx={{
                      "& > :not(style)": {
                        mr: 1,
                        mb: 3,
                        width: "75ch",
                        borderRadius: "70px",
                        height: "40px",
                      },
                    }}
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    // onKeyUp={(e) => chatFunction(e, message)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        chatFunction(e, message);
                      }
                    }}
                  />

                  {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

                  <Button
                    onClick={(e) => chatFunction(e, message)}
                    variant="contained"
                    color="success"
                    style={{
                      borderRadius: "70px",
                      height: "40px",
                      paddingLeft: "30px",
                    }}
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={2}>
                <Box>
                  <Grid container wrap="nowrap">
                    <Grid item xs zeroMinWidth>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleError}
                        className="logOut"
                        startIcon={<CancelIcon />}
                      >
                        End Chat
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                      <Button
                        className="save"
                        variant="contained"
                        color="success"
                        onClick={handleSave}
                        startIcon={<SaveIcon />}
                        // style={{margin:"1px"}}
                      >
                        Save Chat
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : 
        <div style={{backgroundColor:"red"}}>
         
          <DashBoard />
        </div>
      }
    </div>
  );
}
export default ChatBot;
