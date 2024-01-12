import React from 'react'

function Css() {
    const vid1 = '<iframe src="https://www.youtube.com/embed/wRNinF7YQqQ?si=8yO5ujezzy4OWcl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

    return (
      <>
      <div className="main">
        <div className="page">
            <h1>Learn Css in 1 Hour</h1>
            <div className="container">
                <div dangerouslySetInnerHTML={{__html : vid1}}></div>
            </div>
        </div>
      </div>
      </>
    )
}

export default Css