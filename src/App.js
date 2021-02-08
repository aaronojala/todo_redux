import React from 'react';
import { connect } from 'react-redux';
import { addItems } from './actions/actions';
import axios from 'axios';

const App = ({ dispatch }) => {
  
    let input, item;

    const submitHandler = (e) => {
      axios.post('http://localhost:3001/todos');
      
        e.preventDefault();
        if (!input.value.trim()) { return }
        item = {
            text: input.value
        }
        dispatch(addItems(item));
        input.value = '';
    };

    return (
        <div>
            <input type="text" name="name" ref={node => (input = node)} />
            <button onClick={submitHandler}>Add Note</button> 
        </div>
    )
}

export default connect()(App)
