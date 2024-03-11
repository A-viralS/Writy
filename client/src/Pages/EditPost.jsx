import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../Editor'

const EditPost = () => {
  const [title, setTitle] = React.useState('')
  const [summary, setSummary] = React.useState('')
  const [content, setContent] = React.useState('')
  const [files, setFiles] = React.useState('')
  const [redirect, Setredirect] = React.useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/post/${id}`).then(response => {
      setTitle(response.data.title)
      setSummary(response.data.summary)
      setContent(response.data.content)
    })
  }, [id])

  async function updatePost (e) {
    e.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    if (files?.[0]) {
      data.set('file', files[0])
    }

    await axios.put(`/edit/${id}`, {
      title,
      summary,
      content,
      file: files?.[0]
    })

    Setredirect(true)
  }

  if (redirect) {
    navigate(`/post/${id}`)
  }

  return (
    <form
      action=''
      className='mx-auto flex flex-col items-center w-3/4 h-3/4'
      onSubmit={updatePost}
      encType='multipart/form-data'
    >
      <input
        type='text'
        className='my-4 px-4 py-2 border rounded-md'
        placeholder={'Title '}
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type='text'
        className='my-4 px-4 py-2 border rounded-md'
        placeholder={'Summary '}
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <Editor onChange={setContent} value={content} />
      <button
        type='submit'
        className='bg-blue-500 text-white px-6 py-2 rounded-md mt-4'
      >
        Update post
      </button>
    </form>
  )
}

export default EditPost
