import styled from 'styled-components'

interface MainBlockStylesProps {
  current: boolean
}

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageBlock = styled.div`
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img``

export const QuestionsList = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const Step = styled.div<MainBlockStylesProps>`
  display: flex;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: ${(props) => (props.current ? '500' : '400')};
  color: ${(props) => (props.current ? '#000000' : '#e1a02e')};
  background: ${(props) => (props.current ? '#e1a02e' : 'transparent')};
`

export const Number = styled.div``

export const Money = styled.div`
  margin-left: 20px;
`
