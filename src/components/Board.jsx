import React from 'react'
import Box from './Box'
import './Board.css'

const Board = ({board, onClick}) => {
  return (
    <div className='board'>
        {board.map((box, idx) => {
            return <Box value={box} onClick={() => box===null && onClick(idx)}/>
        })}
    </div>
  )
}

export default Board