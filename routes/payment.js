const express = require("express");
const router = express.Router();
const stripe = require("stripe")("sk_test_bDRbZ6wDvJuE6lNRK7P6lE7e00j5exhqkb");
const uuid = require("uuid/v4");



router.post(
  "/card",
  async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;

    try {
      const { product, token } = req.body;

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });

      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }

    res.json({ error, status });
  }
);

module.exports = router;

