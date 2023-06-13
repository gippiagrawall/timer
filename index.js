const express = require('express')
const app = express()
const mongoose = require('mongoose')
const studyHour = require('./db/data')
const bp = require('body-parser') 
app.set('view engine',"ejs")
app.use(bp.urlencoded({
    extended : false
}))
mongoose.connect('mongodb+srv://geepesh_agrawal:geepeshagrawal@cluster0.n8viw.mongodb.net/iitjee?retryWrites=true&w=majority')
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/data',(req,res)=>{

})
app.post('/',(req,res)=>{
    console.log(req.body.hr)
    console.log(req.body.min)
    console.log(req.body.sec)
    console.log(req.body.ns)
    let Date = req.body.date
    let Total_study_hours = `${req.body.hr}hr ${req.body.min}min ${req.body.sec}sec ${req.body.ns}ms`
    let obj = {
        Total_study_hours : Total_study_hours,
        Date : Date
    }
    const data = new studyHour(obj)
 data.save().then(()=>{
        console.log('data saved')
    })
    res.render("Welcome",{
        hr : req.body.hr,
        min : req.body.min,
        sec : req.body.sec
    })
})

app.listen(9000,()=>{
    console.log('====================================');
    console.log("active at port : 9000");
    console.log('====================================');
})

