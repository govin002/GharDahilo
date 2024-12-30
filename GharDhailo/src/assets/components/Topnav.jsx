import {useState} from 'react'
import { IoIosClose } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
const Topnav = () => {

  // state to toggle 
  const [IsVisible,setIsVisible]= useState(false);

  //function to make   forms visible
const handleFormClick =(formName) =>
{
  setIsVisible(formName);
};


const handleCloseForm =()=>
{
  setIsVisible(false);
};

const[IsPhoneVisible,setIsPhoneVisible]=useState(false);
const[IsEmailVisible,setIsEmailVisible]=useState(true);

//function to make phone input visible and email input invisible

const handlePhoneClick=()=>{
  setIsPhoneVisible(true);
  setIsEmailVisible(false);

}
const handleEmailClick=()=>{
  setIsPhoneVisible(false);
  setIsEmailVisible(true);
}



  return (
    <>
    <div className=" bg-[#3b006a] text flex flex-row-reverse py-1 justify-between w-100% sm:max-w-100% ">
        <ul className=" flex gap-sm mr-12  py-1 cursor-pointer">
            <li className="text-white text-xs  hover:bg-violet-300 rounded px-1 "> <a href="#become-seller" >Become a Seller</a> </li>
            <li className="text-white  text-xs   hover:bg-violet-300 rounded  px-1"> <a href="#login" onClick={()=>handleFormClick('login')}>Login</a></li>
            <li className="text-white  text-xs   hover:bg-violet-300 rounded px-1 "> <a href="#signup"  onClick={()=>handleFormClick('signup')}>Sign up</a></li>
            <li className="text-white text-xs hover:bg-violet-300 rounded px-1 "><a href="#customer-care"> Customer Cares</a> </li>
        </ul>
    </div>


     {/* form lfor login  */}

     {IsVisible ==='login' && (
       
       <>
       <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full z-[1]'>
  <div className='bg-white border border-violet-600   p-6 rounded-lg w-full max-w-sm'>

   <div className='ml-6 '>
   <div className='flex justify-end  text-lg text-violet-600 hover:text-gray-700 cursor-pointer' onClick={handleCloseForm}>
        <IoIosClose />
      </div>
   <div className='flex justify-around  text-lg mb-2  cursor-pointer'>
      <div className='text-violet-600 text-lg' onClick={handleEmailClick} >Password</div>
      <div className="mx-2 text-violet-600 text-lg">|</div>
      <div className='text-violet-600 text-lg w-1/2  cursor-pointer' onClick={handlePhoneClick}>Phone Number</div>
      
    </div>
   </div>

    <hr className='mb-4 border-violet-600' />

    <div className='space-y-4'>
      {
        IsEmailVisible &&(
          <div className='flex flex-col'>
        <label htmlFor="email" className='text-violet-600'>Email</label>
        <input
          type="text"
          id='email'
          placeholder='Enter your email'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>
        )
      }

     {
      IsPhoneVisible  &&( <div className='flex flex-col'>
        <label htmlFor="phone" className='text-violet-600'>Phone</label>
        <input
          type="phone"
          id='phone'
          placeholder='Enter your phone'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>)
     }
      

      
      <div className='flex flex-col'>
        <label htmlFor="password" className='text-violet-600'> Password</label>
        <input
          type="password"
          id='password'
          placeholder='Enter your password'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <button type='submit' className='w-full bg-violet-600 text-white py-2 rounded text-sm hover:bg-violet-700 transition'>
        Login
      </button>

      <span className='text-violet-400 hover:text-violet-600 text-sm text-center text-sm '>
        Forgot Password?
      </span>
    </div>
  </div>
</div>   
       </>
     )}


      {/* form for signup  */}
    {IsVisible ==='signup' && (
       
       <>
       <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-full z-[1]'>
        
  <div className='bg-white border border-violet-600 p-6 rounded-lg w-full max-w-sm'>
    
    <div className='ml-6'>
     
    <div className='flex  justify-end items-center  hover:text-black text-lg text-violet-600 hover:text-gray-700' onClick={handleCloseForm}>
          <IoIosClose />
        </div>
      
   
      <div className='flex justify-between text-lg mb-2'>
        <div className='text-violet-600 text-lg'>Sign Up</div>
       
      </div>
    </div>

    <hr className='mb-4 border-violet-600' />

    <div className='space-y-2'>
      <div className='flex flex-col'>
        <label htmlFor="FName" className='text-violet-600 text-sm'>First Name</label>
        <input
          type="text"
          id='firstname'
          placeholder='Enter First Name'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="LName" className='text-violet-600 text-sm'>Last Name</label>
        <input
          type="text"
          id='lastname'
          placeholder='Enter Last Name'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="email" className='text-violet-600 text-sm'>Email</label>
        <input
          type="text"
          id='email'
          placeholder='Enter your email'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="password" className='text-violet-600 text-sm'>Password</label>
        <input
          type="password"
          id='password'
          placeholder='Enter your password'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="confirmPassword" className='text-violet-600 text-sm'>Confirm Password</label>
        <input
          type="password"
          id='confirmPassword'
          placeholder='Re-enter your password'
          className="w-full text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 py-2"
          required
        />
      </div>

      <button type='submit' className='w-full text-sm bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition'>
        Sign Up
      </button>

      <span className='text-violet-400 hover:text-violet-600 text-sm text-center block'>
        Already have an Account?
      </span>

      <div className='mt-4 '>
        <button className='w-full text-sm bg-red-600 text-white py-2 rounded flex justify-center items-center hover:bg-red-700 transition gap-2'>
        <FaGoogle />
          Login with Google
        </button>
      </div>
    </div>
  </div>
</div>


         
       </>
     )}  
    </>
  )
}
export default Topnav;

