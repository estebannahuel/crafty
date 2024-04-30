const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname,'public' )));

app.get('/' ,(req,res) => res.sendFile(path.join(__dirname, 'views' , 'home.html')));

app.get('/login' ,(req,res) => res.sendFile(path.join(__dirname, 'views' , 'login.html')));

app.get('/register' ,(req,res) => res.sendFile(path.join(__dirname, 'views' , 'register.html')));

app.get('/header' ,(req,res) => res.sendFile(path.join(__dirname, 'views', 'partials' , 'header.html')));





app.listen(PORT , () => console.log(`servidor levantado http://localhost:${PORT}`) )