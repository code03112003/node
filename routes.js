const express = require('express');
const router = express.Router();
const Item = require('./models/model');

//create
router.post('/',async (req,res) =>{
  try{
    const item = new Item(req.body);
    await time.save();
    res.status(201).send(item);
  } catch(err){
    res.status(400).send(err);
  }
});
//Read
router.get('/',async (req,res)=>{

  const items = await Item.find();
  res.send(items);
});

//update
router.put('/:id',async (req,res)=>{
  try{
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(item);
  } catch(err){
    res.status(400).send(err);
  }
});

//delete
router.delete('/:id',async (req,res)=>{
  try{
    await Item.findByIdAndDelete(req.params.id);
    res.send({message: 'item deleted successfully'});
  } catch(err){
    res.status(400).send(err);
  }
});

module.exports = router;