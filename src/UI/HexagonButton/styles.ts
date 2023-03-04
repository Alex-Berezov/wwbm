import styled from 'styled-components'
import { HexagonButtonProps } from './HexagonButton'

export const Root = styled.div<HexagonButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : 'auto')};
  position: relative;
  padding: ${(props) => (props.padding ? props.padding : null)};
  margin: 10px 0;
  font-weight: ${(props) => (props.current ? '500' : '400')};
  color: ${(props) =>
    props.current ? '#000000' : props.color ? props.color : '#000000'};
  background: ${(props) =>
    props.current
      ? '#e1a02e'
      : props.background
      ? props.background
      : 'transparent'};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.size ? `-${props.size}` : null)};
    width: 0;
    height: 0;
    border-top: ${(props) => (props.size ? props.size : null)} solid transparent;
    border-right: ${(props) => (props.size ? props.size : null)} solid
      ${(props) => (props.background ? props.background : null)};
    border-bottom: ${(props) => (props.size ? props.size : null)} solid
      transparent;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: ${(props) => (props.size ? `-${props.size}` : null)};
    width: 0;
    height: 0;
    border-top: ${(props) => (props.size ? props.size : null)} solid transparent;
    border-left: ${(props) => (props.size ? props.size : null)} solid
      ${(props) => (props.background ? props.background : null)};
    border-bottom: ${(props) => (props.size ? props.size : null)} solid
      transparent;
  }
`
