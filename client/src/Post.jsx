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
    console.log(author)
  }
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:3000/api/' + cover} alt={cover} />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          {/* <a className='author'> this is {author.name}</a> */}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}
