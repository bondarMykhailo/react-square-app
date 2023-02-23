import React from 'react'

export const HoveredList = ({ hoveredSquares }) => {
  return (
    <>
      {hoveredSquares?.length ? (
        <ul className='hovered-list'>
          {hoveredSquares?.map(hovered => (
            <li className='hovered-square' key={hovered?.id}>row:{hovered.rowIndex + 1}, col:{hovered.colIndex + 1}</li>
          ))}
        </ul>
      ) : (
        <p>No squares have been hovered over yet</p>
      )}
    </>

  )
}
