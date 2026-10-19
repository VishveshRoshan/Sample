import express from "express";
const app=express();

const PORT=process.env.PORT||3000;

//Home page
app.get("/",(req,res)=>{
    res.send(`
        <h1>Welcome to my node js application</h1>
        <p>lorem ipsum</p>
        `);
});

//API route
app.get("/api",(req,res)=>{
    res.json({
        message:"Node app is workin'",
        platform:"Render cloud",
        status:"Success"
    });
});

//Health check
app.get("/healthCheck",(req,res)=>{
    res.json({
        status:"Healthy"
    })
});

//Server
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running on port ${PORT}`);
});