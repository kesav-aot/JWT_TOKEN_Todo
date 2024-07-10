const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const secret_key = 'your_secret_key'; // Replace with your secret key
const users = [];
const todo = {};

const uuidToNumber = () => {
    const uuid = uuidv4();
    const numericValue = parseInt(uuid.replace(/-/g, ''), 16);
    return (numericValue % 80000) + 1;
};

const register = (req, res) => {
    const { username, password, Fullname, phone, email } = req.body;
    const user = {
        username: username,
        password: password,
        Fullname: Fullname,
        phone: phone,
        email: email,
        id: uuidToNumber()
    };
    users.push(user);
    const token = jwt.sign({ username : username, id: user.id }, secret_key);
    res.json({ token });
};

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username: username, id: user.id }, secret_key);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};


const adddata = (req, res) => {
    const name = req.body.name;
    const decode = req.decode;
    console.log(decode);

    if (todo.hasOwnProperty(decode.id)) {
        todo[decode.id].push({ id: uuidToNumber(), task: name });
        res.json({ todo: todo[decode.id] });
    } else {
        todo[decode.id] = [{ id: uuidToNumber(), task: name }];
        res.json({ todo: todo[decode.id] });
    }
};

const data_value = (req, res) => {
    const decode = req.decode;
    console.log(decode);
    if (todo.hasOwnProperty(decode.id)) {
        res.json(todo[decode.id]);
    } else {
        res.json({ todo: [] });
    }
};

module.exports = { register, login,  adddata, data_value };
