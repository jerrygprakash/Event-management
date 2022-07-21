const express = require('express')
const app = express()
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const connection = require('./eventdatbase');


//use express static folder  
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/indexevent',(req,res)=> {
    
    
    const d1 = req.body.venue;
    const d2 = req.body.date;
    

    connection.query('select venue,date from event where venue=? and date=?',[d1,d2],function(error1,result1){
        if(result1.length > 0){
          res.json({ success: 0 })  
        }
        else{

          const a = req.body.eventname;
          const b = req.body.date;
          const c = req.body.time;
          const d = req.body.venue;
          const e = req.body.duration;
          const f = req.body.regstart;
          const g = req.body.regclose;

          const classifiedsadd = [a,b,c,d,e,f,g]
          const sql = "INSERT INTO event (eventname,date,time,venue,duration,regstart,regclose) values(?,?,?,?,?,?,?)";
          connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
          res.json({ success: 1 }) 
          
          });

        }
    });

    

   


});

app.listen(3003)



































































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