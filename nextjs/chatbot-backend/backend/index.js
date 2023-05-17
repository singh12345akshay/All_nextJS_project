const connectToMongoDB = require("./db");
const express = require("express");

(async()=>{
  await connectToMongoDB();
})()
const app = express();
const port = 3005;
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.listen(port, () => {
  console.log(`Chat-Bot app listening at http://localhost:${port}`);
});
