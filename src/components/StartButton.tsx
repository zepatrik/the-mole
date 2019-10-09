import React from 'react'
import styled from 'styled-components'

type PropTypes = {
    onClickHandler: () => void
}

const Button = styled.p`
  background-color: black;
  border-radius: 0.1em;
  color: white;
  font-size: 2rem;
  position: fixed;
  display: box;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -10%);
  margin: 0;
  padding: 0.3em;
`

const StartButton = ({ onClickHandler }: PropTypes) => (
        <Button onClick={onClickHandler}>START</Button>
)

export default StartButton
