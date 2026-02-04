import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
  },

  // Document Type
  documentType: {
    type: String,
    enum: ['Invoice', 'Quotation', 'Proforma Invoice'],
    default: 'Invoice',
  },

  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  projectCode: String,
  projectName: String, // For display purposes

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
  clientAddress: {
    type: String,
    required: true,
  },

  // Payment & Validity
  paymentTerms: {
    type: String,
    default: 'Net 30', // e.g., "Net 30", "Advance", "50% Advance, 50% on Delivery"
  },
  validUntil: Date, // For quotations

  // Service Type for IT Services
  serviceType: {
    type: String,
    enum: ['One-Time Project', 'AMC', 'Weekly Deliverables', 'Monthly Deliverables', 'Project Updates', 'Maintenance', 'Consulting', 'Custom'],
    default: 'One-Time Project',
  },

  // AMC Details (Annual Maintenance Contract)
  amcDetails: {
    startDate: Date,
    endDate: Date,
    duration: String, // e.g., "12 months", "1 year"
    renewalDate: Date,
    coverageType: {
      type: String,
      enum: ['Basic', 'Standard', 'Premium', 'Enterprise'],
    },
    includedServices: [String], // e.g., ["Bug Fixes", "Security Updates", "Performance Monitoring"]
    responseTime: String, // e.g., "24 hours", "48 hours"
  },

  // Weekly/Monthly Deliverables
  deliverables: [{
    title: String,
    description: String,
    deliveryDate: Date,
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Delayed'],
      default: 'Pending',
    },
    completedDate: Date,
    remarks: String,
  }],

  // Project Milestones (for project-based invoices)
  milestones: [{
    name: String,
    description: String,
    percentage: Number, // % of total project
    amount: Number,
    dueDate: Date,
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
      default: 'Not Started',
    },
  }],

  services: [{
    description: {
      type: String,
      required: true,
    },
    serviceCategory: {
      type: String,
      enum: ['Development', 'Design', 'Maintenance', 'Support', 'Consulting', 'Infrastructure', 'Testing', 'Other'],
      default: 'Development',
    },
    quantity: {
      type: Number,
      default: 1,
    },
    unit: {
      type: String,
      default: 'hours',
      enum: ['hours', 'days', 'weeks', 'months', 'items', 'project', 'user', 'license'],
    },
    rate: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  }],
  subtotal: {
    type: Number,
    required: true,
  },
  taxRate: {
    type: Number,
    default: 18, // GST 18%
  },
  taxAmount: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Draft', 'Sent', 'Pending', 'Paid', 'Overdue', 'Cancelled'],
    default: 'Draft',
  },
  paymentDate: Date,
  paymentMethod: String,
  notes: String,
  termsAndConditions: String,
  invoiceDate: {
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

invoiceSchema.pre('save', function () {
  this.updatedAt = Date.now();
  if (!this.invoiceNumber) {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.invoiceNumber = `INV-${year}${month}-${random}`;
  }

  // Calculate totals if services exist
  if (this.services && this.services.length > 0) {
    this.subtotal = this.services.reduce((sum, service) => sum + (service.amount || 0), 0);
    this.taxAmount = ((this.subtotal - (this.discount || 0)) * (this.taxRate || 0)) / 100;
    this.total = this.subtotal - (this.discount || 0) + this.taxAmount;
  }

  // Check if overdue
  if (this.status === 'Pending' && this.dueDate && new Date() > this.dueDate) {
    this.status = 'Overdue';
  }
});

export default mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

