import express from 'express'
const router = express.Router()
import {myModal} from "../models/Post.js"


router.get('/', (req, res) => {
  console.log(req.session);
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





export default router;