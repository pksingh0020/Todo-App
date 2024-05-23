const  mongoose = require("mongoose");



mongoose.connect("mongodb+srv://adis:Adispass@cluster0.tzcs3vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const todosSchema = mongoose.Schema({
    title: String,
    description: String ,
    completed: Boolean
})

const todo = mongoose.model('todos',todosSchema);
module.exports = {
    todo: todo
}


