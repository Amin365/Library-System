import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";


const Faq = () => {
    const{faqs}=useAuth()


  const [openIndex, setOpenIndex] = useState(null);
 

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 

  return (
   <div className="max-w-5xl mx-auto py-20 px-4 relative z-10">
    <div class=" text-center mb-6">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">📚 Frequently Asked Questions</h2>
    <p class="text-gray-600 text-lg mb-16">
      Find answers to common questions about borrowing, returning, and using our library system.
    </p>
  </div>
   
   

       <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-green-600 p-6 rounded transition duration-300 bg-white"
            >
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="font-semibold text-sl md:text-lg">{faq.question}</h2>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
    </div>

  


       
     
  );
};

export default Faq;
