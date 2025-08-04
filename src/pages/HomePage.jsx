import { Link } from 'react-router'
import logos from '../assets/reading.png'
import { FiArrowRight } from 'react-icons/fi'
import { SiBookstack } from "react-icons/si";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { MdOutlineNotificationImportant } from "react-icons/md";
import Faq from '../components/Faq';
import Counter from '../components/Counter';





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
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-green-600 font-semibold hover:bg-green-50 transition-colors duration-200"
            >
              📖 Borrow a Book Now
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ABout us */}
      <div className='text-center mt-10 max-w-7xl mx-auto'>

        <h1 className='text-gray-900 text-4xl font-bold mb-12 border-b-4 border-green-500 border-x px-2 inline-block '>About Our Library</h1>
        <p className='text-gray-600 text-center md:leading-loose	leading-9 text-xl mb-4 title'>
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

              <h1 className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack />}</h1>

            </div>

            <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
            <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
            <div className='flex items-center justify-center py-4'>
              <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

            </div>






          </div>
          <div className='bg-white shadow-lg rounded-lg hover:border-green-500 border border-transparent transition-all duration-300 p-8 mt-10'>
            <div className='flex justify-center items-center mb-6  '>

              <h1 className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack />}</h1>

            </div>

            <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
            <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
            <div className='flex items-center justify-center py-4'>
              <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

            </div>






          </div>
          <div className='bg-white shadow-lg rounded-lg hover:border-green-500 border border-transparent transition-all duration-300 p-8 mt-10'>
            <div className='flex justify-center items-center mb-6  '>

              <h1 className='bg-green-100 text-green-500 p-4 rounded-lg text-5xl'>{<SiBookstack />}</h1>

            </div>

            <h1 className='text-xl font-bold mb-6 text-center'>Thousands of Books, One Click Away</h1>
            <p className='mb-4 text-center text-gray-400 text-base'>From fiction to science, our library offers a rich collection for every reader and every interest.</p>
            <div className='flex items-center justify-center py-4'>
              <button className='px-4 py-3 bg-green-400 rounded-full text-white text-xl '>Get Started</button>

            </div>






          </div>

        </div>


      </div>

      {/* number of Acheivements  */}

      <div>

        <Counter />


      </div>

      {/* testomolgy */}

      <div className='mt-20'>
        <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
<p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
  Thousands of readers, students, and educators rely on our library system every day. 
  Here's what some of our users have to say about their experience using the platform.
</p>
      </div>


      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 py-5'>
        <div className='bg-white shadow-lg   rounded-md px-4 py-2 hover:border-green-500 border border-transparent transition-all duration-300 '>
          <p className='py-1  mb-4 text-base text-gray-900 text-center mt-6'>
            “This library system has completely changed how I study.
             I can easily find and reserve books from my dorm room. No more long lines or confusion!”
          </p>
          <div className='flex gap-3 items-center mb-4'>
            <img  src={logos} className='w-15 h-15 rounded-full'/>
            <p className='font-bold'> Amina Yusuf — University Student</p>
          </div>
        </div>
        <div className='bg-white shadow-lg   rounded-md px-4 py-2 hover:border-green-500 border border-transparent transition-all duration-300 '>
          <p className='py-1  mb-4 text-base text-gray-900 text-center mt-6'>
            “As a teacher, managing classroom reading lists has never been easier. The system is fast, accurate, and helps my students stay on track.”
          </p>
          <div className='flex gap-3 items-center mb-4'>
            <img  src={logos} className='w-15 h-15 rounded-full'/>
            <p className='font-bold'> Mr. Abdi Rahman — High School Teacher</p>
          </div>
        </div>
        <div className='bg-white shadow-lg   rounded-md px-4 py-2 hover:border-green-500 border border-transparent transition-all duration-300 '>
          <p className='py-1  mb-4 text-base text-gray-900 text-center mt-6'>
            “I love how my children can borrow and return books without trouble. The reminders and updates help our whole family stay organized.”
          </p>
          <div className='flex gap-3 items-center mb-4'>
            <img  src={logos} className='w-15 h-15 rounded-full'/>
            <p className='font-bold'> Fatima Ahmed — Parent & Community Member</p>
          </div>
        </div>
        <div className='bg-white shadow-lg   rounded-md px-4 py-2 hover:border-green-500 border border-transparent transition-all duration-300 '>
          <p className='py-1  mb-4 text-base text-gray-900 text-center mt-6'>
            “Keeping track of borrowed books used to be a nightmare. Now, everything is digital and efficient. I can finally focus on helping readers instead of doing paperwork.”
          </p>
          <div className='flex gap-3 items-center mb-4'>
            <img  src={logos} className='w-15 h-15 rounded-full'/>
            <p className='font-bold'> Mohamed Ali — Librarian</p>
          </div>
        </div>


      </div>




      {/* FAq */}

      <div>
        <Faq />
      </div>
      
      {/* stay updated */}

     <div>
  <h1 className='text-3xl font-bold text-center mb-4'>Stay Updated!</h1>
  <p className='text-center text-gray-600 max-w-2xl mx-auto mb-10'>
    Subscribe for New Arrivals & Library Updates
  </p>
  
  <div className='max-w-7xl mx-auto bg-green-400 px-15 py-20 mb-12 rounded-lg'>
    <input
      type="search"
      placeholder="Enter Your Email to Subscribe"
      className="flex-1 min-w-full px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800 mb-4"
    />
    <div className='flex justify-center items-center '>
     <button  className='bg-white px-8 py-2 rounded-full'>Subscribe</button>

    </div>
   
  </div>
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
            <div className='flex gap-1'>
              {<CiTwitter className="text-white text-2xl hover:text-green-400 transition-colors duration-200" />}
              <a href="#" className="text-white mx-2 hover:text-green-400">Twitter</a>
            </div>
            <div className='flex gap-1'>
              {<CiLinkedin className="text-white text-2xl hover:text-green-400 transition-colors duration-200" />}
              <a href="#" className="text-white mx-2 hover:text-green-400">LinkedIn</a>
            </div>

            
          </div>
        </div>

      </footer>




    </div>




  )
}

export default HomePage
