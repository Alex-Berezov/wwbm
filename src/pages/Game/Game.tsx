import React, { FC } from 'react'
import { HelpBlock } from './components/HelpBlock'
import { MainBlock } from './components/MainBlock'
import * as Styled from './styles'
import QuestionsBlock from './components/QuestionsBlock/QuestionsBlock'

const Game: FC = () => {
  return (
    <Styled.Root>
      <MainBlock />
      <HelpBlock />
      <QuestionsBlock />
    </Styled.Root>
  )
}

export default Game
