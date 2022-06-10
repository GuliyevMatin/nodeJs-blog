import express from 'express';
const router = express.Router();
import {User} from "../models/User.js"

router.get('/register', (req, res) => { 
    res.render('pages/register');
});

router.post('/register', (req, res) => { 
    User.create({
        ...req.body,
        
    })
    res.redirect('/')
});

export default router;

