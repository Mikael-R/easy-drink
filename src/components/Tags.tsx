import React from 'react'

interface Props {
  label: string
  content: string[]
}

const Tags = ({ label, content }: Props) => {
  return (
    <div className='mb-12'>
      <p className='text-lg font-medium mb-1.5'>{label}</p>
      <div className='flex flex-wrap items-center gap-3'>
        {content.map((tag) => (
          <p
            key={tag}
            className='inline-block bg-indigo-200 text-indigo-400 font-bold p-2 rounded-md'
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Tags
