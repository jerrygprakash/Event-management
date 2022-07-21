const exp = require('express');
const mys = require('mysql');
const app = exp();

const cors = require('cors');
const { response } = require('express');
app.use(cors());
app.use(exp.json());

const c = mys.createConnection({
    host : "localhost",
    user : "root",
    password : "jerrygj",
    database : "TNEB"
});

c.connect(function(err){
    if(err){console.log(error);}
    else{console.log('ok');}
});


app.post("/login",(request,response)=>{
    
    const username2 = request.body.username;
    const password2 = request.body.password;

    c.query("select username,password,role from login where username = ?", [username2], function(error,rows){

        if(error){
            const s = {status : 'error'};
            response.send(s);  
        }
        else{
            const username1 = rows[0].username;
            const password1 = rows[0].password;
            const role1 = rows[0].role;


            if(username2 == username1 && password2 == password1){
                if(role1 == '1'){
                    const s = {status : 'pass', role : 'admin'};
                    response.send(s);  
                }
                else if(role1 == '2'){
                    const s = {status : 'pass', role : 'staff'};
                    response.send(s);   
                }
            }
            else{
                const s = {status : 'error'};
                response.send(s);   
            }
        }

        // if(error){
        //     const s = {status : 'error'};
        //     response.send(s);
        // }
        // else{
        //     const s = {status : 'pass', data : rows};
        //     response.send(s);
        // }
    });

});

app.listen(3000);