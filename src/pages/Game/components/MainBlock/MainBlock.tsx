import React, { FC, useState } from 'react'
import * as Styled from './styles'

import mainImg from '../../../../assets/images/main-img.png'
import { IStepList } from './../../../../types/common'

interface MainBlockProps {
  stepList: IStepList[]
}

const MainBlock: FC<MainBlockProps> = ({ stepList }) => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <Styled.Root>
      <Styled.ImageBlock>
        <Styled.Image src={mainImg} alt='Main image' />
      </Styled.ImageBlock>

      <Styled.QuestionsList>
        {stepList.reverse().map((step) => (
          <Styled.Step key={step.id} current={step.id === currentStep}>
            <Styled.Number>{step.id}</Styled.Number>
            <Styled.Money>{step.money}</Styled.Money>
          </Styled.Step>
        ))}
      </Styled.QuestionsList>
    </Styled.Root>
  )
}

export default MainBlock
