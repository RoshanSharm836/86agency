const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const usersroutes = require("./Routes/users.routes");
const postsroutes = require("./Routes/post.routes");
const analytics = require("./Routes/analytics.routes");

const PORT = process.env.PORT || 3059;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersroutes);
app.use("/posts", postsroutes);
app.use("/analytics", analytics);

app.listen(PORT, () => {
  connection();
  console.log("server started", PORT);
});
