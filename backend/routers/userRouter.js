import express from 'express';
import expressAsyncHander from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed',  expressAsyncHander(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

userRouter.post('/signin', expressAsyncHander(async (req, res) => {
    const user = await User.findOne({ email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid user email or password!'})
}))

export default userRouter;