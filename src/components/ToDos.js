import React, { Component } from 'react'

import ToDo from './ToDo'

class ToDos extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            newTodo:'',
            toDos: props.tasks
        }
    }

    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

        createToDo = e => {
            this.setState(currentState => ({
                newTodo: '',
                toDos: [...currentState.newTodo,
                { task: currentState.newTodo, done: false}]
            }))
        }

  render () {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.createToDo} className="new-todo">create</button>
        {this.state.toDos.map((task, idx) => 
          <ToDo task={task} key={idx} />
        )}
      </div>
    )
  }
}

export default ToDos;