import DeskMat from '../src/img/deskmat.jpeg'
import CoffeeMug from '../src/img/coffee-cup.jpeg'
import DogLeash from '../src/img/dogleash-white.png'
import StudioCollar from '../src/img/studiocollar.png'
import MatteNote from '../src/img/note-matte.jpeg'
import Note from '../src/img/note.jpeg'

const productsArray = [
  {
    id: 'price_1LziZESH8BwVG4ydtOUU2y8w',
    name: 'Desk Mat',
    img: DeskMat,
    price: 30
  },
  {
    id: 'price_1LziZqSH8BwVG4ydfpBUFbGr',
    name: 'Coffee Mug',
    img: CoffeeMug,
    price: 15
  },
  {
    id: 'price_1LzicKSH8BwVG4ydDvxqbug9',
    name: 'Dog Leash',
    img: DogLeash,
    price: 30
  },
  {
    id: 'price_1LzicnSH8BwVG4ydm4uuJGnU',
    name: 'Studio Dog Collar',
    img: StudioCollar,
    price: 25
  },
  {
    id: 'price_1LzidASH8BwVG4ydFVVCqZrv',
    name: 'Matte Black Notebook',
    img: MatteNote,
    price: 7
  },
  {
    id: 'price_1LzidXSH8BwVG4ydBI9xQxGX',
    name: 'Red Notebook',
    img: Note,
    price: 7
  }
]

const getProductData = (id) => {
  let productData = productsArray.find(product => product.id === id)

  if(productData == undefined) {
    console.log("Product data is not found" + id)
    return undefined
  }

  return productData;
}

export { productsArray, getProductData }