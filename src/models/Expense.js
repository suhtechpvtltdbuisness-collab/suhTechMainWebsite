import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Travel', 'Software', 'Utilities', 'Rent', 'Equipment', 'Marketing', 'Misc'],
    default: 'Misc',
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
    default: 'Bank Transfer',
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Paid'],
    default: 'Pending',
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

expenseSchema.pre('save', function () {
  this.updatedAt = Date.now();
});

export default mongoose.models.Expense || mongoose.model('Expense', expenseSchema);

