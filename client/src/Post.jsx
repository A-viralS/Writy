import React from 'react'

const Post = () => {
  return (
    <div className='posts lg:flex gap-7 py-5'>
      <div>
        <img
          src='https://cdn.vox-cdn.com/thumbor/tYF0ffqFjqaG3SqUA4QBVEslAmY=/0x0:1920x1080/500x281/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72760001/231006_xinmei_Vox_Neuralink_final.0.jpg'
          alt='postimg'
          className='h-[400px] sm:w-[600rem] lg:w-[200rem] hover:scale-105 transitation-all duration-300 ease-in-out'
        />
      </div>
      <div>
        <h2 className='text-4xl font-bold my-2'>
          Elon Musk wants to merge humans with AI. How many brains will be
          damaged along the way?
        </h2>
        <p className='my-3 mx-auto text-gray-400 italic'>
          <a href='' className='text-blue-800'>
            Aviral Soni
          </a>
          <time> 2 days ago</time>
        </p>

        <p>
          Launched in 2016, the company revealed in 2019 that it had created
          flexible “threads” that can be implanted into a brain, along with a
          sewing-machine-like robot to do the implanting. The idea is that these
          threads will read signals from a paralyzed patient’s brain and
          transmit that data to an iPhone or computer, enabling the patient to
          control it with just their thoughts — no need to tap or type or swipe.
        </p>
      </div>
    </div>
  )
}

export default Post
