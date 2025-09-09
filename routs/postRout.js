import express from 'express'
import { addPost, getAllPostes ,getPostById} from '../controler/postController.js'
// import {getPostById} from '../DAL/postDAL.js'

export const postRout = express.Router();

postRout.get('/postes',getAllPostes);
postRout.get('/:id',getPostById)
postRout.post('/add',addPost)