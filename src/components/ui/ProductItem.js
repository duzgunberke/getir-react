import React from 'react'
import {FiPlus} from 'react-icons/fi';

export default function ProductItem({product}) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative items-center p-3 text-center text-sm font-semibold">
       <button className="absolute shadow-md top-3 right-3 bg-white w-8 h-8 flex items-center text-brand-color justify-center border rounded-lg border-gray-200 hover:bg-brand-color hover:border-brand-color hover:text-brand-yellow transition-colors">
           <FiPlus size={16} />
       </button>
       <img src={product.image} alt={product.title} />
       <div className=" text-brand-color">{product.price}</div>
       <div className=" text-gray-900">{product.title}</div>
       <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
