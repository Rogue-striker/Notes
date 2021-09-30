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
app.use(cors())
app.get('/',(req,res)=>{
    const notes = new Notes({
        Name:"notes",
        Notes:"lorem kdajosik kjflakf asdtg",
     })
     notes.save();
    res.status(200).json({sucess:"true"})
    console.log(notes)
})
app.get('/find',(req,res)=>{
     Notes.find({Name:"notes"},(error,result)=>{
         if(error){
             res.status(404).send("<h1>Not found</>")
         }
         else{
             if(result){
                res.status(200).json(result)
                console.log(result);
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
