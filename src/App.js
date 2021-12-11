import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import './styles.css'
import CS from './services/ContactService'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const addName = (e) => {
    e.preventDefault()
    const contact = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * 12345)
    }

    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(person => person.name === newName).id
        
        CS.updateContact(id, contact)
          .then(result => {
          setPersons(persons.map(person => person.id !== id? person: {...contact, id: id}))
          console.log('contact updated')
          showNotification(`Updated ${contact.name}`, "success")
        })
        .catch(error => {
          showNotification(`Could not update number ${contact.name}`, "error")
        })
        
        
      }
      setNewName('')
      setNewNumber('')
    } else {
      
      CS.createContact(contact).then(data => {
        setPersons(persons.concat(data))
        setNewName('')
        setNewNumber('')
        showNotification(`Added ${contact.name}`, "success")
      }).catch(error => {
        showNotification(`Could not add${contact.name}`, "error")
      })
    }
  }

  const showNotification = (message, type) => {
    const positive = type === 'error'? false: true
    setNotification({message: message, positive: positive})
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const deleteContact = (name) => {
    if (window.confirm(`Delete ${name}`)) {
      const contactToBeDeleted = persons.find(contact => contact.name === name)
      CS.deleteContact(contactToBeDeleted.id).then(response => {
        showNotification(`${name} deleted successfully`, 'success')
      }).catch(error => {
        showNotification(`${name} was already deleted`, 'error')
      })
      setPersons(persons.filter(contact => contact.name !== name))
    }
    

  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }


  useEffect(() => {
    CS.getAll().then(contacts => {
      setPersons(contacts)
    })
  }, [])

  return (
    <div className="app">
      <h2 className="appname">Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Notification notification={notification} />
      <h2>Numbers</h2>
      <Persons 
      persons={persons} 
      newFilter={newFilter} 
      deleteContact={deleteContact} />
    </div>
  )
}

export default App
