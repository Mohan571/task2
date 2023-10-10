const express=require('express');
const app=express()
 
const bodyParser=require('body-parser')
const router=require('./routes')

app.use(router)


app.use(bodyParser.urlencoded({extended:false}))




app.listen(3000,()=>{
    console.log("Server is running");
})
