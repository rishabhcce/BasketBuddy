# BasketBuddy / Fresh Mart Demo Guide

This project now has:

- a grocery storefront frontend in `index.html`
- a Node.js + Express backend
- MongoDB database integration with Mongoose
- inventory CRUD
- order creation with stock deduction
- low-stock alerts when `quantity_in_stock <= low_stock_threshold`

## 1. Requirements

Install these first:

- Node.js
- MongoDB Community Server

## 2. Open The Project

In PowerShell:

```powershell
cd "C:\Users\Vivek Shukla\OneDrive\Desktop\BasketBuddy"
```

## 3. Start MongoDB

If MongoDB is installed as a Windows service, make sure it is running.

If needed:

```powershell
net start MongoDB
```

If your MongoDB service has a different name, open `services.msc` and start the MongoDB service manually.

## 4. Install Dependencies

```powershell
npm install
```

## 5. Start The Backend

```powershell
node server.js
```

If port `5000` is already in use:

```powershell
$env:PORT=5001
node server.js
```

## 6. Open In Browser

If running on port `5000`:

- [http://127.0.0.1:5000/](http://127.0.0.1:5000/)

If running on port `5001`:

- [http://127.0.0.1:5001/](http://127.0.0.1:5001/)

## 7. Demo Credentials

User demo:

- Email: `user@basketbuddy.com`
- Password: `user123`

Admin demo:

- Email: `admin@basketbuddy.com`
- Password: `admin123`
- Access Code: `OPS-2026`

## 8. What To Show Your Professor

Recommended demo flow:

1. Open the homepage and explain that products now load from the backend API.
2. Show user signup/login.
3. Add products to cart and place an order.
4. Explain that stock is reduced in the database when the order is placed.
5. Log in as admin.
6. Show admin overview and inventory APIs.
7. Explain low-stock alert logic:

```js
if (currentStock <= lowStockThreshold) {
  triggerAlert();
}
```

## 9. Important API Endpoints

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/auth/user/login`
- `POST /api/auth/user/signup`
- `POST /api/auth/admin/login`
- `POST /api/orders`
- `GET /api/orders` (admin token required)
- `GET /api/admin/overview` (admin token required)
- `POST /api/products` (admin token required)
- `PUT /api/products/:id` (admin token required)
- `DELETE /api/products/:id` (admin token required)

## 10. Deployment Notes

- Keep secrets in `.env`
- Deploy backend to Render or Railway
- Use MongoDB Atlas for cloud database
- Update frontend `API_BASE` or API host to your live backend URL when deploying

### Render quick start

1. Push this project to GitHub.
2. Create a MongoDB Atlas database and copy the connection string.
3. In Render, create a new Web Service from the repo.
4. Render can use the included `render.yaml` automatically.
5. Add these environment variables in Render:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN=7d`
   - `ADMIN_ACCESS_CODE`
   - `CLIENT_URL=https://your-render-domain.onrender.com`
6. Deploy and then open your Render service URL.

### Production checklist

- Replace demo secrets before going live.
- Update admin credentials in the database.
- Point `CLIENT_URL` to the live domain.
- Verify signup, checkout, admin login, and product loading after deploy.
