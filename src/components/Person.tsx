import React, {useState} from 'react'
import styled from 'styled-components'
import { ItemContainer } from './PersonList'

export type Person = {
  name: string
  id: number
}

export type Role = {
    isSpy: boolean,
    roleName: string
}

interface PropTypes {
  name: Person['name']
    onChangeName: (newName: string) => void
}

const Picture = styled.img`
  width: 0.7em;
  height: 0.7em;
  border-radius: 0.7em;
`
const NameDisplay = styled.p`
  font-size: 0.2em;
  margin: 0;
`
const NameInput = styled.input`
  font-size: 1rem;
  margin: 0;
`
const ConfirmButton = styled.p`
    font-size: 0.1em;
`

const Person = ({ name, onChangeName }: PropTypes) => {
    const [editing, setEditing] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(name);

    return (
        <ItemContainer onClick={() => {
            !editing && setEditing(true)
        }}>
            <Picture src="https://api.tronalddump.io/random/meme" />
            {editing ?
                <>
                <NameInput value={newName} onChange={({ target }) => setNewName(target.value)} />
                    <ConfirmButton onClick={() => {
                        onChangeName(newName)
                        setEditing(false)
                    }}>OK</ConfirmButton>
                </> :
                <NameDisplay>{name}</NameDisplay>}
        </ItemContainer>
    )
}

export default Person
