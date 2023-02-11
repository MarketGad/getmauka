import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true},
});

var UserModel = mongoose.model('User', UserSchema);

export default UserModel;
