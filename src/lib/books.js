
import supabase from "./supabase"

export const createBook = async (Book) => {
  // Get the logged-in user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    console.error("Not logged in", userError)
    throw new Error("Not logged in")
  }

  const BookData = {
    name: Book.name,
    Type: Book.type,
    authar_name: Book.author,
    book_id: user.id, 
  }

  const { data, error } = await supabase
    .from('books')
    .insert(BookData)
    .select()
    .single()

  if (error) {
    console.error("Error creating Book", error)
    throw error
  }

  console.log("Book created successfully.", data)
  return data
}

export const getMyBooks = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('book_id', user.id) 

  if (error) throw error
  return data
}

export const updateBook = async (id, updatedBook) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('books')
    .update({
      name: updatedBook.name,
      Type: updatedBook.type,
      authar_name: updatedBook.author,
    })
    .eq('id', id)
    .eq('book_id', user.id) 
    .select()
    .single()

  if (error) throw error
  return data
}
export const deleteBook = async (id) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('books')
    .delete()
    .eq('id', id)
    .eq('book_id', user.id) 

  if (error) throw error
  return data
}

