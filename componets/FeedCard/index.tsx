import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'


const FeedCard: React.FC = () => {
  return (
    <div className='border border-gray-800 border-l-0 border-r-0 p-4 hover:bg-gray-800 transition-all cursor-pointer'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-1'>
          <Image
            className='border-black rounded-full'
            src="https://avatars.githubusercontent.com/u/132253687?s=96&v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className='col-span-11 px-4 text-sm'>
          <h5>Shaktidube</h5>
          <pre className='mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing <br />elit. Dolor inventore alias dolore quas id culpa.</pre>
          <div className="flex mt-5 space-x-4">
            <div className="flex items-center justify-center px-5 py-2 text-lg  rounded-full w-fit hover:bg-black hover:text-white">
              <BiMessageRounded />
            </div>
            <div className="flex items-center justify-center px-5 py-2 text-lg  rounded-full w-fit hover:bg-black hover:text-white">
              <AiOutlineRetweet />
            </div>
            <div className="flex items-center justify-center px-5 py-2 text-lg  rounded-full w-fit hover:bg-black hover:text-white">
              <AiOutlineHeart />
            </div>
            <div className="flex items-center justify-center px-5 py-2 text-lg  rounded-full w-fit hover:bg-black hover:text-white">
              <BiUpload />
            </div>
          </div>

        </div>

      </div>
    </div>
  )

}

export default FeedCard