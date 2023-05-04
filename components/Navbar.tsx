import Link from 'next/link'
import React from 'react'
type Props = {}

function NavbarLanding({ }: Props) {
  return (

    <div className=' text-white w-2/3 border-white backdrop-filter  m-auto flex justify-between '>
      <div className='flex'>
        <p className='m-5'>icon</p>
        <p className='m-5'>brand</p>
      </div>
      <div className='flex opacity-100 ' >
        <Link href="#" className='m-5 opacity-90  '>link </Link>
        <Link href="#" className='m-5'>link </Link>
        <Link href="#" className='m-5'>link </Link>
        <Link href="#" className='m-5'>link</Link>
      </div>
      <div className='flex'>
        <p className='m-5'>signup</p>
        <div className='m-5'>login</div>

      </div>

    </div>

  )
}

export default NavbarLanding
