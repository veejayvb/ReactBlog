import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../Context/DataContext'

const Post = () => {
  const {posts, handleDelete } = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find((post)=> (post.id).toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
       {post && 
          <>
          <h2>{post.title}</h2>
          <p className='postDate'> {post.dateTime}</p>
          <p className='postBody'>{post.body}</p>
          <button className='deleteButton' onClick={()=> handleDelete(post.id)}>Delete</button>
             <Link to={`/post/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
          </>
        }{
          !post && 
            <>
            <h2>Post not found</h2>
            <p>Well That's disappointing</p>
            <p>
              <Link to= '/'> Vist Our Home Page </Link>
            </p>
            </>
        }
        </article>
    </main>
  )
}

export default Post