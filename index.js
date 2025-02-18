const express = require('express');

const app = express();

app.use(express.json());



const dburi = "";

app.listen(3000, ()=>{
    console.log('Server is running on PORT 3000');
})


app.get("/", (req, res)=>{
    const data = req.body;
    res.send("<h1>Welcome to user Management server</h1><br><p>This server is meant for managing basic user managing features like.")
})

app.post("/createAccount", (req, res)=>{
   const user = req.data;
   console.log(user);
   res.status(201).send("User Create Successfully");
})

app.post("/login", (req, res)=>{
    const user = req.body;
    console.log(user);
    res.status(200).send("User Logged In Successfully");
})