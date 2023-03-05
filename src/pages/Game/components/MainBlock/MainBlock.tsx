import React, { FC, useState, useContext } from 'react'
import * as Styled from './styles'
import { ThemeContext } from './../../../../index'
import { HexagonButton } from '../../../../UI/HexagonButton'
import { useAppSelector } from '../../../../hooks/redux'
import mainImg from '../../../../assets/images/main-img.png'

const MainBlock: FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const stepList = useContext(ThemeContext)

  const { gameHasStarted } = useAppSelector((state) => state.questionsReducer)

  return (
    <Styled.Root gameHasStarted={gameHasStarted}>
      <Styled.ImageBlock gameHasStarted={gameHasStarted}>
        <Styled.Image src={mainImg} alt='Main image' />
      </Styled.ImageBlock>

      <Styled.QuestionsList gameHasStarted={gameHasStarted}>
        {stepList.reverse().map((step) => {
          return step.id === currentStep ? (
            <HexagonButton
              key={step.id}
              current={step.id === currentStep}
              padding='10px'
              size='21px'
              background='#e1a02e'
              color='#e1a02e'
            >
              <>
                <Styled.Number>{step.id}</Styled.Number>
                <Styled.Money>{step.money}</Styled.Money>
              </>
            </HexagonButton>
          ) : (
            <Styled.Step key={step.id} current={step.id === currentStep}>
              <Styled.Number>{step.id}</Styled.Number>
              <Styled.Money>{step.money}</Styled.Money>
            </Styled.Step>
          )
        })}
      </Styled.QuestionsList>
    </Styled.Root>
  )
}

export default MainBlock
