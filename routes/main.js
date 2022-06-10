import express from 'express'
const router = express.Router()
import {myModal} from "../models/Post.js"


router.get('/', (req, res) => {
    res.render('pages/home');
    
});

router.get("/about",(req,res)=>{
    res.render("pages/about")
})
router.get('/about', (req, res) => {
  res.render('pages/about');
});
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});
router.get('/blog', (req, res) => {
    myModal.find({},(err,data)=>{
        res.render('pages/blog',{"data":data});
    })

});


router.get('/login', (req, res) => {
  res.render('pages/login');
});



export default router;