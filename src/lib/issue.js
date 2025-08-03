import supabase from "./supabase";

/**
 * Allow anyone (no login required) to create a book issue.
 */
export const createIsue = async (issue) => {
  const issueData = {
    name: issue.name,
    tellephone: issue.tell,
    book_name: issue.Bookname,
    return_data: issue.returnData,
    issue_id: issue.id, 
  };

  const { data, error } = await supabase
    .from('issue')
    .insert(issueData)
    .select()
    .single();

  if (error) {
    console.error("Failed to create issue:", error.message);
    throw error;
  }

  console.log(" Issue created:", data);
  return data;
};

/**
 * Allow only logged-in users to read their own issues.
 */

export const getAllIssues = async () => {
  const { data, error } = await supabase.from("issue").select("*")
  if (error) throw error
  return data
}