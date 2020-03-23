const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    return res.json('We got yo biz!');
  } catch(err) {
    console.log(err)
    return res.status(500).send({error: "Internal Server Error"})
  }
});

module.exports = router;
