require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser");
const app = express();
const port = 8000;
const db_name = 'onlyPans';
const CLIENT_URL=process.env.CLIENT_URL
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

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