import React, { Component } from 'react';
import Square from './Square/index.js';

class Board extends Component {
    constructor(){
        super();
    }
    generateBoard = (num) => {
        let board = [];
        let rowsCols = Math.floor(Math.sqrt(num));
        for(let i = 0; i < rowsCols; i++){
            let row = [];
            for(let j = 0; j < rowsCols; j++) {
                row.push(<Square key = {j} />);
            }
            board.push(<div>{row}</div>);
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