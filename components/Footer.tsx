import React from 'react'
import data from "components/data/communityData"
import Card from './card/Card'
type Props = {}

function Footer({}: Props) {
  return (
    <div className='bg-[url("../public/pics/3.png")] bg-cover h-screen'>
        <div className='bg-[url("../public/pics/footer.png")] bg-cover  w-full flex items-center flex-col h-[900px]' >
        <div>
          <h1 className='text-white text-[3rem] text-center mt-80'>community</h1>
          <p className='text-gray-500 text-xl'> Get involved in our community. Everyone is welcome!</p>
        </div>
        <div className='w-full flex justify-center mt-16'>
          {data.map(item=><Card DataSet={item} key={item.id}></Card>)}
        </div>
      </div>
    </div>
  )
}

export default Footer
