import * as React from 'react'
import { ModalOwnProps } from './ReactModal/ModalContext'
import { useModal } from './ReactModal/useModal'

const MyModal = ({ hideModal }: ModalOwnProps) => (
  <div style={{ backgroundColor: 'red' }}>
    <div>modal content</div>
    <button
      onClick={() => {
        hideModal()
      }}
    >
      close
    </button>
  </div>
)

const Comp = () => {
  const { showModal } = useModal(MyModal)
  return (
    <button
      onClick={() => {
        showModal()
      }}
    >
      open modal
    </button>
  )
}
export function App() {
  return <Comp />
}
