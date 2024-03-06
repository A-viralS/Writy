import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'

export default function Post ({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author
}) {
  {
    console.log('author', author)
  }
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img
            src={'http://localhost:3000/' + cover}
            alt={cover}
            className='h-48 w-2/3 object-cover rounded-md shadow-xl'
          />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a className='author'> this is {author.name}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}
