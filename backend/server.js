const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'signup'

})

app.post('/login',(req,res) => {
    const sql = "SELECT * FROM login WHERE email=? AND password=?";
  

    db.query(sql,[ req.body.email,req.body.password],(err,data) =>{
        if(err){
            return res.json("Login failed");
        }
        if(data.length > 0){
            return res.json("Success");
        }else{
            return res.json('No record');
        }
    })
})
app.listen(8081,() =>{
    console.log('Listening');
})