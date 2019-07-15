const express = require("express");
const db = require("./accountDB");

const router = express.Router();

router.get("/", (req, res) => {
    try {
      db.get().then(data => {
        return res.status(200).json({
          data: data
        });
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  });

module.exports = router;