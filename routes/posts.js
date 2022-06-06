import express from 'express'
import {myModal} from "../models/Post.js"
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('pages/addPost');
  });


router.post('/test', (req, res) => {
    myModal.create(req.body)
    res.redirect("/")
  });

export default router;