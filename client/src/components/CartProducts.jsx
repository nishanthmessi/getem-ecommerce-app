import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { getProductData } from "../products"
import { Trash2 } from "react-feather"

const CartProducts = (props) => {
  const cart = useContext(CartContext)
  const id = props.id
  const quantity = props.quantity
  const productData = getProductData(id)

  return (
    <>  
		  <li className="flex flex-col py-6 sm:flex-row sm:justify-between text-gray-800">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32" src={productData.img} alt="product img" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">{productData.name}</h3>
              <p className="text-md font-semibold">${productData.price * quantity}</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">{quantity} total</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
          <button onClick={() => cart.deleteFromCart(id)} className="btn btn-sm btn-error">
            <Trash2 className="w-5 mr-1 mb-1"/>
              Remove
          </button>
					</div>
				</div>
			</div>
		  </li>
    </>
  )
}

export default CartProducts