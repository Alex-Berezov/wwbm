import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { HexagonButton } from '../../../../UI/HexagonButton'
import * as Styled from './styles'

const QuestionsBlock = () => {
  const { gameHasStarted } = useAppSelector((state) => state.questionsReducer)

  return (
    <Styled.Root gameHasStarted={gameHasStarted}>
      <Styled.QuestionBlock>
        <HexagonButton
          width='93%'
          minHeight='80px'
          size='50px'
          background='#f0f0f0'
          color='#000000'
          padding='10px'
        >
          Question
        </HexagonButton>
      </Styled.QuestionBlock>

      <Styled.AnswersBlock>
        <HexagonButton
          width='45%'
          minHeight='40px'
          size='25px'
          background='#f0f0f0'
          color='#000000'
          padding='5px'
        >
          Answer 1
        </HexagonButton>
        <HexagonButton
          width='45%'
          minHeight='40px'
          size='25px'
          background='#f0f0f0'
          color='#000000'
          padding='5px'
        >
          Answer 2
        </HexagonButton>
        <HexagonButton
          width='45%'
          minHeight='40px'
          size='25px'
          background='#f0f0f0'
          color='#000000'
          padding='5px'
        >
          Answer 3
        </HexagonButton>
        <HexagonButton
          width='45%'
          minHeight='40px'
          size='25px'
          background='#f0f0f0'
          color='#000000'
          padding='5px'
        >
          Answer 4
        </HexagonButton>
      </Styled.AnswersBlock>
    </Styled.Root>
  )
}

export default QuestionsBlock
