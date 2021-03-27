import * as React from 'react'
import { useModal, useModalActions } from './ReactModal/useModal'

type MyModalContentProps = {
  title: string
}

const MyModalContent = ({ title }: MyModalContentProps) => {
  const { hideModal } = useModalActions()
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div>{title}</div>
      <button
        onClick={() => {
          hideModal()
        }}
      >
        close
      </button>
    </div>
  )
}
const useMyModal = () => {
  const { showModal } = useModal(MyModalContent)
  return showModal
}

const Comp = () => {
  const showModal = useMyModal()
  return (
    <button
      onClick={() => {
        showModal({ title: 'my title' })
      }}
    >
      open modal
    </button>
  )
}
export function App() {
  return <Comp />
}
