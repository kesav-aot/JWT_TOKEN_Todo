const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const router = require('./router/router');
app.use('/router', router);

// Replace with your secret key




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

