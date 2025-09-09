import express from 'express'
import { getAllUsers } from '../controler/usersControler.js';
import { addUser } from '../controler/usersControler.js';

export const userRout = express.Router();

userRout.get("/login", getAllUsers);
userRout.post("/addUser",addUser)