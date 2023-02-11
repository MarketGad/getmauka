import mongoose from "mongoose";
const {Schema,model} = mongoose;

const PostSchema = new Schema({
  title:String,
  summary:String,
  content:String,
  cover:String,
  location: {
    type: String,
    required: true
},
category:{
  type: String,
  required: true
},
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: true,
});


var PostModel = mongoose.model('Post', PostSchema);

export default PostModel;