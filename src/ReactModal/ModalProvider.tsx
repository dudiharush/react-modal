import { useState } from 'react'
import * as React from 'react'
import { ModalContentType, ModalContext, ModalContextType, ModalOwnProps } from './ModalContext'
import { Modal } from './Modal'

export interface ModalProviderProps {
  children: React.ReactElement
}

export function ModalProvider<P extends ModalOwnProps>({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<ModalContentType<P>>()

  function removeModal() {
    setModal(undefined)
  }

  const contextValue: ModalContextType<P> = React.useMemo(
    () => ({
      setModal,
      removeModal,
    }),
    [],
  )

  const open = modal !== undefined

  return (
    <>
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
      <Modal open={open} handleClose={removeModal}>
        <>{modal && <modal.component {...(modal.props as P)} hideModal={removeModal} />}</>
      </Modal>
    </>
  )
}
