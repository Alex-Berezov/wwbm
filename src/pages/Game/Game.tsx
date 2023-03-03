import React, { FC } from 'react'
import { HelpBlock } from './components/HelpBlock'
import { MainBlock } from './components/MainBlock'
import * as Styled from './styles'

const Game: FC = () => {
  const StepList = [
    { id: 1, money: '$ 100' },
    { id: 2, money: '$ 200' },
    { id: 3, money: '$ 300' },
    { id: 4, money: '$ 500' },
    { id: 5, money: '$ 1 000' },
    { id: 6, money: '$ 2 000' },
    { id: 7, money: '$ 4 000' },
    { id: 8, money: '$ 8 000' },
    { id: 9, money: '$ 16 000' },
    { id: 10, money: '$ 32 000' },
    { id: 11, money: '$ 64 000' },
    { id: 12, money: '$ 125 000' },
    { id: 13, money: '$ 250 000' },
    { id: 14, money: '$ 500 000' },
    { id: 15, money: '$ 1 000 000' },
  ]

  return (
    <Styled.Root>
      <MainBlock stepList={StepList} />

      <HelpBlock />

      <Styled.QuestionsBlock>Questions</Styled.QuestionsBlock>
    </Styled.Root>
  )
}

export default Game
