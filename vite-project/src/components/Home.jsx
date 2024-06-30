import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure axios is imported
import Create from './Create';


function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []); // Empty dependency array means this effect runs only once on component mount

    // Function to add a new todo to the list
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h2>Todo List</h2>
            {/* Assuming Create component is correctly implemented */}
            <Create addTodo={addTodo} />
            {
                todos.length === 0 
                ? 
                <div><h2>No Record</h2></div>
                : 
                todos.map((todo, index) => (
                    <div key={index}>
                        {todo}
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
