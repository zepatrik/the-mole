import React from 'react'
import styled from 'styled-components'
import { ItemContainer } from './PersonList'

type PropTypes = {
  onClickHandler: () => void
}

const Button = styled.p`
  font-size: 0.8em;
  margin: 0;
`

const AddButton = ({ onClickHandler }: PropTypes) => (
  <ItemContainer onClick={onClickHandler}>
    <Button>+</Button>
  </ItemContainer>
)

export default AddButton
