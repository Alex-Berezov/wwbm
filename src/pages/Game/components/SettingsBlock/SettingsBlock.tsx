import React, { FC, useCallback } from 'react'
import { HexagonButton } from '../../../../UI/HexagonButton'
import * as Styled from './styles'
import useSettingsInput from './../../hooks/useSettingsInput'
import { useAppDispatch, useAppSelector } from './../../../../hooks/redux'
import { fetchQuestions } from './../../../../store/reducers/ActionCreators'

interface SettingsBlockProps {
  setNumberOfQuestions: (num: number) => void
  gameHasStarted: boolean
  setGameHasStarted: (bool: boolean) => void
  setFiftyFifty: (bool: boolean) => void
  setCurrentStep: (num: number) => void
}

const SettingsBlock: FC<SettingsBlockProps> = ({
  setNumberOfQuestions,
  gameHasStarted,
  setGameHasStarted,
  setCurrentStep,
  setFiftyFifty,
}) => {
  const dispatch = useAppDispatch()
  const { questionsAmount } = useAppSelector((state) => state.questionsReducer)

  const questionsValue = useSettingsInput(questionsAmount, { isInt: true })

  const startGame = useCallback(() => {
    setGameHasStarted(true)
    setNumberOfQuestions(questionsValue.value)
    dispatch(fetchQuestions(questionsValue.value))
    setCurrentStep(0)
    setFiftyFifty(false)

    setTimeout(() => {
      window.scrollTo(0, 10000)
    }, 1500)
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
