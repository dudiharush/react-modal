import React, { PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = PropsWithChildren<{
  open: boolean
  handleClose: () => void
}>

export const Modal = ({ open, handleClose, children }: ModalProps) => {
  const el = React.useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    const modalRoot = document.body

    modalRoot?.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])

  return open
    ? createPortal(
        <div
          onClick={() => {
            handleClose()
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              float: 'left',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {children}
          </div>
        </div>,
        el,
      )
    : null
}
