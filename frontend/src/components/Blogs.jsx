import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <>
      <h1>Blog</h1>
      <div className="container blogs">
        <div className="blog">
          <h1><Link to='/coding/react-guide'>Mastering React: A Comprehensive Guide for Beginners</Link></h1>
          <p>Welcome to the exciting world of React! Whether you're a newcomer to web development or looking to enhance your skills, React is a powerful JavaScript library that can help you build dynamic and interactive user interfaces. In this comprehensive guide, we'll take you through the fundamentals of React, from the basics to more advanced concepts, to empower you on your journey to becoming a React expert.</p>
        </div>
        
        <div className="blog">
          <h1><Link to='/coding/react-guide'>Mastering React: A Comprehensive Guide for Beginners</Link></h1>
          <p>Welcome to the exciting world of React! Whether you're a newcomer to web development or looking to enhance your skills, React is a powerful JavaScript library that can help you build dynamic and interactive user interfaces. In this comprehensive guide, we'll take you through the fundamentals of React, from the basics to more advanced concepts, to empower you on your journey to becoming a React expert.</p>
        </div>
      </div>
    </>
  )
}

export default Blogs