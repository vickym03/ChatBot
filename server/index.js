const http = require("http");
const app = require("./App");
const server = http.createServer(app);
require("dotenv").config()

const port =process.env.PORT;




// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});



