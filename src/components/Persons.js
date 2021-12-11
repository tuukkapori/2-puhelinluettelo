import React from 'react'
import ContactLabel from './ContactLabel'

const liStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const ulStyle = {
  listStyle: "none",
  width: "100%"
}

const divStyle = {
  overflow: "scroll",
  width: "100%",
  padding: "10px"
}
const Persons = ({ persons, newFilter, deleteContact }) => {
  return (
    <div style={divStyle}>
    
      <ul style={ulStyle}>
        {persons
          .filter((person) => {
            if (newFilter === '') {
              return person
            } else {
              return person.name.toLowerCase().includes(newFilter.toLowerCase())
            }
          })
          .map((person) => (
            <li key={person.name} style={liStyle}>
              <ContactLabel person={person} deleteContact={deleteContact}/>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Persons
