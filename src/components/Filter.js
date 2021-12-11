import React from 'react'


const divStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
  
      <div style={divStyle}>
        <div>
        <label>filter shown with</label><br/>
        <input
            value={newFilter}
            onChange={handleFilterChange}
            placeholder={'Search..'}
          />
          </div>
      </div>
    
  )
}

export default Filter
