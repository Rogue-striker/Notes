const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors');
const Notes = require('./models.js');
const mongoose = require('mongoose');
const url = `mongodb+srv://Rogustriker:a0ayciEWyq8Uuqr5@notes.3pft3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url,{useNewUrlParser:true},()=>{
    console.log("connected...")
})
app.use(express.json())
app.use(cors())
app.post('/Add',(req,res)=>{
    const notes = new Notes({
        u_id:"test_id",
        Name:"test notes",
        Notes:req.body.content,
     })
     notes.save();
    res.status(200).json({sucess:"true"})
    console.log(notes)
})
app.post('/DeleteAll',(req,res)=>{
    Notes.deleteMany({},(error,result)=>{
        if(error){
            console.log(error)
            res.status(400).send("<h2>No Notes</h2>")
        }
        else{
            if(result){
                res.status(200).send("<h2>All are deleted</h2>")
            }
        }
    })
})
app.get('/Notes',(req,res)=>{
     Notes.find({u_id:'test_id'},(error,result)=>{
         if(error){
             res.status(404).send("<h1>Not found</>")
         }
         else{
             if(result){
                res.status(200).json(result)
                console.log(result)
             }
             else{
                 res.status(200).send("No Data")
             }
         }

     })
})
app.listen(port,()=>{
     console.log(`Server is listening on port ${port}`)
})
