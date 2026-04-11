import React from 'react'

const Badge = ({badgeName ,className}) => {
  return (

    <div className={`bg-secondary absolute top-4 lft-4 text-white py-3 px-8 w-22.5 ${className}`}>{badgeName}</div>
  
  )
}

export default Badge