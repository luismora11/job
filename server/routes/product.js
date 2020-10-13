const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Job} = require("../models/Job");

const {auth} = require("../middleware/auth");



router.post("/uploadJob", (req, res) => {

// save data from the client into database


  const job = new Job(req.body)


  job.save((err) =>{
      if (err) return res.status(400).json({success: false, err})
      return res.status(200).json({success: true})
    
    })



});

modules.exports = router;