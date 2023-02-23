import React from 'react'

export const Select = ({ allModes, handleModeSelect }) => {
  return (
    <select defaultValue={'Pick mode'} className='select' onChange={(e) => handleModeSelect(e.target.value)}>
      <option disabled  value="Pick mode" >Pick mode</option>
      {allModes?.map((mode) => <option key={mode.field} value={mode.field}>{mode.name}</option>)}
    </select>
  )
}
