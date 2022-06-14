/* EXPRESS JS */
import express from "express";
import bodyParser from "body-parser";
import main from "./routes/main.js";
import posts from "./routes/posts.js";
import users from "./routes/users.js";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import expressLayouts from "express-ejs-layouts";
import { generateDate } from "./helpers/generetaDate.js";
import session from "express-session"
import MongoStore  from "connect-mongo"
await mongoose.connect("mongodb://127.0.0.1/nodeblog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const app = express();
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/nodeblog' })
}))

app.use(express.static("public")); // express middleware ucun

// Flash -middleware

app.use((req,res,next)=>{
    res.locals.sessionFlash = req.session.sessionFlash
    delete req.session.sessionFlash
    next()
})

app.use(expressLayouts);

app.set("layout", "./layouts/index");
app.set("view engine", "ejs");
app.locals.generateDate = generateDate;
app.use(fileUpload());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/", main);
app.use("/posts", posts);
app.use("/users", users);

app.listen(3000);
