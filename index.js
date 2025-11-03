const express = require('express')
const app = express();
const PORT = 3000;

const db = require("./models");

// Middleware untuk membaca data JSON dan form (POST body)
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false
}));

// Jalankan server di port 3000
app.listen(PORT, () => {
    console.log('Server started on port 3000');
})