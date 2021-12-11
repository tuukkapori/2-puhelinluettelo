import React from 'react'

const inputDivStyle = {
  width: "50%",
  maxWidth: "350px"
}

const inputStyle = {
  width: "100%"
}

const PersonForm = ({
  addName,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
      <form onSubmit={addName}>
        <div style={inputDivStyle}>
          <label>name:</label><br/>
          <input style={inputStyle} id="nameInput" value={newName} onChange={handleNameChange} />
        </div>
        <div style={inputDivStyle}>
          <label>number:</label><br/>
          <input style={inputStyle}
            id="numberInput"
            value={newNumber}
            onChange={handleNumberChange}
            />
          </div>
    
        <button type="submit" className="add-btn">add</button>
      </form>
  )
}

export default PersonForm
