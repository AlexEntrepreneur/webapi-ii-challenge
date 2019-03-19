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

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(data => {
      if (data.length) {
        res.json(data);
      }
      else {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        })
      }
    })
    .catch(err => res.status(500).json({
      error: "The posts information could not be retrieved."
    }));
});



module.exports = router;
