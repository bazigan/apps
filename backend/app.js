require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Backend!" });
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});