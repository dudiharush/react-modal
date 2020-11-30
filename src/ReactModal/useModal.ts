import { useContext, useCallback, useRef, FunctionComponent } from 'react'
import { ModalContext } from './ModalContext'

export const useModal = <P>(component: FunctionComponent<P>) => {
  const context = useContext(ModalContext)
  const contentRef = useRef(component)

  const showModal = useCallback(
    (props: P) => {
      context.setModal({
        component: contentRef.current as FunctionComponent<P>,
        props: props || {},
      })
    },
    [context],
  ) as P extends Record<string, unknown> ? (props: P) => void : () => void

  const hideModal = useCallback(() => {
    context.removeModal?.()
  }, [context])

  return { showModal, hideModal }
}

export const useModalActios = () => {
  const context = useContext(ModalContext)
  return {
    hideModal: () => {
      debugger
      context.removeModal?.()
    },
  }
}
