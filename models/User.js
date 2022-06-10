import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

const UserPost = new Schema({
  email: {type:String,required:true,unique:true},
  username: {type:String,required:true,unique:true},
  password : {type:String,required:true},
  
});
export const User =  mongoose.model('User', UserPost);
