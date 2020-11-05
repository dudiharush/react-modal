import { useContext, useEffect, useState, useCallback, useRef, FunctionComponent } from 'react'
import { ModalContext, WithHideModal } from './ModalContext'

export const useModal = <P>(component: FunctionComponent<P & WithHideModal>): { showModal: (props?: P) => void } => {
  const context = useContext(ModalContext)
  const contentRef = useRef(component)
  const [modalProps, setModalProps] = useState<P>()
  const showModal = useCallback((props?: P) => {
    const x = props || {}
    setModalProps(x as any)
  }, [])
  const isShown = modalProps !== undefined

  useEffect(() => {
    if (isShown) {
      context.setModal({
        component: contentRef.current as FunctionComponent<P & WithHideModal>,
        props: modalProps,
      })
    } else {
      context.removeModal?.()
    }
  }, [isShown, context, modalProps])

  return { showModal }
}
