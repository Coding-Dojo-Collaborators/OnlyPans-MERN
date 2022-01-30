require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser");
const app = express();
const port = 8000;
const db_name = 'onlyPans';
const CLIENT_URL='http://localhost:3000'
const stripe = require("stripe")('sk_test_51KNNztKhZMSaEpADteCgOnBWH0FuOJH7aBPFiuuloaAWBr6iLA1fW3DksmJwsE4LyXNtFYqi0ShMQoRMsBk1HPUj00G0BjCeOt')

app.use(cors({
    credentials:true,
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
require('./server/config/mongoose.config')(db_name);
require('./server/routes/onlyPans.routes')(app)
app.listen(port, () => console.log(`Listening on port: ${port}`)); 


// subscriptions
const YOUR_DOMAIN = 'http://localhost:8000'
    const storeItems = new Map([
        [1, {  priceInCents: 10000, name: "Learn React Today"}],
        [2, { priceInCents: 20000, name: "Learn CSS Today" }],
      ])
      app.post("/api/create-checkout-session", async (req, res) => {
        try {
          const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                  // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                  price:'price_1KNSJrKhZMSaEpADbgJVgeiZ',
                  quantity: 1,
                },
              ],
            payment_method_types: ["card"],
            mode: "subscription",
            
            success_url: `${CLIENT_URL}/success`,
            cancel_url: `${CLIENT_URL}/checkout`,
          })
          res.json({ url: session.url })
        } catch (e) {
          res.status(500).json({ error: e.message })
        }
      })