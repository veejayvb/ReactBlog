import React from 'react'
import { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../Context/DataContext'

const EditPost = () => {
    const {posts, handleEditUpdate, editedTitle,editedBody, setEditedTitle, setEditedBody} = useContext(DataContext)
    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    useEffect(()=> {
        if(post) {
            setEditedTitle(post.title)
            setEditedBody(post.body)
        }
    },[post,setEditedTitle,setEditedBody])
  return (
    <main className='NewPost'> 
        { editedTitle && 
         <>
            <h2>Edit Post</h2>
            <form className='newPostForm' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="postTitle"> postTitle</label>
            <input 
                type="text"
                id='postTitle'
                required
                placeholder='add PostTitle'
                value= {editedTitle}
                onChange={(e)=> setEditedTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post : </label>
                <textarea
                type="textarea"
                id='postBody'
                required
                value= {editedBody}
                onChange = {(e)=>setEditedBody(e.target.value)}
                />
                <button type='submit' onClick={()=>handleEditUpdate(post.id)}>Submit</button>
            </form>
        </>
        }
        {!editedTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
    </main>
        
    
  )
}

export default EditPost