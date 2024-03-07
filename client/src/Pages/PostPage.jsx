import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Post from '../Post'
import { formatISO9075 } from 'date-fns'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'
const PostPage = () => {
  const [postInfo, setPostInfo] = React.useState([])
  const { id } = useParams()

  const { userInfo } = useContext(UserContext)
  useEffect(() => {
    axios.get(`/post/${id}`).then(response => {
      setPostInfo(response.data)
      console.log('POSTINFO', response.data)
    })
  }, [])

  const formattedDate = postInfo.createdAt
    ? formatISO9075(new Date(postInfo.createdAt))
    : ''

  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold underline text-center'>
          {postInfo.title}
        </h1>
        <img
          src={`http://localhost:3000/${postInfo.cover}`}
          alt={postInfo.cover}
          className='max-h-[500px] text-center object-cover rounded-md shadow-xl mx-auto'
        />
      </div>
      <p className='text-lg font-light italic'>{formattedDate}</p>
      <div className='italic font-'>by @{postInfo.author?.name}</div>
      {userInfo && userInfo.id === postInfo.author?._id && (
        <div className='flex justify-center'>
          <Link
            className='bg-green-500 p-2 m-2 rounded-md'
            to={`/edit/${postInfo._id}`}
          >
            Edit
          </Link>
          <button className='bg-red-500 p-2 m-2 rounded-md'>Delete</button>
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  )
}

export default PostPage
