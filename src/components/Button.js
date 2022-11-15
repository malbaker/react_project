import React from 'react';

function Button(props) {
    return (
        
        <button color={props.color}> {props.text} </button>
        
    )
}

export default Button