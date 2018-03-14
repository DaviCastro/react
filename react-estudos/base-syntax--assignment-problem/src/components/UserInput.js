import React from 'react';

const userInput = (props)=> {

    const styles={
        textAlign: 'center',
        backgroundColor: 'gray',
    };

    return (
        <input type="text" style={styles} onChange={props.change}  value={props.text}/>
    );
}

export default userInput;