



import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile, onAuthChange, sigOut } from "../lib/auth";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        const cleanUp = onAuthChange(async (user) => {

            setUser(user);

            if (user) {

                try {
                    const userProfile = await getUserProfile(user.id);
                    setProfile(userProfile);
                } catch (error) {
                    console.error("Error fetching user profile: ", error)
                }

            } else {
                setProfile(null)
            }
            setIsLoading(false)
        })

        return cleanUp;

    }, [])



   const Logout = async ()=>{
    try{
        await sigOut()
    }
    catch(error){
        console.log('error to Signing Out',error)
    }
   }



  


   const faqs = [
  {
    question: "How can I borrow a book from the library?",
    answer: "To borrow a book, simply fill out the request form available on the website. Our team will review your request and contact you within 24 hours."
  },
  {
    question: "Do I need to log in to request a book?",
    answer: "No login is required to request a book. Just fill out the form with your name, phone number, and the book you want to borrow."
  },
  {
    question: "Who can access the book request data?",
    answer: "Only authorized library staff members who are logged in can view submitted request details. Your data is safe and confidential."
  },
  {
    question: "How long can I keep a borrowed book?",
    answer: "Books can be borrowed for a standard period of 14 days. If you need more time, please contact the library before the due date."
  },
  {
    question: "What happens if I return the book late?",
    answer: "Late returns may result in a small fee or a warning. Consistently returning books late may affect your borrowing privileges."
  },
  {
    question: "Can I request more than one book at a time?",
    answer: "Yes, you can request multiple books, but we recommend submitting a separate request for each book for better tracking."
  },
  {
    question: "How will I know if my request is accepted?",
    answer: "You will be contacted via the phone number you provided, usually within 24 hours of submitting your request."
  }
 
];

  const value = {
        user,
        profile,
        isLoading,
        isLoggedIn: !!user,
        Logout,
        faqs
      
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}


export function useAuth() {

    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error("useAuth must be used within and AuthProvider")
    }

    return context;
}
