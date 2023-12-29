const mongoose = require('mongoose');   // 
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FilmSchema = new Schema({
    name: String,
    description: String,
    link: String,
    image_preview: String,
    categories: [],
    author: String,
    score: Number,
    statical: Number,
    is_shown: Boolean,
    views: Number,
    created_date: Date
});
const Film = mongoose.model('Film', FilmSchema);
module.exports = Film