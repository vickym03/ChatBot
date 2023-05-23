const express = require("express")
const cors = require("cors")
const dbConnection = require("./database/Config")
const { ChatDataRouter } = require("./routes/index")
const app = express();


/* ---- use express ---- */
app.use(express.json())


/* ---- cors ---- */
app.use(cors())


/* ---- db connections ---- */
dbConnection()



/* ---- routes ---- */
app.use("/",ChatDataRouter)


module.exports = app;