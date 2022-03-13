import React from 'react'

interface Props {
  label: string
  children: React.ReactNode
}

const CardLabel = ({ label, children }: Props) => {
  return (
    <div className='mb-12'>
      <p className='text-lg font-medium mb-1.5'>{label}</p>
      <div className='flex flex-wrap items-center gap-3'>{children}</div>
    </div>
  )
}

export default CardLabel
