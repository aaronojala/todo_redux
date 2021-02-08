import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/actions';
import Result from './Result';

const Results = ({ items, updateItem }) => (
    <ul>
        {items.map(item => (
            <Result key={ item.id } {...item} onClick={() => updateItem(item.id)}/>
        ))}
    </ul>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
