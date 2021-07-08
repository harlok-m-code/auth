const express = require('express');
const cors = require('cors');
const pool = require('./db'); 

const PORT = 5000;

const app = express();

app.use(cors())
app.use(express.json())

app.post("/registr", async (req,res)=> {
    try {
        const { email, password } = req.body;
        
        const auth = await pool.query("INSERT INTO users (email, password) VALUES($1,$2) RETURNING *",
        [email,password]);
        
        res.json(auth.rows[0]);
    } catch (error) {
        console.log(error);
    }
})



app.get("/registr",async (req,res)=> {
    try {
        
        const allTodos = await pool.query("SELECT * FROM users");
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(5000,()=> {
    console.log(`server started ${PORT} port`)
});