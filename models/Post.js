import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: {type:String,require:true},
  content: {type:String,require:true},
  date : {type:Date,default:Date.now}
});
export const myModal =  mongoose.model('Post', BlogPost);

