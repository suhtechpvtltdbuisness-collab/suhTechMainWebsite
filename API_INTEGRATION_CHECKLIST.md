# API Integration Checklist for ArtofQR

## ✅ Admin User Created
- **Email**: admin@artofqr.com
- **Password**: Admin@123
- **Role**: admin

## 📋 API Endpoints Status

### Authentication APIs ✅
- [x] `POST /api/auth/register` - Register new user
- [x] `POST /api/auth/login` - Login user
- [x] `GET /api/auth/me` - Get current user (requires auth)
- [x] `POST /api/auth/forgot-password` - **NEW** - Request password reset
- [x] `POST /api/auth/reset-password` - **NEW** - Reset password with token
- [x] `POST /api/auth/change-password` - **NEW** - Change password (requires auth)

### Contact APIs ✅
- [x] `POST /api/contact` - Submit contact form
- [x] `GET /api/contact` - Get all contact submissions (requires auth)

### Newsletter APIs ✅
- [x] `POST /api/newsletter` - Subscribe to newsletter
- [x] `POST /api/newsletter/submit-user-info` - Submit user info
- [x] `GET /api/newsletter` - Get all subscribers (requires auth)

### Order APIs ✅
- [x] `POST /api/orders` - Create order
- [x] `GET /api/orders` - Get all orders (requires auth)
- [x] `GET /api/orders/:id` - Get order by ID (requires auth)

### Coupon APIs ✅
- [x] `POST /api/coupons/validate/:code` - Validate coupon code
- [x] `POST /api/coupons` - Create coupon (requires auth, admin only)
- [x] `GET /api/coupons` - Get all coupons (requires auth)

### Testimonial APIs ✅
- [x] `GET /api/testimonials` - Get all testimonials
- [x] `POST /api/testimonials` - Create testimonial (requires auth)

### Dashboard APIs ✅
- [x] `GET /api/dashboard/stats` - Get dashboard statistics (requires auth)

### Expense APIs ✅
- [x] `GET /api/expenses` - Get all expenses (requires auth)
- [x] `GET /api/expenses/:id` - Get expense by ID (requires auth)
- [x] `POST /api/expenses` - Create expense (requires auth)
- [x] `PATCH /api/expenses/:id` - Update expense (requires auth)
- [x] `DELETE /api/expenses/:id` - Delete expense (requires auth)

### Invoice APIs ✅
- [x] `GET /api/invoices` - Get all invoices (requires auth)
- [x] `GET /api/invoices/:id` - Get invoice by ID (requires auth)
- [x] `POST /api/invoices` - Create invoice (requires auth)
- [x] `PATCH /api/invoices/:id` - Update invoice (requires auth)
- [x] `DELETE /api/invoices/:id` - Delete invoice (requires auth)

### Sales APIs ✅
- [x] `GET /api/sales` - Get all sales (requires auth)
- [x] `GET /api/sales/:id` - Get sale by ID (requires auth)
- [x] `POST /api/sales` - Create sale (requires auth)
- [x] `PATCH /api/sales/:id` - Update sale (requires auth)
- [x] `DELETE /api/sales/:id` - Delete sale (requires auth)

### Employee Salary APIs ✅
- [x] `GET /api/employee-salary` - Get all employee salaries (requires auth)
- [x] `GET /api/employee-salary/:id` - Get employee salary by ID (requires auth)
- [x] `POST /api/employee-salary` - Create employee salary (requires auth)
- [x] `PATCH /api/employee-salary/:id` - Update employee salary (requires auth)
- [x] `DELETE /api/employee-salary/:id` - Delete employee salary (requires auth)

### Employee APIs ✅
- [x] `GET /api/employees` - Get all employees (requires auth)
- [x] `GET /api/employees/:id` - Get employee by ID (requires auth)
- [x] `POST /api/employees` - Create employee (requires auth)
- [x] `PATCH /api/employees/:id` - Update employee (requires auth)
- [x] `DELETE /api/employees/:id` - Delete employee (requires auth)

### Project APIs ✅
- [x] `GET /api/projects` - Get all projects (requires auth)
- [x] `GET /api/projects/:id` - Get project by ID (requires auth)
- [x] `POST /api/projects` - Create project (requires auth)
- [x] `PATCH /api/projects/:id` - Update project (requires auth)
- [x] `DELETE /api/projects/:id` - Delete project (requires auth)
- [x] `GET /api/projects/:id/employees` - Get project employees (requires auth)

### Blog APIs ✅
- [x] `GET /api/blogs` - Get all blogs (public)
- [x] `GET /api/blogs/:id` - Get blog by ID or slug (public)
- [x] `POST /api/blogs` - Create blog (requires auth)
- [x] `PATCH /api/blogs/:id` - Update blog (requires auth)
- [x] `DELETE /api/blogs/:id` - Delete blog (requires auth)

### Portfolio APIs ✅
- [x] `GET /api/portfolio` - Get all portfolios (public)
- [x] `GET /api/portfolio/:id` - Get portfolio by ID or slug (public)
- [x] `POST /api/portfolio` - Create portfolio (requires auth)
- [x] `PATCH /api/portfolio/:id` - Update portfolio (requires auth)
- [x] `DELETE /api/portfolio/:id` - Delete portfolio (requires auth)

---

## 🧪 Quick Test Commands

### Test Login (Admin)
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@artofqr.com",
    "password": "Admin@123"
  }'
```

### Test Forgot Password
```bash
curl -X POST http://localhost:3000/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@artofqr.com"
  }'
```

### Test Reset Password (use token from forgot password response)
```bash
curl -X POST http://localhost:3000/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "token": "YOUR_TOKEN_HERE",
    "password": "NewPassword123"
  }'
```

### Test Change Password (requires auth token)
```bash
curl -X POST http://localhost:3000/api/auth/change-password \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "currentPassword": "Admin@123",
    "newPassword": "NewPassword123"
  }'
```

---

## 🚀 Next Steps

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Test All Endpoints**: Use the Postman collection or the curl commands above

3. **Production Considerations**:
   - [ ] Add email service integration (SendGrid, AWS SES, etc.) for password reset emails
   - [ ] Remove development-only fields from forgot-password response (resetToken, resetUrl)
   - [ ] Set up proper environment variables for FRONTEND_URL
   - [ ] Implement rate limiting for auth endpoints
   - [ ] Add proper logging for security events

---

## 📝 Notes

- All APIs support CORS for cross-origin requests
- JWT tokens expire after 7 days (can be configured in middleware/auth.js)
- Password reset tokens expire after 1 hour
- All passwords are hashed using bcrypt with 10 salt rounds
- Admin role has full permissions, employee role has limited access

---

## 🔒 Security Best Practices

1. ✅ Passwords are hashed before storage
2. ✅ Reset tokens are hashed before storage
3. ✅ Email enumeration protection (same response for existing/non-existing users)
4. ✅ Token expiration implemented
5. ✅ Password strength validation (minimum 6 characters)
6. ⚠️  TODO: Add rate limiting for login/forgot-password endpoints
7. ⚠️  TODO: Add email service for production password reset

---

**Last Updated**: December 17, 2025
