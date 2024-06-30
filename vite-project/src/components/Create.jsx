import React, { useState } from "react";
import axios from "axios";

function Create({ addTodo }) {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                console.log(result);
                addTodo(task); // Add the new task to the todo list
                setTask(''); // Clear the input field
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="create_form">  {/* Ensure this class name matches your CSS */}
            <input 
                type="text" 
                placeholder="Enter Task" 
                onChange={(e) => setTask(e.target.value)} 
                value={task}
            />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
