import AddModal from "./components/modals/AddModal"
import DeleteModal from "./components/modals/DeleteModal"
import EditModal from "./components/modals/EditModal"
import ViewModal from "./components/modals/ViewModal"
import { useModal } from "./context/ModalContext"
import { useBooks } from "./hooks/useBooks"

const App = () => {
  const { data: books, loading, error } = useBooks()
  const { openModal, activeModal, selectedModal } = useModal()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <h1>Books</h1>
      <button onClick={() => openModal("add")}>Add Book</button>

      <ul>
        {
          books.map(
            book => (
              <li key={book.id}>
                <span>{book.title} — {book.author}</span>
                <button onClick={() => openModal("view", book)}></button>
                <button onClick={() => openModal("edit", book)}>Edit</button>
                <button onClick={() => openModal("delete", book)}>Delete</button>
              </li>
            )
          )
        }
      </ul>

      {activeModal === "add" && <AddModal />}
      {activeModal === "view" && <ViewModal />}
      {activeModal === "edit" && <EditModal />}
      {activeModal === "delete" && <DeleteModal />}

    </div>
  )
}

export default App