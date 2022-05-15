import React from 'react'

const Category = ({category: {id,title,image}}) => {
  return (
    <a href="#" className="flex flex-col items-center group gap-y-2 text-center p-4 transition hover:bg-purple-50">
       <img src={image} title={title} className="w-12 rounded border-gray-200"/>
       <span className="whitespace-nowrap  text-sm text-gray-700 group-hover:text-brand-color tracking-tight font-semibold">{title}</span>
    </a>
  )
}

export default Category