import {ADD_TODO} from '../actions/actionTypes';

const initialState ={
    todos :['Tarefa 1', 'Tarefa 2'],
    showTodos: false
}

export const TodoReducer = (state= initialState, action) =>{

    switch (action.type){
        case ADD_TODO:
            return { 
                ...state, 
                todos: state.todos.concat(action.payload),
                showTodos: true
            }
         default:
             return state;   

    }
}
