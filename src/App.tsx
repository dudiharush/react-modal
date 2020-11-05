import * as React from 'react'
import { useModal } from './ReactModal/useModal'

const MyModal = ({ hideModal }: any) => (
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
