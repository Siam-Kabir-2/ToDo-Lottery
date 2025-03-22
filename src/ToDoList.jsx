import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {

    let [ToDos, setToDos] = useState([{ task: "Sample Task", id: uuidv4() ,isDone:false}]);
    let [newToDo, setNewToDo] = useState("");

    let updateNewToDo = (event) => {
        setNewToDo(event.target.value);
    }
    let updateToDos = () => {
        setToDos((prevToDos) => {
            return [...prevToDos, { task: newToDo, id: uuidv4() ,isDone:false}]
        });
        console.log("Adding to ToDos!");
        setNewToDo("");

    }
    let deleteToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((todos) => (todos.id != id)));
    }

    let uppercaseAll = () => {
        setToDos((prevToDos) => prevToDos.map((todo) => { return { ...todo, task: todo.task.toUpperCase() } }));
    }
    let upperCaseOne = (id) => {
        setToDos((prevToDos) => prevToDos.map((todo) => { if(todo.id===id) {return { ...todo, task: todo.task.toUpperCase() }}
    else {return todo }}));
    }
    let markDoneAll = () => {
        setToDos((prevToDos) => prevToDos.map((todo) => { return { ...todo, isDone:true } }));
    }
    let markDone=(id)=>{
        setToDos((prevToDos) => prevToDos.map((todo) => { if(todo.id===id) {return { ...todo, isDone:true }}
    else {return todo }}));
    }

    return (
        <div>
            <input type="text" value={newToDo} placeholder="Add New Task" onChange={updateNewToDo} />
            <br />
            <button onClick={updateToDos}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Tasks ToDo</h4>
            <hr />
            <ul>
                {
                    ToDos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone?{textDecoration:"line-through red"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button>
                            <button onClick={()=>markDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }

            </ul>
            <button onClick={uppercaseAll}>UppercaseAll</button>
            <button onClick={markDoneAll}>MarkAsDoneAll</button>
        </div>
    )
}