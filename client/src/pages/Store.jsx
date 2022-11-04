import Card from "../components/Card"
import Footer from "../components/Footer"
import { productsArray } from '../products.js'

const Store = () => {
  return (
    <>
    <div className="container mx-auto pt-20">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {productsArray.map((product, index) => (
          <Card key={index} product={product}/>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Store