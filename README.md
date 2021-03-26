# react-modal

<img src="./logo.svg" width="300"/>
<div>React Modal With Hooks</div>

# installation

run: npm i @dudiharush/react-modal

# usage example

````javascript
import { ModalProvider } from "@dudiharush/react-modal";

// step 1: use ModalProvider
render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  rootElement,
)

// step 2: create modal component and call useModalActions()
import { useModalActios } from "@dudiharush/react-modal";

const MyModalContent = ({ title }: { title: string }) => {
  const { hideModal } = useModalActios()
  return (
    <div>
      <div>{title}</div>
      <button onClick={() => hideModal()}>close</button>
    </div>
  )
}

// step 3: create a custom hook that shows your modal:
import { useModal } from "@dudiharush/react-modal";

const useMyModalContent = () => {
  const { showModal } = useModal(MyModalContent)
  return showModal
}

// step 4: call your custom modal hook and use its returned "showModal" function:
const showModal = useMyModalContent()
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
