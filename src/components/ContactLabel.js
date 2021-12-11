import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"

const labelStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: "400px",
  height: 'auto',
  margin: '0px',
  padding: '5px 20px',
  background: '#fff',
  border: '1px solid grey',
  borderRadius: '5px',
  marginBottom: '3px',
}

const deleteBtn = {
  backgroundColor: "#f44336",
  border: "none",
  color: "white",
  fontSize: "15px",
  padding: "10px",
  borderRadius: "5px"
}

const deleteBtnDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}

const ContactLabel = ({ person, deleteContact }) => {
  return (
    <div style={labelStyle} className="contact-label">
      <div>
        <h3 style={{ marginBottom: '10px', marginTop: "5px" }}>{person.name}</h3>
        <BsFillTelephoneFill style={{fontSize: "12px", marginRight: "3px"}} />
        <p style={{display: "inline"}}> {person.number}</p>
      </div>
      <div style={deleteBtnDiv}>
        <button style={deleteBtn} onClick={() => deleteContact(person.name)}>delete</button>
      </div>
      
    </div>
  )
}

export default ContactLabel
