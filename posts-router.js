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

router.delete('/:id', (req, res) => {
  db.findById(req.params.id)
    .then(data => {
      if (data.length) {
        db.find()
          .then(data => {
            const newData = data.filter(d => d.id !== Number(req.params.id))
            res.json(newData);
          })
      }
      else {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        })
      }
    })
    .catch(err => res.status(500).json({
      error: "The post could not be removed"
    }));
});



module.exports = router;
