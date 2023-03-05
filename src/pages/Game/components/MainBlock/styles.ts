import styled from 'styled-components'

interface MainBlockStylesProps {
  current?: boolean
  gameHasStarted?: boolean
}

export const Root = styled.div<MainBlockStylesProps>`
  display: flex;
  justify-content: ${(props) =>
    props.gameHasStarted ? 'space-between' : 'center'};
  align-items: center;
`

export const ImageBlock = styled.div<MainBlockStylesProps>`
  width: ${(props) => (props.gameHasStarted ? '49%' : '60%')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img``

export const QuestionsList = styled.div<MainBlockStylesProps>`
  width: ${(props) => (props.gameHasStarted ? '20%' : '0%')};
  display: ${(props) => (props.gameHasStarted ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 30px;
`

export const Step = styled.div<MainBlockStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  font-size: 18px;
  font-weight: ${(props) => (props.current ? '500' : '400')};
  color: ${(props) => (props.current ? '#000000' : '#e1a02e')};
  background: ${(props) => (props.current ? '#e1a02e' : 'transparent')};
`

export const Number = styled.div``

export const Money = styled.div`
  margin-left: 20px;
`
