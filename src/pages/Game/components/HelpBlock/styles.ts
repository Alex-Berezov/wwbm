import styled from 'styled-components'

interface HelpStylesProps {
  gameHasStarted: boolean
}

export const Root = styled.div<HelpStylesProps>`
  width: 100%;
  display: ${(props) => (props.gameHasStarted ? 'flex' : 'none')};
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

export const FiftyModalBlock = styled.div``

export const FiftyModalText = styled.div``

export const FiftyModalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const FiftyModalButton = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
