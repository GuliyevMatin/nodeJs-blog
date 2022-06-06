/* EXPRESS JS */
import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from "body-parser"
import main from "./routes/main.js"
import posts from "./routes/posts.js"
import mongoose from 'mongoose';
await mongoose.connect('mongodb://127.0.0.1/nodeblog');

const app = express();
app.use(express.static("public")) // express middleware ucun 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/",main)
app.use("/posts",posts)




app.listen(3000);