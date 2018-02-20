import React from 'react';
import styles from './styles.css';

let Square = (props) => {
    return(
        <div className="square" onClick={props.clickHandler}></div>
    );
}

export default Square;