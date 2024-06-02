import React from 'react'

function Navbar() {
  let h=false;
  return (
    <div className='main lg:flex  md:flex  flex-wrap justify-between items-center px-4 bg-[#346789] font-bold py-3 shadow-md static top-0'>
        <div className='left flex items-center space-x-3 justify-center'>
            <img className='w-12' src='https://cdn.iconscout.com/icon/free/png-512/free-movie-1629753-1383466.png?f=webp&w=512' alt='image'/>
            <h2 className='text-2xl text-white'>MovieShow</h2>
        </div>
        <div className='right cursor-pointer'>
            <ul className='flex space-x-4  text-white justify-center'>
                <li>Home</li>
                <li>About</li>
                <li onClick={()=>{
                  prompt("write your name")
                  h=true;
                }}>Signup</li>
                <li onClick={()=>{
                  if(h==true){
                    alert("You have already written your name");
                  }
                  else{
                    alert("Sign up first");
                  }
                }}>login</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar