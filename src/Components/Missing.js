import React from 'react'
import { Link } from 'react-router-dom' 

const Missing = () => {
  return (
    <main className='Missing'>
        <h2>404 Error Page Not Found</h2>
            <p>Well That's disappointing</p>
            <p>
              <Link to= '/'> Vist Our Home Page </Link>
            </p>
    </main>
  )
}

export default Missing