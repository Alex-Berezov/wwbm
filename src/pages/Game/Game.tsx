import React, { FC } from 'react'
import { HelpBlock } from './components/HelpBlock'
import { MainBlock } from './components/MainBlock'
import * as Styled from './styles'
import QuestionsBlock from './components/QuestionsBlock/QuestionsBlock'
import SettingsBlock from './components/SettingsBlock/SettingsBlock'

const Game: FC = () => {
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
