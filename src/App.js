import React from 'react';
import { connect } from 'react-redux';
import { addItems } from './actions/actions';

const App = ({ dispatch }) => {
    let input, item;

    const handleSubmit = (e) => {
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
            <button onClick={handleSubmit}>Add Note</button> 
        </div>
    )
}

export default connect()(App)
