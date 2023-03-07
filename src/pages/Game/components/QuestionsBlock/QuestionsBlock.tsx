import React, { FC, useEffect, useState, useCallback } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { HexagonButton } from '../../../../UI/HexagonButton'
import * as Styled from './styles'
import Modal from './../../../../UI/Modal/Modal'

interface QuestionsBlockProps {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
  numberOfQuestions: number
  gameHasStarted: boolean
  fiftyFifty: boolean
  setGameHasStarted: (bool: boolean) => void
}

const QuestionsBlock: FC<QuestionsBlockProps> = ({
  currentStep,
  setCurrentStep,
  numberOfQuestions,
  gameHasStarted,
  setGameHasStarted,
  fiftyFifty,
}) => {
  const [question, setQuestion] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([])
  const [correct, setCorrect] = useState('')
  const [selected, setSelected] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [victory, setVictory] = useState(false)
  const { questions } = useAppSelector((state) => state.questionsReducer)

  useEffect(() => {
    gameHasStarted &&
      questions.length > 0 &&
      questions.length > currentStep &&
      setAnswers([
        ...questions[currentStep]?.incorrect_answers,
        questions[currentStep]?.correct_answer,
      ])
    gameHasStarted &&
      questions.length > 0 &&
      questions.length > currentStep &&
      setQuestion(questions[currentStep]?.question)
  }, [gameHasStarted, questions, currentStep])

  const selectedAnswer = (answer: string) => {
    setCorrect(questions[currentStep]?.correct_answer)
    setSelected(answer)

    answer === questions[currentStep]?.correct_answer
      ? setTimeout(() => {
          currentStep < questions.length
            ? setCurrentStep(currentStep + 1)
            : setVictory(true)
        }, 2000)
      : setTimeout(() => {
          setGameOver(true)
        }, 2000)
  }

  useEffect(() => {
    currentStep === questions.length && setVictory(true)
  }, [currentStep, questions.length])

  useEffect(() => {
    fiftyFifty &&
      questions[currentStep]?.incorrect_answers.length > 2 &&
      setAnswers([
        questions[currentStep]?.incorrect_answers[0],
        questions[currentStep]?.correct_answer,
      ])
  }, [currentStep, fiftyFifty, questions])

  useEffect(() => {
    setTimeout(() => {
      ;(gameOver || victory) && setGameHasStarted(false)
      setGameOver(false)
      setVictory(false)
    }, 2000)
  }, [gameOver, setGameHasStarted, victory])

  return (
    <Styled.Root gameHasStarted={gameHasStarted}>
      <Styled.QuestionBlock>
        <HexagonButton
          width='93%'
          minHeight='80px'
          size='50px'
          background='#f0f0f0'
          color='#000000'
          padding='10px'
        >
          {question}
        </HexagonButton>
      </Styled.QuestionBlock>

      <Styled.AnswersBlock>
        {answers.map((answer) => (
          <HexagonButton
            key={answer}
            width='45%'
            minHeight='40px'
            size='25px'
            background={answer === correct ? 'green' : '#f0f0f0'}
            color='#000000'
            padding='5px'
          >
            {
              <Styled.AnswerWrapper
                selected={selected === answer}
                onClick={() => selectedAnswer(answer)}
              >
                {answer}
              </Styled.AnswerWrapper>
            }
          </HexagonButton>
        ))}
      </Styled.AnswersBlock>

      <Modal active={gameOver} setActive={setGameOver}>
        Game Over
      </Modal>

      <Modal active={victory} setActive={setVictory}>
        Это победа!!!
      </Modal>
    </Styled.Root>
  )
}

export default QuestionsBlock
