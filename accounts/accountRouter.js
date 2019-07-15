const express = require("express");
const db = require("./accountDb");

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

router.post("/", (req, res) => {
  try {
    db.insert(req.body).then(data => {
      return res.status(201).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.put("/:id", (req, res) => {
  try {
    db.update(req.params.id, req.body).then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", (req, res) => {
  try {
    db.remove(req.params.id).then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
