const express = require('express');
const { createTodo, updateTodo } = require('./type');
const app=express();
app.use(express.json());
app.get('/',function(req,res){
    
})
app.post('/todo',function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid inputs",
        })
        return;
    }
})
app.put('/complete',function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"invalid inputs",
        })
        return;
    }
})
app.listen(3000);