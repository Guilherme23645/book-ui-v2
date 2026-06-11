import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [activeModal, setActiveModal] = useState(null)
  const [selectedBook, setSelectedBook] = useState(null)

  const openModal = (modal, book = null) => {
    setSelectedBook(book)
    setActiveModal(modal)
  }

  const closeModal = () => {
    setSelectedBook(null)
    setActiveModal(null)
  }

  return (
    <ModalContext.Provider value={{ activeModal, selectedBook, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)