import React from 'react'

function Html() {
    const vid1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/FQdaUv95mR8?si=2GZKL6cB7bcn2c5T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

    return (
      <>
      <div className="main">
        <div className="page">
            <h1>HTML</h1>
            <div className="container">
                <div  dangerouslySetInnerHTML={{__html : vid1}}></div>
            </div>
        </div>
      </div>
      </>
    )
}

export default Html