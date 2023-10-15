import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.js"

// const express = require("express");
// const bodyParser = require("body-parser")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/user', UserRouter);

app.get('/',(req,res)=>{
    res.end("hello")
})  

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
