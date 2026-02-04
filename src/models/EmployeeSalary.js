import mongoose from 'mongoose';

const employeeSalarySchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentMode: {
    type: String,
    default: 'Bank Transfer',
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid'],
    default: 'Pending',
  },
  breakdown: {
    basic: {
      type: Number,
      required: true,
    },
    allowances: {
      HRA: {
        type: Number,
        default: 0,
      },
      Special: {
        type: Number,
        default: 0,
      },
    },
    deductions: {
      PF: {
        type: Number,
        default: 0,
      },
      Tax: {
        type: Number,
        default: 0,
      },
    },
    net: {
      type: Number,
      required: true,
    },
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

employeeSalarySchema.pre('save', function () {
  this.updatedAt = Date.now();
  if (!this.employeeId) {
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.employeeId = `EMP-${random}`;
  }
  // Calculate net salary
  if (this.breakdown) {
    const { basic, allowances, deductions } = this.breakdown;
    this.breakdown.net = basic + (allowances.HRA || 0) + (allowances.Special || 0) - (deductions.PF || 0) - (deductions.Tax || 0);
  }
});

export default mongoose.models.EmployeeSalary || mongoose.model('EmployeeSalary', employeeSalarySchema);

