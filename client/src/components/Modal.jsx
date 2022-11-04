import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProducts from "./CartProducts"
import EmptyCart from '../img/empty-cart.png'

const Modal = () => {
  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const checkout = async () => {
    await fetch('https://getem-ecommerce-app.herokuapp.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart.items }),
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if(res.url) {
        window.location.assign(res.url)
      }
    })
  }

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal text-gray-800">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {productsCount > 0 ?
            <>
              <p>Items in cart:</p>
              <ul className="flex flex-col divide-y divide-gray-700">
                {cart.items.map((currentProduct, index) => (
                  <CartProducts key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProducts>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-4">
                <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                <button onClick={checkout} className="btn btn-success">Checkout</button>
              </div>
            </>
          :
            <>
              <div className="flex flex-col items-center">
                <img src={EmptyCart} className='w-16 mb-6' alt="empty_cart" />     
                <h1 className="font-semibold text">Cart is empty</h1>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Modal