import * as React from 'react'
import { useModal, useModalActios } from './ReactModal/useModal'

type MyModalContentProps = {
  title: string
}
const MyModalContent = ({ title }: MyModalContentProps) => {
  const { hideModal } = useModalActios()
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div>{title}</div>
      <button
        onClick={() => {
          hideModal()
        }}
      >
        close{' '}
      </button>
    </div>
  )
}
const useMyModal = () => {
  const { showModal, hideModal } = useModal(MyModalContent)
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
