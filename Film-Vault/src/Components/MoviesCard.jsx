import React from 'react'
import poster from '../poster.png'

function MoviesCard() {
  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 cursor-pointer ease-in' style={{backgroundImage: `url(${poster} )`}}>
      
    </div>
  )
}

export default MoviesCard
