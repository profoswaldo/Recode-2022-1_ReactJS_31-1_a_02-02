import React from 'react';


const TodoItem = (props) =>{
    return (
        <div>
            {props.todoName}    
            <br/>
            <br/>
        </div>
    );
}

export default TodoItem;