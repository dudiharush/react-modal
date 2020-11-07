import * as React from 'react'
import { useModal } from '@dudiharush/react-modal'

const useMyModal = () => {
  const { showModal, hideModal } = useModal(() => (
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
  ))
  return showModal
}

const Comp = () => {
  const showModal = useMyModal()
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
