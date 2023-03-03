import React from 'react'
import * as Styled from './styles'

import fifty from '../../../../assets/images/fifty.png'
import help from '../../../../assets/images/help.png'
import call from '../../../../assets/images/call.png'

const HelpBlock = () => {
  return (
    <Styled.Root>
      <Styled.HelpButtonsBlock>
        <Styled.HelpButton>
          <Styled.HelpImage src={fifty} alt='fifty' />
        </Styled.HelpButton>
        <Styled.HelpButton>
          <Styled.HelpImage src={help} alt='help' />
        </Styled.HelpButton>
        <Styled.HelpButton>
          <Styled.HelpImage src={call} alt='call' />
        </Styled.HelpButton>
      </Styled.HelpButtonsBlock>
    </Styled.Root>
  )
}

export default HelpBlock
