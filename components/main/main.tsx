import React from 'react'
import data from "@/components/data/cardInBar"
import Card from '../card/Card'
type Props = {}

function main({ }: Props) {
  return (
    <div className='h-screen bg-[url("../public/pics/2.png")] bg-cover relative' >
      <div className='w-full bg-gray-900 backdrop-blur-lg bg-opacity-10 h-80 absolute top-[-100px] border-t border-b border-gray-800 flex justify-center items-center'>
        <div className='w-5/6 h-full flex '>

          <div className='h-full py-10 px-20 w-2/3 ml-20 '>
            <p className='text-white font-bold text-[3rem] text-start  '>Let's make the <span className='text-orange-500'>Web</span> <br /> <span className='text-purple-600'>Prettier</span></p>
            <p className='text-gray-400'>Try it for yourself, and share with us what you've built!</p>
          </div>
          <div className='flex w-full  justify-center py-5'>
            {data.map(item => <Card DataSet={item} key={item.id}></Card>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default main
