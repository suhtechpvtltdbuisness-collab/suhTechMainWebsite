# API Documentation

## Base URL
After deploying to Vercel, your API base URL will be:
```
https://your-app-name.vercel.app/api
```

For local development:
```
http://localhost:3000/api
```

## Authentication
Most endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## CORS
All API endpoints have CORS enabled and accept requests from any origin (`*`).

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login user
- `POST /api/auth/register` - Register new user
- `GET /api/auth/me` - Get current user (requires auth)

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics (requires auth)

### Expenses
- `GET /api/expenses` - Get all expenses (requires auth)
  - Query params: `category`, `status`
- `GET /api/expenses/:id` - Get expense by ID (requires auth)
- `POST /api/expenses` - Create expense (requires auth)
- `PATCH /api/expenses/:id` - Update expense (requires auth)
- `DELETE /api/expenses/:id` - Delete expense (requires auth)

**Expense Model:**
```json
{
  "title": "string",
  "category": "Travel | Software | Utilities | Rent | Equipment | Marketing | Misc",
  "amount": "number",
  "paymentMethod": "string",
  "status": "Pending | Approved | Paid",
  "description": "string",
  "date": "ISO date string"
}
```

### Invoices
- `GET /api/invoices` - Get all invoices (requires auth)
  - Query params: `status`, `clientName`
- `GET /api/invoices/:id` - Get invoice by ID or invoice number (requires auth)
- `POST /api/invoices` - Create invoice (requires auth)
- `PATCH /api/invoices/:id` - Update invoice (requires auth)
- `DELETE /api/invoices/:id` - Delete invoice (requires auth)

**Invoice Model:**
```json
{
  "invoiceNumber": "string (auto-generated if not provided)",
  "clientName": "string",
  "contact": "string",
  "address": "string",
  "product": "string",
  "quantity": "number",
  "price": "number",
  "tax": "number",
  "total": "number (auto-calculated if not provided)",
  "status": "Pending | Paid | Overdue",
  "date": "ISO date string"
}
```

### Sales
- `GET /api/sales` - Get all sales (requires auth)
  - Query params: `status`, `clientName`
- `GET /api/sales/:id` - Get sale by ID (requires auth)
- `POST /api/sales` - Create sale (requires auth)
- `PATCH /api/sales/:id` - Update sale (requires auth)
- `DELETE /api/sales/:id` - Delete sale (requires auth)

**Sale Model:**
```json
{
  "clientName": "string",
  "contactPerson": "string",
  "email": "string",
  "phone": "string",
  "projectTitle": "string",
  "amount": "number",
  "paymentMethod": "string",
  "status": "Pending | In Progress | Completed",
  "link": "string (optional)",
  "date": "ISO date string"
}
```

### Employee Salary
- `GET /api/employee-salary` - Get all employee salaries (requires auth)
  - Query params: `status`, `department`, `name`
- `GET /api/employee-salary/:id` - Get employee salary by ID or employee ID (requires auth)
- `POST /api/employee-salary` - Create employee salary (requires auth)
- `PATCH /api/employee-salary/:id` - Update employee salary (requires auth)
- `DELETE /api/employee-salary/:id` - Delete employee salary (requires auth)

**Employee Salary Model:**
```json
{
  "employeeId": "string (auto-generated if not provided)",
  "name": "string",
  "role": "string",
  "department": "string",
  "phone": "string",
  "email": "string (optional)",
  "paymentDate": "ISO date string",
  "paymentMode": "string",
  "status": "Pending | Paid",
  "breakdown": {
    "basic": "number",
    "allowances": {
      "HRA": "number",
      "Special": "number"
    },
    "deductions": {
      "PF": "number",
      "Tax": "number"
    },
    "net": "number (auto-calculated)"
  }
}
```

**Alternative POST format (will be transformed):**
```json
{
  "name": "string",
  "role": "string",
  "department": "string",
  "phone": "string",
  "paymentDate": "ISO date string",
  "status": "Pending | Paid",
  "basic": "number",
  "hra": "number",
  "special": "number",
  "pf": "number",
  "tax": "number"
}
```

### Blogs
- `GET /api/blogs` - Get all blogs (public, filters published for non-auth)
  - Query params: `isPublished`, `category`, `search`
- `GET /api/blogs/:id` - Get blog by ID or slug (public)
- `POST /api/blogs` - Create blog (requires auth)
- `PATCH /api/blogs/:id` - Update blog (requires auth)
- `DELETE /api/blogs/:id` - Delete blog (requires auth)

**Blog Model:**
```json
{
  "title": "string",
  "slug": "string (auto-generated from title if not provided)",
  "excerpt": "string",
  "content": "string",
  "imageUrl": "string (full URL to image)",
  "author": "string",
  "tags": ["string"],
  "category": "string",
  "isPublished": "boolean",
  "publishedAt": "ISO date string (auto-set when published)",
  "views": "number"
}
```

### Portfolio
- `GET /api/portfolio` - Get all portfolios (public, filters active for non-auth)
  - Query params: `isActive`, `search`
- `GET /api/portfolio/:id` - Get portfolio by ID or slug (public)
- `POST /api/portfolio` - Create portfolio (requires auth)
- `PATCH /api/portfolio/:id` - Update portfolio (requires auth)
- `DELETE /api/portfolio/:id` - Delete portfolio (requires auth)

**Portfolio Model:**
```json
{
  "slug": "string (auto-generated from title if not provided)",
  "title": "string",
  "subtitle": "string",
  "primaryCta": "string",
  "primaryLink": "string",
  "secondaryCta": "string",
  "secondaryLink": "string",
  "overviewBody": "string",
  "overviewGoals": ["string"],
  "overviewImage": "string (full URL to image)",
  "problemIntro": "string",
  "problems": ["string"],
  "solutionIntro": "string",
  "solutions": ["string"],
  "technologies": ["string"],
  "results": ["string"],
  "metrics": [{"label": "string", "value": "string"}],
  "isActive": "boolean"
}
```

### Orders (Existing)
- `GET /api/orders` - Get all orders (requires auth)
- `GET /api/orders/:id` - Get order by order number (requires auth)
- `POST /api/orders` - Create order (public)
- `PATCH /api/orders/:id` - Update order (requires auth)

### Contacts (Existing)
- `GET /api/contact` - Get all contacts (requires auth)
- `POST /api/contact` - Create contact (public)

### Testimonials (Existing)
- `GET /api/testimonials` - Get all active testimonials (public)
- `POST /api/testimonials` - Create testimonial (requires auth)

### Coupons (Existing)
- `GET /api/coupons` - Get all coupons (requires auth)
- `POST /api/coupons` - Create coupon (requires auth, admin only)
- `POST /api/coupons/validate/:code` - Validate coupon code (public)

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error message"
}
```

## Image URLs
For blogs and portfolios, use full image URLs. You can upload images to:
- Cloudinary
- AWS S3
- Imgur
- Any image hosting service

Example:
```json
{
  "imageUrl": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/image.jpg"
}
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables if needed (MongoDB URI is hardcoded in mongodb.js but you can move it to env)
4. Deploy

The `vercel.json` file is already configured with CORS headers.

## Admin Panel Integration

Use the API configuration file at `Admin_SUH_Tech/src/config/api.js`:

1. Set the `API_BASE_URL` to your deployed Vercel URL
2. Import and use the API methods:
```javascript
import api from '../config/api';

// Login
const { token, user } = await api.login(email, password);
localStorage.setItem('authToken', token);

// Get expenses
const { expenses } = await api.getExpenses();

// Create expense
const { expense } = await api.createExpense({
  title: "Office Supplies",
  category: "Misc",
  amount: 5000,
  // ...
});
```

