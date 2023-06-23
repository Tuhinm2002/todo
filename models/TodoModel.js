const Mongoose = require('mongoose');

const todoschema = new Mongoose.Schema({
    text: {
    type: String,
    required: true
}
})

module.exports = Mongoose.model('Todo',todoschema);