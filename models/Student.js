import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherOrHusbandName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  socialCategory: {
    type: String,
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
}, {
  timestamps: true // This will add `createdAt` and `updatedAt` fields
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
