import { Link } from 'react-router'
import logos from '../assets/reading.png'
import { FiArrowRight } from 'react-icons/fi'
import { SiBookstack } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineNotificationImportant } from "react-icons/md";
import Faq from '../components/Faq';




const HomePage = () => {
 

  return (
    <div className="bg-gray-100" >
     <div className=" bg-gradient-to-r from-green-400 to-green-800 overflow-hidden">
         <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
 
           <div className="text-center">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
             Welcome to your gateway of knowledge
             </h1>
             <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto mb-8 w-full">
         Ready to learn, dream, and grow? Start by borrowing your next great read.
             </p>
             <Link
               to="/issue"
               className="inline-flex items-center px-8 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-colors duration-200"
             >
               📖 Borrow a Book Now
               <FiArrowRight className="ml-2 h-5 w-5" />
             </Link>
           </div> 
         </div>
       </div>

       {/* ABout us */}
       <div className='text-center mt-10 max-w-7xl mx-auto'>
       
  <h1 className='text-gray-900 text-4xl font-bold mb-12 border-b-4 border-green-500 border-x px-2 inline-block '>About Us</h1>
  <p className='text-gray-600 text-center leading-loose	 text-xl mb-4 title'>  
  We are not just a library — we are a space where curiosity meets opportunity. Our mission is to make reading accessible, enjoyable, and meaningful for everyone. With a vast collection of books across every subject, age group, and interest, we aim to inspire a culture of learning, creativity, and lifelong growth.

Whether you're a student preparing for exams, a researcher diving deep into knowledge, or someone who simply loves to get lost in a good story — our library welcomes you. We believe that books have the power to open minds, build confidence, and shape the future.

Here, borrowing a book isn’t just a transaction — it’s the start of a new journey. Our easy borrowing system ensures that you can access the resources you need with just a few clicks.

Join us, and become part of a community that believes in the power of words, the value of education, and the joy of reading.
  
  
  </p>
       </div>

     

 {/* why you Choos ing Us  */}
 <div className='max-w-7xl mx-auto mt-16 '>
 <div className='text-center'>
  <h2 className='text-3xl font-bold text-gray-800 mb-6'>Why Choose Us?</h2>
    <p className='text-gray-600 mb-4'>We are dedicated to providing a seamless and enriching reading experience for all our users.</p>

 </div>
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12'>
 <div className='bg-white shadow-lg rounded-lg hover:border-green-500 border border-transparent transition-all duration-300 p-8 mt-10'>
 <div className='flex justify-center items-center mb-6  '>
      
        <h1  className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack/>}</h1>
        
 </div>
 
 <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
 <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
<div className='flex items-center justify-center py-4'>
   <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

</div>

   


    

 </div>
 <div className='bg-white shadow-lg rounded-lg hover:border-green-500 border border-transparent transition-all duration-300 p-8 mt-10'>
 <div className='flex justify-center items-center mb-6  '>
      
        <h1  className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack/>}</h1>
        
 </div>
 
 <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
 <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
<div className='flex items-center justify-center py-4'>
   <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

</div>

   


    

 </div>
 <div className='bg-white shadow-lg rounded-lg hover:border-green-500 border border-transparent transition-all duration-300 p-8 mt-10'>
 <div className='flex justify-center items-center mb-6  '>
      
        <h1  className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack/>}</h1>
        
 </div>
 
 <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
 <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
<div className='flex items-center justify-center py-4'>
   <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

</div>

   


    

 </div>

 </div>
 

 </div>


{/* FAq */}

<div>
  <Faq/>
</div>



     <footer>
        <div className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base">© 2024 Your Library. All rights reserved.</p>
            <p className="text-base mt-2">Follow us on social media for updates and events.</p>
          </div>
          <div className="flex justify-center mt-4">
          <div className='flex gap-1'>
          {<CiFacebook className="text-white text-2xl hover:text-green-400 transition-colors duration-200" />}
             <a href="#" className="text-white mx-2 hover:text-green-400">Facebook</a>
          </div>
           
            <a href="#" className="text-white mx-2 hover:text-green-400">Twitter</a>
            <a href="#" className="text-white mx-2 hover:text-green-400">Instagram</a>
        </div>
          </div>
        
      </footer>
     



    </div>




  )
}

export default HomePage
