const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://arundatabase1234:Fqod34jDsZhh0XDN@cluster0.nwkoe.mongodb.net/Todo")
const todoSchema = mongoose.schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}