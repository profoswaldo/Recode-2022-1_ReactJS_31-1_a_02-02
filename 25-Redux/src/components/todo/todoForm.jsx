import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type="text" name="valueName" onChange={props.changeHandler} value={props.valueName}/>
                <br/> 
                <br/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default TodoForm;