const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://arundatabase:tph81kjHekMOJ0zZ@cluster0.nwkoe.mongodb.net/temp4")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}