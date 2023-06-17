import React from 'react'
import { Link } from 'react-router-dom'

const LinePost = ({post}) => {
  return (
    <article className='post'>
        <Link to={`post/${post.id}`}>
            <h3>{post.title}</h3>
            <p className='postDate'>{post.dateTime}</p>
       </Link>
       <p className='postBody'>
            {(post.body) < 25 
                ? post.body 
                : `${(post.body).slice(0,25)}...` }
        </p>
    </article>
  )
}

export default LinePost