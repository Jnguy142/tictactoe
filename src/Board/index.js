import React, { Component } from 'react';
import Square from './Square/index.js';
import styles from './styles.css';

class Board extends Component {
    constructor(){
        super();
        this.state = {
            player: 1,
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
        if(this.state.player === 1) {
            e.target.innerHTML = 'O';
            this.setState({ player: 2 });
        } else {
            e.target.innerHTML = 'X';
            this.setState({ player: 1 });
        }
    }

    render(){
        return(
        <div>
            <h1>PLAYER {this.state.player}</h1>
            <div className="board">
                {this.generateBoard(9)}
            </div>
        </div>);
    }
}

export default Board;