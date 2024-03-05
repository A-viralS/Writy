import React, { useEffect } from 'react'
import Post from '../Post'
import axios from 'axios'
const IndexPage = () => {
  const [posts, setPosts] = React.useState([])
  useEffect(() => {
    axios.get('/posts').then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }, [])
  return <div>{posts.length > 0 && posts.map(post => <Post {...post} />)}</div>
}

export default IndexPage
