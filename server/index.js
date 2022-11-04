const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const stripe = require('stripe')('sk_test_51LziRvSH8BwVG4ydBvlIWWwVFWSfsPujDlTKBsjhR0wUg83q4w2l9YBGHUhNuVGjIzyvUzJhmxbdUsfn7GBhpH9700ofZ9Hs61')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())
// app.use(express.json())

app.get('/', (req,res) => {
  res.send('Home')
})

app.post('/checkout', async(req, res) => {
  const items = req.body.items
  let lineItems = []

  items.forEach((item) => {
    lineItems.push(
      {
      price: item.id,
      quantity: item.quantity
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  })

  res.send(JSON.stringify({
    url: session.url
  }))
})

app.listen(8000, () => console.log("listening to port 8000"))