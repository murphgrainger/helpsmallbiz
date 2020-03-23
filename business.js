const express = require('express');
const router = express.Router();

const Q = require('./db/queries');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newBusiness = await Q.addNewBusiness(req.body);
    return res.status(200).json({message:"Successfully added business", status:200});
  } catch (err) {
    console.log(err)
    return res.status(500).send({error: "Internal Server Error"})
  }
});

module.exports = router;
