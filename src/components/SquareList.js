import React from 'react'

export const SquareList = ({ squares, handleSquareHover, currentMode }) => {
  return (
    <>{squares?.length ? (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${currentMode}, 50px)` }}>
        {squares?.map(squareArr => (
          squareArr.map((square) => (
            <div
              className='square'
              key={square.id}
              style={{ backgroundColor: square.color }}
              onMouseEnter={() => handleSquareHover(square.id, square.rowIndex, square.colIndex)}
            />
          ))
        ))}
      </div>
    ) : (
      <p>Please select an app mode to start</p>
    )}
    </>
  )
}
