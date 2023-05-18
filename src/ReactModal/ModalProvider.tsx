import { useState } from 'react'
import * as React from 'react'
import { ModalContentType, ModalContext, ModalContextType } from './ModalContext'
import { Modal } from './Modal'

export interface ModalProviderProps {
  children: React.ReactElement
}

export function ModalProvider<P>({ children }: ModalProviderProps) {
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
      <ModalContext.Provider value={contextValue}>
        {children}
        <Modal open={open} handleClose={removeModal}>
          <>{modal && <modal.component {...(modal.props as P)} />}</>
        </Modal>
      </ModalContext.Provider>
    </>
  )
}
