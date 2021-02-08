import React from 'react';
import PropTypes from 'prop-types'

const Result = ({onClick, completed, text}) => (
    <li className={'result'}
        onClick={onClick}
        style={{
            textDecoration: completed ?
            'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Result.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Result;