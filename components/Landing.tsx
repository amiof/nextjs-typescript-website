import Image from 'next/image'
import React from 'react'
import NavbarLanding from './Navbar'
type Props = {}

function Landing({ }: Props) {
  return (
    <div className="bg-[url('../public/pics/landing-bg.jpg')] h-screen   bg-no-repeat bg-cover bg-center">

      <div className='w-full m-auto border-gray-700  border-b h-fit  bg-black bg-opacity-30 backdrop-blur-lg sticky top-0 z-10 '>
      <NavbarLanding ></NavbarLanding >
      </div>
    </div>
  )
}

export default Landing
