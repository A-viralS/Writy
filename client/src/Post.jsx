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
            className='h-48 w-2/3 object-cover rounded-xl shadow-md  shadow-black'
          />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2 className=' uppercase font-2xl font-extrabold text-white'>
            {title}
          </h2>
        </Link>
        <p className='info'>
          <a className='author italic'>By {author.name}</a>
          <span className='line-break'>&nbsp;</span>
          <span>
            <time className='font-sm text-black font-thin'>
              {formatISO9075(new Date(createdAt))}
            </time>
          </span>
        </p>

        <p className='summary font-mono font-bold'>{summary}</p>
      </div>
    </div>
  )
}
