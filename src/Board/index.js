import React, { Component } from 'react';
import Square from './Square/index.js';

class Board extends Component {
    constructor(){
        super();
    }
    generateBoard = (num) => {
        let board = [];
        for(let i = 0; i < num; i++) {
            board.push(<Square key = {i} />);
        }
        return board;
    }
    render(){
        return(
        <div>
            {this.generateBoard(9)}
        </div>);
    }
}

export default Board;