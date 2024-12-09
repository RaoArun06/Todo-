const express = require('express');
const { createTodo } = require('./type');
const app=express();
app.use(express.json());
app.get('/',function(req,res){
    
})
app.post('/todo',function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload){
        res.status(411).send({
            msg:"invalid inputs"
        })
        return;
    }
})
app.put('/complete',function(req,res){

})
app.listen(3000);