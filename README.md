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

  // step 2: use useModal and its return function: showModal(props)
  import { useModal } from "@dudiharush/react-modal";

  const ModalContent = ({title}) => <div>{title}</div>

  const { showModal } = useModal(ModalContent)
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
