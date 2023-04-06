const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

//mongodb+srv://yjjongy:52401@cluster0.unk2i64.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../filed/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://yjjongy:528401@cluster0.unk2i64.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../filed/build/index.html"));
});
app.get("*", (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../filed/build/index.html"));
});
app.post("/api/test", (요청, 응답) => {
  console.log(요청.body);
  응답.status(200).json({ success: true, text: "안녕하세요" });
});
