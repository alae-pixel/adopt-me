import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a pet name']
  },
  breed: {
    type: String,
    required: [true, 'Please add a breed']
  },
  age: {
    type: Number,
    required: [true, 'Please add an age']
  },
  type: {
    type: String,
    required: [true, 'Please specify the pet type (e.g., Dog, Cat)']
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  isAdopted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true 
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;