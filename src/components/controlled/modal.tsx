import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`

export default function ControlledModal({
  show,
  close,
  children
}: {
  children: React.ReactNode
  show: boolean
  close: () => void
}) {
  return (
    <>
      {show && (
        <ModalBackground onClick={close}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={close}>Close</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  )
}
