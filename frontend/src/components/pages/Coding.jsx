import React from 'react'
import { Link } from 'react-router-dom'
function Coding() {
    return (
        <>
            <h1>Coding</h1>
            <div className="main">
                <div className="container d-lg-grid gap-5 align-items-center justify-content-center" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                    <div className="blog">
                        <h1><Link to='/coding/html'>Learn HTML</Link></h1>
                        <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                    </div>
                    <div className="blog">
                        <h1><Link to='/coding/css'>Learn CSS</Link></h1>
                        <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                    </div>
                    <div className="blog">
                        <h1><Link to='/coding/node'>Learn NODE.js</Link></h1>
                        <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coding