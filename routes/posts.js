import express from 'express'
import {myModal} from "../models/Post.js"
import path from 'path';
import { fileURLToPath } from 'url';
const router = express.Router()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
router.get('/new', (req, res) => {
    res.render('pages/addPost');
  });

  router.get("/:id",(req,res)=>{
    myModal.findById(req.params.id,(err,data)=>{
        res.render("pages/singleBlog",{"data":data})
    })
});

router.post('/test', (req, res) => {
    let post_image = req.files.post_image;
  
    post_image.mv(path.resolve(__dirname, '../public/img/postImages/'+post_image.name))

    myModal.create({
      ...req.body,
      post_image:'/img/postImages/'+post_image.name
  });
  res.redirect('/')
})

export default router;