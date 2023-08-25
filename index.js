const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const usersroutes = require("./Routes/users.routes");

const PORT = process.env.PORT || 3059;
const app = express();

app.use(cors());
app.use(express.json()); //very important
app.use(express.urlencoded({ extended: true })); //very important

app.use("/users", usersroutes);

app.listen(PORT, () => {
  connection();
  console.log("server started", PORT);
});
