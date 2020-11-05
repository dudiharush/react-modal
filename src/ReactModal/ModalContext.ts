import * as React from 'react'
import { FunctionComponent } from 'react'

export type ModalContentType<P extends WithHideModal> = { component: FunctionComponent<P>; props?: P }

export type WithHideModal = {
  hideModal(): void
}

export type ModalContextType<P extends WithHideModal> = {
  setModal: (modalContent: ModalContentType<P>) => void
  removeModal: () => void
}

const invariantViolation = () => {
  throw new Error(
    'Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider.',
  )
}

export const ModalContext = React.createContext<ModalContextType<any>>({
  setModal: invariantViolation,
  removeModal: invariantViolation,
})
