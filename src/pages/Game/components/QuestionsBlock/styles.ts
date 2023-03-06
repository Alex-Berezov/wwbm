import styled from 'styled-components'

interface QuestionsProps {
  gameHasStarted?: boolean
  selected?: boolean
}

export const Root = styled.div<QuestionsProps>`
  display: ${(props) => (props.gameHasStarted ? 'flex' : 'none')};
  flex-direction: column;
`

export const QuestionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  color: #000000 !important;
`

export const AnswersBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const AnswerWrapper = styled.span<QuestionsProps>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? 'red' : 'black')};
`
