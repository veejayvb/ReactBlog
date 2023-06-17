import React from 'react'
import { useContext } from 'react';
import DataContext from '../Context/DataContext'

const NewPost = () => {
  const {postTitle, setPostTitle, postBody,setPostBody, handleAddPost} = useContext(DataContext)
   return (
    <main className='NewPost'> 
        <h2>NewPost</h2>
        <form className='newPostForm' onSubmit={handleAddPost}>
          <label htmlFor="postTitle"> postTitle</label>
          <input 
            type="text"
            id='postTitle'
            required
            placeholder='add PostTitle'
            value= {postTitle}
            onChange={(e)=> setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post : </label>
            <textarea
             type="textarea"
             id='postBody'
             required
             value= {postBody}
             onChange = {(e)=>setPostBody(e.target.value)}
             />
             <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost