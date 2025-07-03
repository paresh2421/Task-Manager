const UserSchema = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const bcryptjs = require('bcryptjs');


const register = async(req, res) => {
    const user = await UserSchema.create({ ...req.body });
    // console.log(user);
    res.status(StatusCodes.CREATED).json({ user: {username: user.username} });
}

const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {

    }
    const user = await UserSchema.findOne({email})
    // console.log(user)
    res.status(StatusCodes.OK).json({ user: user.username });
}
module.exports = {register, login}