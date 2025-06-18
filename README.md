# Wholoset – B2B Wholesale Marketplace

🌐 **Live Site**: [https://wholoset.web.app/](https://wholoset.web.app/)

Wholoset is a full-stack global **B2B wholesale platform** that connects manufacturers and distributors with retailers and institutional buyers. This platform allows brandized users to upload wholesale products and buyers to browse, purchase, and manage their orders seamlessly.

---

## 🚀 Key Features

### ✅ General Features
- 🔐 Secure authentication with Firebase (Email/Password + Google login)
- 🛡️ JWT-based private route protection
- 🌐 Responsive design (mobile, tablet, desktop)
- 🎨 Elegant and professional UI using Tailwind CSS + DaisyUI
- 🌗 Light/Dark mode toggle
- 🧭 Dynamic Page Titles
- 🚫 404 Not Found Page
- 🔄 Auto Spinner while loading

---

### 🧑‍💼 Authentication
- User registration with validation
- Login with Email/Password or Google
- Toast/sweet alerts for login/register feedback
- Firebase keys and MongoDB credentials secured via `.env`

---

### 🛍️ Product Features
- ➕ Add Product (Brandized Users only)
- 📃 View All Products (Private Route)
- ✏️ Update Product Info (Accessible to any logged-in user)
- 🔍 Category-wise Product Filtering
- 🔃 Toggle View: Card/Table display
- ⚙️ Product Rating with `react-rating-stars-component`
- 🏷️ Minimum Selling Quantity enforcement on Buy modal
- 💵 Real-time quantity updates using MongoDB `$inc` operator

---

### 🛒 Cart Features
- 🧾 View Purchased Products (Private Route)
- ❌ Remove from cart with quantity increment logic
- 📅 Shows buy date, product info, and order quantity

---


### 🔐 Route Structure

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Home Page with banner, categories, and extra sections |
| `/login` | Public | Login with Firebase |
| `/register` | Public | User Registration |
| `/all-products` | Private | All Product listing with filter + toggle |
| `/add-product` | Private (Brandized) | Add Product form |
| `/my-product` | Private | User's Added Products |
| `/cart` | Private | Purchased Product List |
| `/product/:id` | Private | Product Details + Buy Modal |
| `*` | Public | 404 Not Found Page |

---

## 🧩 Packages Used

### 🧑 Core Packages
- `react`
- `react-router`
- `firebase`
- `axios`
- `mongodb`
- `express`
- `cors`
- `jsonwebtoken`

###  UI & UX
- `tailwindcss`
- `daisyui`
- `react-icons`
- `aos` (scroll animation)
- `swiper` (slider)
- `sweetalert2`
- `react-toastify`
- `react-spinners`
- `lottie-react`
- `react-rating-stars-component`
- `react-awesome-reveal`
- `@emotion/react`

### 🧠 Forms & Utils
- `react-hook-form`
- `react-tooltip`


