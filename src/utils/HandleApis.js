import axios from "axios";

const baseurl = "http://localhost:5000"

const getAllTodo = (setTodo) =>{
    axios.get(baseurl).then(({data})=>{
        // console.log("data is",data);
        setTodo(data);
    })
}


const addTodo = (text,setTodo,setText) =>{
    axios.post("http://localhost:5000/save",{text}).then((data)=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo);
    })
}

const updateTodo = (todoId,text,setTodo,setText,setIsUpdating) => {
    axios.post("http://localhost:5000/update",{_id:todoId,text}).then((data)=>{
        setText("");
        setIsUpdating(false);
        getAllTodo(setTodo);
    }).catch((err)=>{
        console.log(err);
    })
}

const deleteTodo = (todoId,setTodo) => {
    axios.post("http://localhost:5000/delete",{_id:todoId}).then((data)=>{
        getAllTodo(setTodo);
    }).catch((err)=>{
        console.log(err);
    })
}

export {getAllTodo,addTodo,updateTodo,deleteTodo};