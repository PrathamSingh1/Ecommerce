import React from 'react'
import { IoMdTrash } from 'react-icons/io';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "Top Coat Amon",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 1320,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Dress Bastet",
            size: "L",
            color: "Black",
            quantity: 1,
            price: 910,
            image: "https://picsum.photos/200?random=2"
        },
        {
            productId: 3,
            name: "Robe Nimti",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 1530,
            image: "https://picsum.photos/200?random=2"
        },
    ]
  return (
    <div>
        {cartProducts.map((product, index) => {
            return <div key={index} className='flex items-start justify-between py-4 border-b-2 border-neutral-200 w-full'>
                <div className='flex items-start w-full'>
                    <img className='w-25 h-30' src={product.image} alt={product.name} />
                    <div className='flex items-start px-4 justify-between w-full'>
                            <div className='w-1/2'>
                                <h2 className='mb-2 font-semibold text-md'>{product.name}</h2>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='text-xs text-neutral-500'>Size:</p>
                                    <p className='w-1/2 text-xs text-neutral-800 dark:text-neutral-200 font-medium'>{product.size}</p>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='text-xs text-neutral-500'>Color:</p>
                                    <p className='w-1/2 text-xs text-neutral-800 dark:text-neutral-200 font-medium'>{product.color}</p>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='text-xs text-neutral-500'>Quantity:</p>
                                    <div className='w-1/2 flex items-center space-x-2'>
                                        <p className='text-xs text-neutral-800 dark:text-neutral-200 font-medium'>{product.quantity}</p>
                                        <button
                                            className='bg-neutral-300 dark:bg-neutral-600 rounded-full w-6 h-6 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-400 transition cursor-pointer'
                                            // onClick={() => handleDecrement(product.productId)}
                                            aria-label='Decrement'
                                            type='button'
                                        >-</button>
                                        <button
                                            className='bg-neutral-300 dark:bg-neutral-600 rounded-full w-6 h-6 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-400 transition cursor-pointer'
                                            // onClick={() => handleIncrement(product.productId)}
                                            aria-label='Increment'
                                            type='button'
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-md font-semibold'>{product.price}</h2>
                                <button className='bg-neutral-300 dark:bg-neutral-600 rounded-full w-6 h-6 flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-400 transition cursor-pointer ml-2 mt-4' aria-label='Remove' type='button'>
                                    <IoMdTrash className='h-4 w-4' />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        })}
    </div>
  )
}

export default CartContents