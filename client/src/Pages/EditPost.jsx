import axios from 'axios'

import React, { useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../Editor'

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }]
  ]
}
const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'list',
  'indent',
  'size',
  'header',
  'link',
  'image',
  'video',
  'color',
  'background',
  'clean'
]
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
    console.log('above put req')

    await axios.put('/edit', { id, ...data })
    console.log('entering put request in client ')
    Setredirect(true)
  }
  if (redirect) {
    navigate(`/post/${id}`)
  }
  return (
    <form
      action=''
      className='mx-auto'
      onSubmit={updatePost}
      enctype='multipart/form-data'
    >
      <input
        type='text'
        className='my-2'
        placeholder={'Title '}
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <input
        type='text'
        className='my-2'
        placeholder={'Summary '}
        value={summary}
        onChange={ev => setSummary(ev.target.value)}
      />
      <Editor onChange={setContent} value={content} />
      <button type='submit' className=''>
        {' '}
        Update post{' '}
      </button>
    </form>
  )
}

export default EditPost
