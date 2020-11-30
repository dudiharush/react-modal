import { useContext, useCallback, useRef, FunctionComponent } from 'react'
import { ModalContext } from './ModalContext'

export const useModal = <P>(
  component: FunctionComponent<P>,
): { showModal: P extends Record<string, unknown> ? (props: P) => void : () => void; hideModal: () => void } => {
  const context = useContext(ModalContext)
  const contentRef = useRef(component)

  const showModal = useCallback(
    (props: P = {} as P) => {
      context.setModal({
        component: contentRef.current as FunctionComponent<P>,
        props,
      })
    },
    [context],
  )

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
