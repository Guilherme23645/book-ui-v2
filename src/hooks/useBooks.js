import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../api/books"

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: getBooks
  })
}

export const useBook = (id) => {
  return useQuery({
    queryKey: ["books", id],
    queryFn: () => getBook(id),
    enabled: !!id
  })
}

export const useCreateBook = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  })
}

export const useUpdateBook = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  })
}

export const useDeleteBook = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['books'] })
  })
}