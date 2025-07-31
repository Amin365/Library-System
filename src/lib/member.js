


import supabase from "./supabase"

export const createMember = async (member) => {
  // Get the logged-in user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    console.error("Not logged in", userError)
    throw new Error("Not logged in")
  }

  const MemberData = {
    name: member.name,
    career: member.career,
    tellephone: member.tell,
   member_id:user.id
   
  }

  const { data, error } = await supabase
    .from('members')
    .insert(MemberData)
    .select()
    .single()

  if (error) {
    console.error("Error creating Member", error)
    throw error
  }

  console.log("Member created successfully.", data)
  return data
}

export const getMembers = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('members')
    .select('*')
    .eq('member_id', user.id) 

  if (error) throw error
  return data
}

export const updateMember = async (id, UpdatedMember) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('members')
    .update({
      name: UpdatedMember.name,
      career: UpdatedMember.career,
      tellephone: UpdatedMember.tellephone,
    })
    .eq('id', id)
    .eq('member_id', user.id) 
    .select()
    .single()

  if (error) throw error
  return data
}
export const deleteMember = async (id) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) throw new Error("Not logged in")

  const { data, error } = await supabase
    .from('members')
    .delete()
    .eq('id', id)
    .eq('members', user.id) 

  if (error) throw error
  return data
}

