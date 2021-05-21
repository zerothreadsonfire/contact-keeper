const express = require("express");

const app = express();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));


app.listen(5000, ()=>{
    console.log("listening on port 5000");
})