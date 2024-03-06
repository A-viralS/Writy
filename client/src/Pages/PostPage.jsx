import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Post from '../Post'
import { formatISO9075 } from 'date-fns'

const PostPage = () => {
  const [postInfo, setPostInfo] = React.useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/post/${id}`).then(response => {
      setPostInfo(response.data)
      console.log('POSTINFO', response.data)
    })
  }, [id])

  return (
    <div>
      <div>
        {' '}
        <h1 className='text-3xl font-bold underline text-center'>
          {postInfo.title}
        </h1>
        <img
          src={`http://localhost:3000/${postInfo.cover}`}
          alt={postInfo.cover}
          className='  max-h-[500px]  text-center object-cover rounded-md shadow-xl mx-auto'
        />
      </div>
      <p className=' text-lg font-light italic'>
        {formatISO9075(new Date(postInfo.createdAt))}
      </p>
      <div className='italic font-serif'>by @{postInfo.author.name}</div>

      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  )
}

export default PostPage
