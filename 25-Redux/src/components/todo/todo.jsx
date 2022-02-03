import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoForm from './todoForm';
import TodoList from './todoList';
import {addTodo} from '../../actions/todoAction';


class Todo extends Component {

    state = {
        valueName: ''
    }


    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    submitHandler = event => {

        if(this.state.valueName !== ''){
            this.props.addTodo(this.state.valueName);
            this.setState({
                valueName:''
            })
            event.preventDefault();
        }
        
    }

    changeHandler = event => {

        
        this.setState({
            valueName:event.target.value
        })
    }

    render() {
        return (
            <div>
                <TodoForm valueName={this.state.valueName} submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
                <br />
                <TodoList />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({addTodo},dispatch);

export default connect(null,mapDispatchToProps)(Todo);