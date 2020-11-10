# react-modal

React Modal With Hooks
<img src="./react-icon1.png"/>

# installation

run: npm i @dudiharush/react-modal

# usage example

```
import * as React from "react";
import { ModalProvider } from "@dudiharush/react-modal";

// step 1: use ModalProvider
render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  rootElement,
)

 // step 2: create modal component and call useModalActions()
const MyModalContent = ({ title }) => {
  const { hideModal } = useModalActios();
  return (
    <div>
      <div>{title}</div>
      <button onClick={() => hideModal() }>close</button>
    </div>
  )
}
  // step 3: use useModal and its return functions: showModal(props)
  import { useModal } from "@dudiharush/react-modal";

  const useModalContent = {
    const { showModal } = useModal(MyModalContent)
    return showModal;
  }

  const showModal = useModalContent()
  return (
    <button
      onClick={() => {
        showModal({title: 'modal title'})
      }}
    >
      open modal
    </button>
}

```
