const mongoose = require("mongoose")
require('dotenv').config()

const database = process.env.DB
const url = process.env.DB_URL



const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}



const dbConnection = () => {

  mongoose
    .connect(
      url,
      connectionParams
    )
    .then(() => {
      console.log(`Successfully connected to ${database} ! `);
    })
    .catch((error) => {
      console.log(`Failed to connecte  ${database} !`);
      console.error(error);
    });

}



module.exports = dbConnection