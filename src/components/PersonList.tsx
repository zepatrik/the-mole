import React, {useState} from 'react'
import PersonDisplay, { Person } from './Person'
import styled from 'styled-components'
import AddButton from './AddButton'

type PropTypes = {
  persons: Array<Person>
  onAddPerson: () => void
    onChangeNameById: (id: number) => (name: string) => void
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
`
const Title = styled.p`
  font-size: 3rem;
`
export const ItemContainer = styled.div`
  font-size: 12rem;
  width: 12rem;
  height: 12rem;
  border-radius: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: green;
  cursor: pointer;
  margin: 0.05em;
`

const PersonList = ({ persons, onAddPerson, onChangeNameById }: PropTypes) => {
                return (
        <>
            <Title>People Playing</Title>
            <Container>
                {persons.map(({ name, id }) => (
                    <PersonDisplay name={name} key={id} onChangeName={onChangeNameById(id)} />
                ))}
                <AddButton onClickHandler={onAddPerson} />
            </Container>
        </>
    )
}

export default PersonList
