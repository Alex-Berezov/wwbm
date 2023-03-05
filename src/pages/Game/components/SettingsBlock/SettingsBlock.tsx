import React, { FC, useCallback } from 'react'
import { HexagonButton } from '../../../../UI/HexagonButton'
import * as Styled from './styles'
import useSettingsInput from './../../hooks/useSettingsInput'
import { useAppDispatch, useAppSelector } from './../../../../hooks/redux'
import { fetchQuestions } from './../../../../store/reducers/ActionCreators'

const SettingsBlock: FC = () => {
  const dispatch = useAppDispatch()
  const { questions, gameHasStarted, questionsAmount } = useAppSelector(
    (state) => state.questionsReducer
  )

  const questionsValue = useSettingsInput(questionsAmount, { isInt: true })

  console.log('====================================')
  console.log('questions >>', questions)
  console.log('====================================')

  const startGame = useCallback(() => {
    dispatch(fetchQuestions(questionsValue.value))
  }, [questionsValue.value])

  return (
    <Styled.Root>
      <Styled.QuestionsValueBlock>
        <Styled.Title>Укажите количество вопросов</Styled.Title>
        <Styled.Input
          autoFocus
          value={questionsValue.value}
          onChange={questionsValue.onChange}
          onBlur={questionsValue.onBlur}
        />
        <Styled.InputError>{questionsValue.errors}</Styled.InputError>
      </Styled.QuestionsValueBlock>

      <Styled.StartButton onClick={() => startGame()}>
        <HexagonButton
          padding='4px'
          color='white'
          background='green'
          size='15px'
          width='100px'
        >
          {!gameHasStarted ? 'Поехали' : 'Сначала'}
        </HexagonButton>
      </Styled.StartButton>
    </Styled.Root>
  )
}

export default SettingsBlock
