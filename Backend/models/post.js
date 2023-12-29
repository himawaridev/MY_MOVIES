const mongoose = require('mongoose');   // 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPostSchema = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost