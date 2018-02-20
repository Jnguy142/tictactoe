import React, { Component } from 'react';
import Square from './Square/index.js';

class Board extends Component {
    constructor(){
        super();
        this.state = {
            player: 'X',
        }
    }
    generateBoard = (num) => {
        let key = 0;
        let board = [];
        let rowsCols = Math.floor(Math.sqrt(num));
        for(let i = 0; i < rowsCols; i++){
            let row = [];
            for(let j = 0; j < rowsCols; j++) {
                row.push(<Square key={key} clickHandler={this.placePiece}/>);
                key++;
            }
            board.push(<div>{row}</div>);
        }
        return board;
    }

    placePiece = (e) => {
        e.target.innerHTML = 'O';
    }

    render(){
        return(
        <div>
            <h1>PLAYER {this.state.player}</h1>
            {this.generateBoard(9)}
        </div>);
    }
}

export default Board;