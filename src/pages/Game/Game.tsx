import React, { FC, useState } from 'react'
import { HelpBlock } from './components/HelpBlock'
import { MainBlock } from './components/MainBlock'
import * as Styled from './styles'
import QuestionsBlock from './components/QuestionsBlock/QuestionsBlock'
import SettingsBlock from './components/SettingsBlock/SettingsBlock'

const Game: FC = () => {
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [fiftyFifty, setFiftyFifty] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [numberOfQuestions, setNumberOfQuestions] = useState(0)

  return (
    <Styled.Root>
      <SettingsBlock
        setNumberOfQuestions={setNumberOfQuestions}
        gameHasStarted={gameHasStarted}
        setGameHasStarted={setGameHasStarted}
        setCurrentStep={setCurrentStep}
        setFiftyFifty={setFiftyFifty}
      />
      <MainBlock
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        numberOfQuestions={numberOfQuestions}
        gameHasStarted={gameHasStarted}
      />
      <HelpBlock
        gameHasStarted={gameHasStarted}
        setFiftyFifty={setFiftyFifty}
        fiftyFifty={fiftyFifty}
      />
      <QuestionsBlock
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        numberOfQuestions={numberOfQuestions}
        gameHasStarted={gameHasStarted}
        setGameHasStarted={setGameHasStarted}
        fiftyFifty={fiftyFifty}
      />
    </Styled.Root>
  )
}

export default Game
