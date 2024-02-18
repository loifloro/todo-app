import React from 'react'

export default function Title({ content } : { content: string }) {
  return (
    <h1 
        className="
            uppercase
            tracking-[1rem]
            font-bold
            text-5xl
            text-white
        "
    >
        {content}
    </h1>
  )
}
