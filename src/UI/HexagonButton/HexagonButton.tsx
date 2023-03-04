import React, { FC } from 'react'
import * as Styled from './styles'

export interface HexagonButtonProps {
  children: string | JSX.Element
  current?: boolean
  width?: string
  minHeight?: string
  color?: string
  background?: string
  size?: string
  padding: string
  onClick?: () => void
}

const HexagonButton: FC<HexagonButtonProps> = ({
  children,
  current,
  width,
  minHeight,
  color,
  background,
  size,
  padding,
}) => {
  return (
    <Styled.Root
      current={current}
      width={width}
      minHeight={minHeight}
      color={color}
      background={background}
      size={size}
      padding={padding}
    >
      {children}
    </Styled.Root>
  )
}

export default HexagonButton
