import React from 'react'

function Node() {
    const vid1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ENrzD9HAZK4?si=o4xUMjiomk06QkSB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

    return (
      <>
      <div className="main">
        <div className="page">
            <h1>Node</h1>
            <div className="container">
                <div  dangerouslySetInnerHTML={{__html : vid1}}></div>
            </div>
        </div>
      </div>
      </>
    )
}

export default Node