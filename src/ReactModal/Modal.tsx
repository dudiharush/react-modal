import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = PropsWithChildren<{
  open: boolean
  handleClose: () => void
}>

export const Modal = ({ open, handleClose, children }: ModalProps) => {
  const ref = useRef<HTMLHeadingElement>(null)
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
            debugger
            handleClose()
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            padding: '100px',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <p
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '50%',
              background: 'white',
              padding: '50px',
              textAlign: 'center',
            }}
          >
            {children}
          </p>
        </div>,
        el,
      )
    : null
}
