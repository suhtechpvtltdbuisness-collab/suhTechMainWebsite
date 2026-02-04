import mongoose from 'mongoose';

const userInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  favorite: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.UserInfo || mongoose.model('UserInfo', userInfoSchema);
