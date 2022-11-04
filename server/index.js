const express = require('express')
const cors = require('cors')
const env = require('dotenv')
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.STRIPE_TEST_API_KEY)

env.config()
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

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

app.listen(process.env.PORT, () => console.log(`listening to port: ${process.env.PORT}`))