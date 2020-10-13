const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSchema = mongoose.Schema({
  writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
   title: {
       type: String,
       maxlength: 50
   },
   description: {
       type: String
   },
   categories: {
       type: Number,
       default: 1
   }

},{timestamps: true})

const Job = mongoose.model('Job', jobSchema);

module.exports = { Job }