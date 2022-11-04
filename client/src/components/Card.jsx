import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const Card = ({ product }) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <>
    <div className="w-full lg:max-w-sm max-w-xs bg-white rounded-lg shadow-md mt-6">
      <img className="rounded-t-lg" src={product.img} alt="product_image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 my-2">{product.name}</h5>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900">${product.price}</span>
          { productQuantity > 0 ?  
            <>
            <div className='flex flex-col items-center'>
              <div className='flex gap-4 items-center'>
                <div>
                  <p className='text-gray-500 font-semibold'>In Cart: {productQuantity}</p>
                </div>
                <div className='flex gap-2'>
                  <button onClick={() => cart.addOneToCart(product.id)} className='btn btn-sm btn-circle btn-success'>+</button>
                  <button onClick={() => cart.removeOneFromCart(product.id)} className='btn btn-sm btn-circle btn-warning'>-</button>
                </div> 
              </div>
              <div className='mt-6'>
                <button onClick={() => cart.deleteFromCart(product.id)} className='btn btn-sm btn-error'>Empty Item</button>
              </div>
            </div>
            </>
            :
            <button className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => cart.addOneToCart(product.id)}>Add to cart</button>
          } 
        </div>
      </div>
      </div>
    </>
  )
}

export default Card