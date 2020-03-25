const express = require('express');
const router = express.Router();

const Q = require('./db/queries');

router.get('/', async (req,res) => {
  try {
    const all = await Q.getAllBusinesses();
    return res.json(all);
  }
  catch (err) {
    return res.status(500).send({error: "Error retreiving businesses."})
  }
});

router.post('/add', async (req, res) => {
  try {
    const newBusiness = await Q.addNewBusiness(req.body);
    return res.status(200).json({message:"Successfully added business", status:200});
  } catch (err) {
    console.log(err);
    return res.status(500).send({error: "Internal Server Error"})
  }
});

module.exports = router;
