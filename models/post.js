const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PostSchema = new Schema({
  name : {
    type: String,
    required: [true, 'name is required!']
  },
  info: {
    title: String,
    detail: String
  },
  location: String,
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;
