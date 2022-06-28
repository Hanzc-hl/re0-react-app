const express = require("express");
const router = express.Router();
const blogOperation = require("../db/blog");

router.put("/blog", async (req, res) => {
  const { body } = req;
  async function addBlog({ db, coll }) {
    try {
      const record = {blogText: body};
      const result = await coll.insertOne(record);
      res
      .status(200)
      .json({ code: 0, message: "success", data: result });
    } catch (e) {
      res.status(200).json({ code: 1, message: e });
    }
  }
  await blogOperation(addBlog);
});

router.get("/blog/:id", (req, res) => {
  const { params } = req;
  async function getBlog({ db, coll }) {
    try {
      const query = { _id: params.id };
      const options = {_id: 1, blogText: 1};
      const result = await coll.findOne(query, options);
      res
        .status(200)
        .json({ code: 0, message: "success", data: result });
    } catch(e) {
      res.status(200).json({ code: 1, message: e });
    }
  }
  await blogOperation(getBlog);
});

router.post("/blog/:id", (req, res) => {
  const { body, params } = req;
  async function editBlog({ db, coll }) {
    try {
      const query = { _id: params.id };
      const record = {blogText: body};
      const result = await coll.updateOne(query, record);
      res
        .status(200)
        .json({ code: 0, message: "success", data: result });
    } catch (e) {
      res.status(200).json({ code: 1, message: e });
    }
  }
  await blogOperation(editBlog);
});

module.exports = router;
