import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`

export const HelpButtonsBlock = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const HelpButton = styled.button`
  width: 80px;
  height: 80px;
  cursor: pointer;
`

export const HelpImage = styled.img`
  &:hover {
    scale: 1.1;
  }
`
