import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./Board.css";
import { useSelector, useDispatch } from "react-redux";
import { chatHistory, chatsDash, dashboard, settings } from "../actions";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function BoardContent() {

  //**********************Redux state***************************//

  const dispatch = useDispatch();

  const getData = useSelector((state) => {
    return {
      dashboardLayout: state.dashboardReducer.dashboard,
      chatVisibleLayout: state.dashboardReducer.chat,
      settingsLayout: state.dashboardReducer.settings,
      chatHistoryLayout: state.dashboardReducer.chatHistory,
    };
  });

  const {
    dashboardLayout,
    chatVisibleLayout,
    settingsLayout,
    chatHistoryLayout,
  } = getData;

  

//********************** Content***************************//

  const handleChat = () => {
    dispatch(chatsDash(true));
  };

  const handleChatHistory = () => {
    dispatch(chatHistory(true));
  };

  const handleSettings = () => {
    dispatch(settings(true));
  };

  const handleDashboard = () => {
    dispatch(dashboard(true));
  };

  return (
    <>
      

      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 , mt:10}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Button
              className={dashboardLayout ? "board" : "btn"}
              onClick={handleDashboard}
            >
              Dashboard
            </Button>
          </Grid>
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Button
              className={chatVisibleLayout ? "board" : "btn"}
              onClick={handleChat}
            >
              Chat
            </Button>
          </Grid>
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Button
              className={chatHistoryLayout ? "board" : "btn"}
              onClick={handleChatHistory}
            >
              Chat History
            </Button>
          </Grid>
        </Grid>

        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Button
              className={settingsLayout ? "board" : "btn"}
              onClick={handleSettings}
            >
              Settings
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BoardContent;
