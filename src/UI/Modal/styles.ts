import styled from 'styled-components'

interface ModalStylesProps {
  modalActive?: boolean
  contentActive?: boolean
}

export const Root = styled.div<ModalStylesProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.modalActive ? '1' : '0')};
  pointer-events: ${(props) => (props.modalActive ? 'all' : 'none')};
  transition: 0.5s;
`

export const Content = styled.div<ModalStylesProps>`
  width: 25vw;
  padding: 40px 20px;
  border-radius: 12px;
  background-color: white;
  text-align: center;
  transform: ${(props) => (props.contentActive ? 'scale(1)' : 'scale(0.5)')};
  transition: 0.4s all;
`
