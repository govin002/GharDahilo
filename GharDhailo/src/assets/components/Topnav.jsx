// import React from 'react'
const Topnav = () => {
  return (
    <div className=" bg-violet-600 text flex flex-row-reverse   ">
        <ul className=" flex gap-4 mr-12 py-1 cursor-pointer">
            <li className="text-white focus:ring-blue-200"> <a href="#become-seller"></a> Become a Seller</li>
            <li className="text-white"> <a href="#login"></a>Login</li>
            <li className="text-white"> <a href="#signup"></a>Sign up</li>
            <li className="text-white"><a href="#customer-care"></a> Customer Care </li>
        </ul>
    </div>
  )
}

export default Topnav