import React, { FC, useEffect, useContext, useState } from 'react'
import * as Styled from './styles'
import { ThemeContext } from './../../../../index'
import { HexagonButton } from '../../../../UI/HexagonButton'
import mainImg from '../../../../assets/images/main-img.png'
import { IStepList } from './../../../../models/IStepList'

interface MainBlockProps {
  currentStep: number
  numberOfQuestions: number
  setCurrentStep: (num: number) => void
  gameHasStarted: boolean
}

const MainBlock: FC<MainBlockProps> = ({
  currentStep,
  numberOfQuestions,
  setCurrentStep,
  gameHasStarted,
}) => {
  const stepList = useContext(ThemeContext)
  const [customStepList, setCustomStepList] = useState<IStepList[]>([])

  useEffect(() => {
    setCustomStepList(stepList.slice(0, +numberOfQuestions))
  }, [gameHasStarted, numberOfQuestions])

  return (
    <Styled.Root gameHasStarted={gameHasStarted}>
      <Styled.ImageBlock gameHasStarted={gameHasStarted}>
        <Styled.Image src={mainImg} alt='Main image' />
      </Styled.ImageBlock>

      <Styled.QuestionsList gameHasStarted={gameHasStarted}>
        {customStepList.map((step: any, i) => {
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
                <Styled.Number>{step.id + 1}</Styled.Number>
                <Styled.Money>{step.money}</Styled.Money>
              </>
            </HexagonButton>
          ) : (
            <Styled.Step key={step.id} current={step.id === currentStep}>
              <Styled.Number>{step.id + 1}</Styled.Number>
              <Styled.Money>{step.money}</Styled.Money>
            </Styled.Step>
          )
        })}
      </Styled.QuestionsList>
    </Styled.Root>
  )
}

export default MainBlock
