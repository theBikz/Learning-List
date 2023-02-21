const express = require("express");
const router = express.Router();

const learningList = require("../models/list");

router.get("/v1/list", async (req, res) => {
  try {
    const getList = await learningList.find();
    res.json(getList);
  } catch (e) {
    res.send(e);
    console.log(e);
  }
});

router.get("/v1/list/:id", async (req, res) => {
    try{
        const getItem = await learningList.findById(req.params.id)
        res.json(getItem)
    } catch(e){
        res.send(e)
    }
})

router.post("/v1/list", async (req, res) => {
  try {
    const list = new learningList({
      topic: req.body.topic,
      channel: req.body.channel,
      rating: req.body.rating,
      status: req.body.status,
    });
    const postList = await list.save()
    res.json(postList);
  } catch (e) {
    res.send(e);
  }
});

router.put("/v1/list/:id", async (req, res) => {
    try{
        const item = await learningList.findById(req.params.id)

        if(!item) res.sendStatus(404)

        const newItem = new learningList({
            topic: req.body.topic ?? item.topic,
            channel: req.body.channel ?? item.channel,
            rating: req.body.rating ?? item.rating,
            status: req.body.status?? item.status,
            _id: item._id
          })

         const updateList = await item.update(newItem, { runValidators: true })
       
        res.json(updateList)

    } catch(e){
        res.send(e)
    }
})

router.delete("/v1/list/:id", async (req,res) => {
    try{
        const item = await learningList.findById(req.params.id)
        console.log(item)
        const deleteList = await item.delete()
        res.json(deleteList)
    } catch(e) {
        res.send(e)
    }
})

module.exports = router;
