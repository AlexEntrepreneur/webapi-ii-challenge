const express = require('express');
const db = require('./data/db.js');

const router = express.Router();

router.use(express.json());

//====== ENDPOINTS ======//
router.get('/', (req, res) => {
  db.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({
      error: "The posts information could not be retrieved."
    }));
});

module.exports = router;
