import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChatBot from "../chat_Bot/View/ChatBot";
import BoardContent from "../content/views/BoardContent";
import { Button } from "@mui/material";
import ChatHistory from "../chat_Bot/View/ChatHistory";
import Settings from "../chat_Bot/View/Settings";
import DashBoard from "../chat_Bot/View/DashBoard";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "	#eeeeee",
  ...theme.typography.body2,
  // backgroundColor:"red",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "10px",
}));

export default function MainDashboard() {
  
  //**********************Redux state***************************//

  const getData = useSelector((state) => {
    return {
      dashboard: state.dashboardReducer.dashboard,
      chatVisible: state.dashboardReducer.chat,
      settings: state.dashboardReducer.settings,
      chatHistory: state.dashboardReducer.chatHistory,
    };
  });

  const { dashboard, chatVisible, settings, chatHistory } = getData;

  return (
    <>
      <Box sx={{ flexGrow: 1, ml: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="info"
              sx={{ flexGrow: 1, ml: 2, mt: 1 }}
              startIcon={<LogoutIcon/>}

            >
              Logout
            </Button>
            <Item style={{ height: "80vh",  }}>
              <BoardContent />
            </Item>
            <Button
              variant="contained"
              color="warning"
              sx={{ flexGrow: 1, ml: 2 }}
              startIcon={<ExitToAppIcon/>}

            >
              signout
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Item style={{ height: "87vh", marginTop: "50px" }}>
              {chatVisible && <ChatBot />}
              {chatHistory && <ChatHistory />}
              {settings && <Settings />}
              {dashboard && <DashBoard />}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
