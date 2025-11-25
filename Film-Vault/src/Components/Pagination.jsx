import React from 'react'

function Pagination({handlePrev,handleNext ,pageNo}) {

  // Pagination Component
  return (
    <div className='bg-gray-600 p-2 mt-2 text-blue-300 flex justify-center'>
      <div className='px-8' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
      <div className='font-bold'>{pageNo}</div>
      <div className='px-8' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
