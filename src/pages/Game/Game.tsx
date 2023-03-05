import React, { FC, useEffect } from 'react'
import { HelpBlock } from './components/HelpBlock'
import { MainBlock } from './components/MainBlock'
import * as Styled from './styles'
import QuestionsBlock from './components/QuestionsBlock/QuestionsBlock'
import SettingsBlock from './components/SettingsBlock/SettingsBlock'
import { useAppDispatch, useAppselector } from './../../hooks/redux'
import { fetchQuestions } from './../../store/reducers/ActionCreators'

const Game: FC = () => {
  const dispatch = useAppDispatch()
  const { questions } = useAppselector((state) => state.questionsReducer)

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  console.log('====================================')
  console.log('questions >>', questions)
  console.log('====================================')

  return (
    <Styled.Root>
      <SettingsBlock />
      <MainBlock />
      <HelpBlock />
      <QuestionsBlock />
    </Styled.Root>
  )
}

export default Game
