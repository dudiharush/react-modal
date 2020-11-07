import { useContext, useEffect, useState, useCallback, useRef, FunctionComponent } from 'react'
import { ModalContext } from './ModalContext'

export const useModal = <P>(
  component: FunctionComponent<P>,
): { showModal: (props?: P) => void; hideModal: () => void } => {
  const context = useContext(ModalContext)
  const contentRef = useRef(component)
  const [modalProps, setModalProps] = useState<P>()

  const showModal = useCallback((props: P = {} as P) => {
    setModalProps(props)
  }, [])

  const hideModal = useCallback(() => {
    setModalProps(undefined)
  }, [])

  const isShown = modalProps !== undefined

  useEffect(() => {
    if (isShown) {
      context.setModal({
        component: contentRef.current as FunctionComponent<P>,
        props: modalProps,
      })
    } else {
      context.removeModal?.()
    }
  }, [isShown, context, modalProps])

  return { showModal, hideModal }
}
