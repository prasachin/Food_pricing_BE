const express = require("express");
const router = express.Router();
const calculatePrice = require("../services/priceCalculator");

router.post("/calculatePrice", async (req, res) => {
  const { zone, organization_id, total_distance, item_type } = req.body;

  const baseDistance = 5;//All this data have to fetch from the backend 
  
  const kmPrice = item_type === "perishable" ? 1.5 : 1;
  const fixPrice = 10;

  const totalPrice = await calculatePrice(
    baseDistance,
    kmPrice,
    fixPrice,
    total_distance
  );

  res.json({ total_price: totalPrice });
});

module.exports = router;
