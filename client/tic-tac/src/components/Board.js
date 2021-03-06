import React, {useState} from 'react';
import Square from './Square';

function Board () {

    const [board, SetBoard] = useState(['','','','','','','','','']); //each of my elements represents a square
    const [player, setPlayer] = useState('X');
    const [turn, setTurn] = useState('X');

    const chooseSquare = async (square) => {
        if (turn === player && board[square] === ''){
            setTurn(player === 'X' ? 'O' : 'X'); //alternating the turn
        
            await 
            SetBoard(
                board.map((val, idx) => {
                if (idx === square && val === ''){
                    return player;
                }
                return val;
            }))
        }
    };
    
    return (
        <div className='board'>
            <div className='row'>
                <Square chooseSquare={() => {
                    chooseSquare(0);
                }} val={board[0]} /> //*  value will be passed based on the whatever value currently exist on board array*/
                <Square chooseSquare={() => {
                    chooseSquare(1);
                }} val={board[1]} />
                <Square chooseSquare={() => {
                    chooseSquare(2);
                }}val={board[2]} />
            </div>
            <div className='row'>
                <Square chooseSquare={() => {
                    chooseSquare(3);
                }}val={board[3]} />
                <Square chooseSquare={() => {
                    chooseSquare(4);
                }}val={board[4]} />
                <Square chooseSquare={() => {
                    chooseSquare(5);
                }}val={board[5]} />
            </div>
            <div className='row'>
                <Square chooseSquare={() => {
                    chooseSquare(6);
                }}val={board[6]} />
                <Square chooseSquare={() => {
                    chooseSquare(7);
                }}val={board[7]} />
                <Square chooseSquare={() => {
                    chooseSquare(8);
                }}val={board[8]} />
            </div>
        </div>

    )
}

export default Board