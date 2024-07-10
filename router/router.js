const router = require('express').Router();
const {register,login,adddata,data_value}=require('../helper/register')

const {authenticateToken}=require('../middleware/Authenticate')


    router.post("/register", register);
    router.post("/login", login);
    router.post("/adddata",authenticateToken,adddata);
    router.get("/data_value",authenticateToken,data_value);
    router.get("/protected", authenticateToken, (req, res) => {
    res.send(`Hello ${req.decode.username}`);
});

module.exports = router;


