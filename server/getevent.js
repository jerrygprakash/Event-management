const express = require('express')
const app = express()
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require('./registrationdatbase');


//use express static folder
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/event', (req,res)=>{
    db.query('select * from event',(err,result,field)=> {
        if (err) throw err;
        console.log(res);
        res.send(result);
    })
    
})

app.listen(4001)



































































// const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const mysql = require("mysql2")
 
// const app = express();
 
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());
  
// //create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'jerrygj',
//   database: 'TNEB'
// });
 
// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
 
// //add new user
// app.post('/store-data',(req, res) => {

//   let eventname = req.body.eventname;
//   let date = req.body.date;

//   console.log(eventname);
//   console.log(date);
  

//  const data = [ req.body.eventname,req.body.date,req.body.time,req.body.venue,req.body.duration,req.body.regstart,req.body.regclose]
//  const sql = "INSERT INTO event (eventname,date,time,venue,duration,regstart,regclose) values(?,?,?,?,?,?,?)";
//    conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   })
// });
 
// app.listen(3002, () => {
//   console.log("Server running successfully on 3002");
// });