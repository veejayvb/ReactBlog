import React from 'react'
import LinePost from './LinePost'

const Feed = ({posts}) => {
  return (
    <>
        {posts.map((post)=> (
            <LinePost key ={post.id} post={post}/>
        ))}
    </>
  )     
}

export default Feed