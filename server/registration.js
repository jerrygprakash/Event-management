const express = require('express')
const app = express()
const mysql = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');
const connection = require('./registrationdatbase');


//use express static folder
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/registration',(req,res)=> {
    
    
    const d1 = req.body.name;
    const d2 = req.body.mobilenumber;
    

    connection.query('select name,mobilenumber from registration where name=? and mobilenumber=?',[d1,d2],function(error1,result1){
        if(result1.length > 0){
          res.json({ success: 0 })  
        }
        else{

          const a = req.body.name;
          const b = req.body.address;
          const c = req.body.city;
          const d = req.body.mobilenumber;
          const e = req.body.states;
          const f = req.body.zip;
        //   const g = req.body.regclose;

          const classifiedsadd = [a,b,c,d,e,f]
          const sql = "INSERT INTO registration (name,address,city,mobilenumber,state,zip) values(?,?,?,?,?,?)";
          connection.query(sql, classifiedsadd, (err, results) => {  if (err) throw err;
          res.json({ success: 1 }) 
          
          });

        }
    });

    

   


});

app.listen(3002)



































































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