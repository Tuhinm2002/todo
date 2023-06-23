const todomodel = require('../models/TodoModel');

module.exports.getTodo = async (req,res)=>{
    const todo = await todomodel.find()
    res.send(todo); 
}

module.exports.saveTodo = async (req,res) => {
    const text = req.body;

    todomodel.create(text)
    .then((data)=>{
        console.log("Added Successfully");
        console.log(data);
        res.send(data);
    })
}

module.exports.updateTodo = async (req,res)=>{
    const {_id , text} = req.body;

    todomodel.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated successfully"))
    .catch((err)=>console.log(err));
}

module.exports.deleteTodo = async (req,res)=>{
    const {_id} = req.body;

    todomodel.findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err));
}