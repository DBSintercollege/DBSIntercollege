import React from 'react'

function Video() {
  return (
    <div className='pt-30 w-900' >
        <video src="./src/assets/video.mp4" autoPlay  loop playsInline ></video>
    </div>
  )
}

export default Video