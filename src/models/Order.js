import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  customer: {
    name: String,
    email: String,
    phone: String,
    address: {
      line1: String,
      line2: String,
      city: String,
      state: String,
      country: String,
      postal_code: String,
    },
  },
  items: [{
    variant_id: Number,
    quantity: Number,
    price: Number,
    name: String,
    image: String,
    designUrl: String,
    designText: String,
    size: String,
  }],
  shipping: {
    id: String,
    name: String,
    rate: Number,
  },
  subtotal: Number,
  discount: Number,
  total: Number,
  couponCode: String,
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  stripeSessionId: String,
  stripePaymentIntentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);

