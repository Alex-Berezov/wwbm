import React, { useState, FC } from 'react'
import * as Styled from './styles'
import { Modal } from '../../../../UI/Modal'
import { HexagonButton } from '../../../../UI/HexagonButton'

import fifty from '../../../../assets/images/fifty.png'
import help from '../../../../assets/images/help.png'
import call from '../../../../assets/images/call.png'

interface HelpBlockProps {
  gameHasStarted: boolean
  fiftyFifty: boolean
  setFiftyFifty: (bool: boolean) => void
}

const HelpBlock: FC<HelpBlockProps> = ({
  gameHasStarted,
  setFiftyFifty,
  fiftyFifty,
}) => {
  const [fiftyModalActive, setFiftyModalActive] = useState(false)
  const [helpModalActive, setHelpModalActive] = useState(false)
  const [callModalActive, setCallModalActive] = useState(false)

  const selectedFiftyFifty = () => {
    setFiftyFifty(true)
    setFiftyModalActive(false)
  }

  return (
    <Styled.Root gameHasStarted={gameHasStarted}>
      <Styled.HelpButtonsBlock>
        <Styled.HelpButton>
          <Styled.HelpImage
            src={fifty}
            alt='fifty'
            onClick={() => setFiftyModalActive(true)}
          />
        </Styled.HelpButton>
        <Styled.HelpButton>
          <Styled.HelpImage
            src={help}
            alt='help'
            onClick={() => setHelpModalActive(true)}
          />
        </Styled.HelpButton>
        <Styled.HelpButton>
          <Styled.HelpImage
            src={call}
            alt='call'
            onClick={() => setCallModalActive(true)}
          />
        </Styled.HelpButton>
      </Styled.HelpButtonsBlock>

      <Modal active={fiftyModalActive} setActive={setFiftyModalActive}>
        <Styled.FiftyModalBlock>
          {fiftyFifty ? (
            <Styled.FiftyModalText>
              Подсказка уже использована
            </Styled.FiftyModalText>
          ) : (
            <>
              <Styled.FiftyModalText>
                Мы уберем два не верных варианта.
              </Styled.FiftyModalText>
              <Styled.FiftyModalText>
                Уверен, что хочешь воспользоватьтся подсказкой?
              </Styled.FiftyModalText>
              <Styled.FiftyModalButtons>
                <Styled.FiftyModalButton onClick={() => selectedFiftyFifty()}>
                  <HexagonButton
                    padding='5px'
                    background='green'
                    color='white'
                    width='50%'
                    size='15px'
                  >
                    Да
                  </HexagonButton>
                </Styled.FiftyModalButton>

                <Styled.FiftyModalButton
                  onClick={() => setFiftyModalActive(false)}
                >
                  <HexagonButton
                    padding='5px'
                    background='red'
                    color='white'
                    width='50%'
                    size='15px'
                  >
                    Нет
                  </HexagonButton>
                </Styled.FiftyModalButton>
              </Styled.FiftyModalButtons>
            </>
          )}
        </Styled.FiftyModalBlock>
      </Modal>
      <Modal active={helpModalActive} setActive={setHelpModalActive}>
        На твою игру ни кто не пришёл, подсказать тебе некому. Иди гугли!
      </Modal>
      <Modal active={callModalActive} setActive={setCallModalActive}>
        Мы не будем никому звонить. Иди гугли!
      </Modal>
    </Styled.Root>
  )
}

export default HelpBlock
