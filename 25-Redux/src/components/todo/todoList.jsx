import React from 'react';
import {connect} from 'react-redux';

import TodoItem from './todoItem';

const TodoList = (props) =>{
    return (
        <div>
            { props.todos.map(todo =>
              <TodoItem key={todo} todoName ={todo}/>
              )
            }
        </div>

    );
}

const mapsStateToProps = state => ({
    todos: state.todoAction.todos,
    showTodos:state.todoAction.showTodos
})

export default connect(mapsStateToProps)(TodoList);