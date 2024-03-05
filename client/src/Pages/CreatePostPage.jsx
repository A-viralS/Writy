import axios from 'axios'

import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

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
const CreatePostPage = () => {
  const [title, setTitle] = React.useState('')
  const [summary, setSummary] = React.useState('')
  const [content, setContent] = React.useState('')
  const [files, setFiles] = React.useState('')
  const [redirect, Setredirect] = React.useState(false)
  const navigate = useNavigate()
  async function createNewPost (e) {
    e.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.append('file', files[0])

    console.log(files)

    try {
      const response = await axios.post('/create', data)
      Setredirect(true)

      if (response.status === 200) {
        const responseData = await response.json()
        console.log('Response from server:', responseData)
      } else {
        console.error(
          'Server responded with an error:',
          response.status,
          response.statusText
        )
      }
    } catch (error) {
      console.error('Error in creating post:', error)
    }
    if (redirect) {
      navigate('/')
    }
  }
  return (
    <form
      action=''
      className='mx-auto'
      onSubmit={createNewPost}
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
      <input
        type='file'
        className='my-2'
        placeholder={'image '}
        onChange={ev => setFiles(ev.target.files)}
      />
      <ReactQuill
        modules={modules}
        formats={formats}
        value={content}
        onChange={newValue => setContent(newValue)}
      />
      <div className='flex justify-center'>
        <button className='custom-btn btn-12  mt-10 '>
          <span>Create post!! </span>
          <span>Done?</span>
        </button>
      </div>
    </form>
  )
}

export default CreatePostPage
