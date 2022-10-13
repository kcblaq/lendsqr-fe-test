import React from 'react'

interface paginate {
    currentPage:number
    maxPageLimit: number
    minPageLimit: number
}

function Paginate(props:paginate) {
    const {currentPage, maxPageLimit, minPageLimit} = props
  return (
    <div>Paginate</div>
  )
}

export default Paginate