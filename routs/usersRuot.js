import express from 'express'
import { addUser, getUser, loginUser } from '../controler/usersControler.js';

export const userRout = express.Router();

userRout.post('/add', addUser)
userRout.get('/user/:username', getUser);
userRout.post('/', loginUser)