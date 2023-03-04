import React, { FC } from 'react'
import * as Styled from './styles'

interface modalProps {
  active: boolean
  setActive: (bool: boolean) => void
  children: string | JSX.Element
}

const Modal: FC<modalProps> = ({ active, setActive, children }) => {
  return (
    <Styled.Root modalActive={active} onClick={() => setActive(false)}>
      <Styled.Content
        contentActive={active}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Styled.Content>
    </Styled.Root>
  )
}

export default Modal
