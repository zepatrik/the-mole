import React, { useState } from 'react'
import PersonList from './components/PersonList'
import { Person } from './components/Person'
import StartButton from "./components/StartButton";

const App: React.FC = () => {
  const [persons, setPersons] = useState<Array<Person>>([])

  return (
      <>
    <PersonList
      persons={persons}
      onAddPerson={() => {
        setPersons([...persons, { name: 'undefined', id: persons.length }])
      }}
      onChangeNameById={(id: number) => (name: string) => {
        const newArray = [...persons]
        newArray[id] = {...newArray[id], name}
        setPersons(newArray)
      }}
    />
    <StartButton onClickHandler={console.log} />
    </>
  )
}

export default App
