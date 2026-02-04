import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectCode: {
    type: String,
    unique: true,
    sparse: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
  clientAddress: String,
  description: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
    enum: ['Web Development', 'Mobile Development', 'Cloud Services', 'DevOps', 'Consulting', 'Maintenance', 'Custom Software', 'Other'],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  status: {
    type: String,
    enum: ['Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'],
    default: 'Planning',
  },
  budget: {
    type: Number,
    required: true,
  },
  spentAmount: {
    type: Number,
    default: 0,
  },
  assignedEmployees: [{
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
    role: String,
    assignedDate: {
      type: Date,
      default: Date.now,
    },
  }],
  technologies: [String],
  deliverables: [String],
  notes: String,
  isActive: {
    type: Boolean,
    default: true,
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

projectSchema.pre('save', function () {
  this.updatedAt = Date.now();
  if (!this.projectCode) {
    const prefix = this.projectName.substring(0, 3).toUpperCase();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    this.projectCode = `${prefix}-${random}`;
  }
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);

