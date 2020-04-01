const express = require('express');
const router = express.Router();

const Q = require('./db/queries');

router.post('/:id', async (req, res) => {
  try {
    const addSupport = await Q.addSupport(req.params.id, req.body);
    const updateGoalAmount = await Q.updateGoalAmount(req.params.id, req.body.amount);
    return res.status(200).json({message:"Successfully added support", status:200});
  } catch (err) {
    console.log(err);
    return res.status(500).send({error: "Internal Server Error"})
  }
});

module.exports = router;
