import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_MOCKAPI_URL
})

export const getBooks = async () => {
    const { data } = await api.get("/books")
    return data
}

export const getBook = async (id) => {
  const { data } = await api.get(`/books/${id}`)
  return data
}

export const createBook = async (book) => {
  const { data } = await api.post('/books', book)
  return data
}

export const updateBook = async ({ id, ...book }) => {
  const { data } = await api.put(`/books/${id}`, book)
  return data
}

export const deleteBook = async (id) => {
  const { data } = await api.delete(`/books/${id}`)
  return data
}

export const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    formData
  )
  return data.secure_url
}