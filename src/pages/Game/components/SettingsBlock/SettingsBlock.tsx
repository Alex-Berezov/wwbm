import React, { FC, useState } from 'react'
import { HexagonButton } from '../../../../UI/HexagonButton'
import * as Styled from './styles'
import useSettingsInput from './../../hooks/useSettingsInput'

const SettingsBlock: FC = () => {
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const questionsValue = useSettingsInput(15, { isInt: true })

  return (
    <Styled.Root>
      <Styled.QuestionsValueBlock>
        <Styled.Title>Укажите количество вопросов</Styled.Title>
        <Styled.Input
          autoFocus
          value={questionsValue.value}
          onChange={questionsValue.onChange}
          onBlur={questionsValue.onBlur}
        />
        <Styled.InputError>{questionsValue.errors}</Styled.InputError>
      </Styled.QuestionsValueBlock>

      {!gameHasStarted ? (
        <Styled.StartButton onClick={() => setGameHasStarted(true)}>
          <HexagonButton
            padding='4px'
            color='white'
            background='green'
            size='15px'
            width='100px'
          >
            Поехали
          </HexagonButton>
        </Styled.StartButton>
      ) : (
        <Styled.StartButton onClick={() => setGameHasStarted(false)}>
          <HexagonButton
            padding='4px'
            color='black'
            background='grey'
            size='15px'
            width='100px'
          >
            Сначала
          </HexagonButton>
        </Styled.StartButton>
      )}
    </Styled.Root>
  )
}

export default SettingsBlock
