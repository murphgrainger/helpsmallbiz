const express = require('express');
const router = express.Router();

const Q = require('../db/queries');

router.get('/', async (req,res) => {
  try {
    let goalsAndPledges = [];
    const allGoals = await Q.getAllGoals();

    for (goal of allGoals) {
      const response = await Q.getGoalPledges(goal.id);
      goal.pledges = response;
      goalsAndPledges.push(goal);
    }
      return res.json(goalsAndPledges);
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
