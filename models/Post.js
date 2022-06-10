import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: {type:String,required:true},
  content: {type:String,required:true},
  date : {type:Date,default:Date.now},
  post_image : {type:String,required:true}
});
export const myModal =  mongoose.model('Post', BlogPost);

