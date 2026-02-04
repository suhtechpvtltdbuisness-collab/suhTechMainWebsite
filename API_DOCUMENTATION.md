# ArtofQR API Documentation

**Base URL:** `https://your-domain.com/api` (or `http://localhost:3000/api` for local development)

**Authentication:** Most endpoints require JWT token in Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Table of Contents

1. [Authentication APIs](#authentication-apis)
2. [Contact APIs](#contact-apis)
3. [Newsletter APIs](#newsletter-apis)
4. [Order APIs](#order-apis)
5. [Coupon APIs](#coupon-apis)
6. [Testimonial APIs](#testimonial-apis)
7. [Dashboard APIs](#dashboard-apis)
8. [Error Codes](#error-codes)

---

## Authentication APIs

### 1. Register User

**Endpoint:** `POST /api/auth/register`

**Authentication:** Not required

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (400):**
```json
{
  "error": "User already exists"
}
```

---

### 2. Login User

**Endpoint:** `POST /api/auth/login`

**Authentication:** Not required

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (401):**
```json
{
  "error": "Invalid credentials"
}
```

---

### 3. Get Current User

**Endpoint:** `GET /api/auth/me`

**Authentication:** Required

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (401):**
```json
{
  "error": "Invalid token"
}
```

---

### 4. Forgot Password

**Endpoint:** `POST /api/auth/forgot-password`

**Authentication:** Not required

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Password reset instructions sent to email"
}
```

**Note:** In production, this will send an email with reset link. For development, it also returns the reset token and URL.

**Error Response (400):**
```json
{
  "error": "Email is required"
}
```

---

### 5. Reset Password

**Endpoint:** `POST /api/auth/reset-password`

**Authentication:** Not required

**Request Body:**
```json
{
  "token": "reset-token-from-email",
  "password": "newSecurePassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Password has been reset successfully. You can now login with your new password."
}
```

**Error Response (400):**
```json
{
  "error": "Invalid or expired reset token"
}
```

**Error Response (400) - Weak Password:**
```json
{
  "error": "Password must be at least 6 characters long"
}
```

---

### 6. Change Password (Authenticated)

**Endpoint:** `POST /api/auth/change-password`

**Authentication:** Required

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "currentPassword": "oldPassword123",
  "newPassword": "newSecurePassword123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Password changed successfully"
}
```

**Error Response (400) - Wrong Current Password:**
```json
{
  "error": "Current password is incorrect"
}
```

**Error Response (401):**
```json
{
  "error": "Authentication required"
}
```

---

## Contact APIs

### 1. Submit Contact Form

**Endpoint:** `POST /api/contact`

**Authentication:** Not required

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "I'm interested in your services..."
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "contact": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "message": "I'm interested in your services...",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "error": "All fields are required"
}
```

---

### 2. Get All Contact Submissions

**Endpoint:** `GET /api/contact`

**Authentication:** Required (Admin recommended)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "contacts": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "message": "I'm interested in your services...",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

## Newsletter APIs

### 1. Subscribe to Newsletter

**Endpoint:** `POST /api/newsletter`

**Authentication:** Not required

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

**Error Response (400):**
```json
{
  "error": "Valid email is required"
}
```

---

### 2. Get All Newsletter Subscribers

**Endpoint:** `GET /api/newsletter`

**Authentication:** Required (Admin recommended)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "subscribers": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "email": "subscriber@example.com",
      "subscribedAt": "2024-01-15T10:30:00.000Z",
      "isActive": true
    }
  ],
  "count": 1
}
```

---

## Order APIs

### 1. Create Order

**Endpoint:** `POST /api/orders`

**Authentication:** Not required (but recommended)

**Request Body:**
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": {
      "line1": "123 Main St",
      "line2": "Apt 4B",
      "city": "New York",
      "state": "NY",
      "country": "US",
      "postal_code": "10001"
    }
  },
  "items": [
    {
      "variant_id": 12345,
      "quantity": 1,
      "price": 29.99,
      "name": "Custom QR Code T-Shirt",
      "image": "https://example.com/image.jpg",
      "designUrl": "https://example.com/design.png",
      "designText": "My Custom Text",
      "size": "M"
    }
  ],
  "shipping": {
    "id": "STANDARD_CARBON_OFFSET",
    "name": "Carbon Neutral Shipping",
    "rate": 0
  },
  "subtotal": 29.99,
  "discount": 5.00,
  "total": 24.99,
  "couponCode": "SAVE10",
  "status": "pending",
  "stripeSessionId": "cs_test_1234567890"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "order": {
    "_id": "507f1f77bcf86cd799439011",
    "orderNumber": "ORD-1705315800000-ABC123XYZ",
    "customer": { ... },
    "items": [ ... ],
    "subtotal": 29.99,
    "discount": 5.00,
    "total": 24.99,
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

### 2. Get All Orders

**Endpoint:** `GET /api/orders`

**Authentication:** Required

**Query Parameters:**
- `email` (optional): Filter orders by customer email

**Example:** `GET /api/orders?email=john@example.com`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "orders": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "orderNumber": "ORD-1705315800000-ABC123XYZ",
      "customer": { ... },
      "items": [ ... ],
      "total": 24.99,
      "status": "processing",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "count": 1
}
```

---

### 3. Get Order by ID

**Endpoint:** `GET /api/orders/[orderNumber]`

**Authentication:** Required

**Example:** `GET /api/orders/ORD-1705315800000-ABC123XYZ`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "order": {
    "_id": "507f1f77bcf86cd799439011",
    "orderNumber": "ORD-1705315800000-ABC123XYZ",
    "customer": { ... },
    "items": [ ... ],
    "status": "processing",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Order not found"
}
```

---

### 4. Update Order Status

**Endpoint:** `PATCH /api/orders/[orderNumber]`

**Authentication:** Required (Admin recommended)

**Example:** `PATCH /api/orders/ORD-1705315800000-ABC123XYZ`

**Request Body:**
```json
{
  "status": "shipped"
}
```

**Available Statuses:** `pending`, `processing`, `shipped`, `delivered`, `cancelled`

**Response (200 OK):**
```json
{
  "success": true,
  "order": {
    "_id": "507f1f77bcf86cd799439011",
    "orderNumber": "ORD-1705315800000-ABC123XYZ",
    "status": "shipped",
    "updatedAt": "2024-01-15T12:00:00.000Z"
  }
}
```

---

## Coupon APIs

### 1. Validate Coupon Code

**Endpoint:** `POST /api/coupons/validate/[code]`

**Authentication:** Not required

**Example:** `POST /api/coupons/validate/SAVE10`

**Request Body:**
```json
{
  "cartTotal": 100.00,
  "productIds": ["product-123", "product-456"]
}
```

**Response (200 OK) - Valid Coupon:**
```json
{
  "valid": true,
  "coupon": {
    "code": "SAVE10",
    "type": "percentage",
    "value": 10,
    "maxDiscount": 20
  }
}
```

**Response (200 OK) - Invalid Coupon:**
```json
{
  "valid": false,
  "message": "Invalid coupon code"
}
```

**Possible Error Messages:**
- "Invalid coupon code"
- "Coupon not yet valid"
- "Coupon has expired"
- "Minimum purchase of $50 required"
- "Coupon usage limit reached"
- "Coupon not applicable to selected products"

---

### 2. Create Coupon (Admin)

**Endpoint:** `POST /api/coupons`

**Authentication:** Required (Admin only)

**Request Body:**
```json
{
  "code": "SAVE20",
  "type": "percentage",
  "value": 20,
  "maxDiscount": 50,
  "minPurchase": 100,
  "applicableProducts": ["product-123"],
  "validFrom": "2024-01-01T00:00:00.000Z",
  "validUntil": "2024-12-31T23:59:59.000Z",
  "usageLimit": 100,
  "isActive": true
}
```

**Coupon Types:** `percentage` or `fixed`

**Response (200 OK):**
```json
{
  "success": true,
  "coupon": {
    "_id": "507f1f77bcf86cd799439011",
    "code": "SAVE20",
    "type": "percentage",
    "value": 20,
    "maxDiscount": 50,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (403):**
```json
{
  "error": "Unauthorized"
}
```

---

### 3. Get All Coupons

**Endpoint:** `GET /api/coupons`

**Authentication:** Required

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "coupons": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "code": "SAVE20",
      "type": "percentage",
      "value": 20,
      "maxDiscount": 50,
      "usageLimit": 100,
      "usedCount": 5,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

## Testimonial APIs

### 1. Get All Testimonials

**Endpoint:** `GET /api/testimonials`

**Authentication:** Not required

**Response (200 OK):**
```json
{
  "success": true,
  "testimonials": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "text": "Great service!",
      "author": "John Doe",
      "role": "CEO, Company Inc",
      "rating": 5,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

### 2. Create Testimonial (Admin)

**Endpoint:** `POST /api/testimonials`

**Authentication:** Required

**Request Body:**
```json
{
  "text": "Excellent service and support!",
  "author": "Jane Smith",
  "role": "CTO, Tech Corp",
  "rating": 5,
  "isActive": true
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "testimonial": {
    "_id": "507f1f77bcf86cd799439011",
    "text": "Excellent service and support!",
    "author": "Jane Smith",
    "role": "CTO, Tech Corp",
    "rating": 5,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## Dashboard APIs

### 1. Get Dashboard Statistics

**Endpoint:** `GET /api/dashboard/stats`

**Authentication:** Required (Admin recommended)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200 OK):**
```json
{
  "success": true,
  "stats": {
    "totalOrders": 150,
    "totalRevenue": 12500.50,
    "totalContacts": 45,
    "totalSubscribers": 320,
    "recentOrders": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "orderNumber": "ORD-1705315800000-ABC123XYZ",
        "customer": {
          "name": "John Doe",
          "email": "john@example.com"
        },
        "total": 24.99,
        "status": "processing",
        "createdAt": "2024-01-15T10:30:00.000Z"
      }
    ]
  }
}
```

---

## Error Codes

### HTTP Status Codes

- **200 OK** - Request successful
- **400 Bad Request** - Invalid request data
- **401 Unauthorized** - Authentication required or invalid token
- **403 Forbidden** - Insufficient permissions
- **404 Not Found** - Resource not found
- **500 Internal Server Error** - Server error

### Error Response Format

```json
{
  "error": "Error message description"
}
```

---

## Authentication Flow

1. **Register/Login** → Get JWT token
2. **Store token** in localStorage or secure storage
3. **Include token** in Authorization header for protected routes:
   ```
   Authorization: Bearer <token>
   ```
4. **Token expires** after 7 days (refresh by logging in again)

---

## Example cURL Requests

### Register User
```bash
curl -X POST https://your-domain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Login User
```bash
curl -X POST https://your-domain.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Get Dashboard Stats (Authenticated)
```bash
curl -X GET https://your-domain.com/api/dashboard/stats \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create Order
```bash
curl -X POST https://your-domain.com/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "address": {
        "line1": "123 Main St",
        "city": "New York",
        "state": "NY",
        "country": "US",
        "postal_code": "10001"
      }
    },
    "items": [{
      "variant_id": 12345,
      "quantity": 1,
      "price": 29.99,
      "name": "Custom QR Code T-Shirt"
    }],
    "subtotal": 29.99,
    "total": 29.99,
    "status": "pending"
  }'
```

---

## Notes for Admin Panel Integration

1. **Authentication**: Store JWT token securely and include in all authenticated requests
2. **Error Handling**: Always check for `success` field or `error` field in responses
3. **Pagination**: Currently not implemented, but can be added if needed
4. **Filtering**: Use query parameters for filtering (e.g., `?email=user@example.com`)
5. **Date Formats**: All dates are in ISO 8601 format (UTC)
6. **Order Status**: Use status enum values: `pending`, `processing`, `shipped`, `delivered`, `cancelled`
7. **Coupon Types**: `percentage` (applies percentage discount) or `fixed` (applies fixed amount discount)

---

## Support

For questions or issues, contact the development team.

**Last Updated:** January 2024

