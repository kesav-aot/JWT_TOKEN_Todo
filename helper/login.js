const login = (req, res) => {
    const { username, password } = req.body;
    const array_index = req.array_index
    const token = jwt.sign({username : username , id : data[array_index].id  }, secret_key )
    res.json({token})
  
};
module.exports = { login };