import './styles/App.css';
import TodoItems from './components/TodoItems';
import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getAllTodo,updateTodo } from './utils/HandleApis';

function App() {
  const [todo,setTodo] = useState([])
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");

useEffect(()=>{
  getAllTodo(setTodo);
},[]);

const UpdateMode = (_id,text) => {
setIsUpdating(true);
setText(text);
setTodoId(_id);
}

  return (
    <div className="App">
      <div className="entry">
      <div className="textEntry">
      <label htmlFor="textInput">
      Add Items
      </label>
      <input type="text" name="" id="textInput" 
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div 
      className="btn" 
      onClick={isUpdating ? () => updateTodo(todoId,text,setTodo,setText,setIsUpdating):
      () => addTodo(text,setTodo,setText)}>
        {isUpdating ? "Update":"Add Todos"}
        {console.log(isUpdating)}
      </div>
      </div>

      <div className="items">
    
        <div className="item">
          Tasks
        <div className="invisibleA">
          
        </div>
        {todo.map((item)=>
        <TodoItems key={item._id} text={item.text} 
        UpdateMode={()=> UpdateMode(item._id,item.text)}
        DeleteMode={() => deleteTodo(item._id,setTodo)}/>
        )}
        </div>
        <div className="done" >
          Done
          <div className="invisibleB">
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
