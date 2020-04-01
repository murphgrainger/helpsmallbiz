const express = require('express');
const router = express.Router();

const Q = require('../db/queries');

router.get('/', async (req,res) => {
  try {
    const all = await Q.getAllGoals();
    return res.json(all);
  }
  catch (err) {
    console.log(err);
    return res.status(500).send({error: "Error retreiving businesses."})
  }
});

router.post('/add', async (req, res) => {
  try {
    const newBusiness = await Q.addNewGoal(req.body);
    return res.json({message:"Successfully added business", status:200});
  } catch (err) {
    console.log(err);
    return res.status(500).send({error: "Internal Server Error"})
  }
});

router.get('/:id', async (req, res) => {
  try {
    const goalPledges = await Q.getGoalPledges(req.params.id);
    return res.json({pledges: goalPledges, status:200})
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({error: "Error retrieving pledges."})
  }
})

module.exports = router;
