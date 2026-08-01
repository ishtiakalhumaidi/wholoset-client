<div align="center">

# 🏭 Wholoset — Frontend

**B2B Wholesale Marketplace — Brandized Seller Onboarding, Minimum Order Enforcement, and Real-Time Inventory Tracking**

[![React](https://img.shields.io/badge/React_19-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?logo=firebase)](https://firebase.google.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query_v5-FF4154?logo=reactquery)](https://tanstack.com/query/latest)
[![Live Demo](https://img.shields.io/badge/Live-wholoset.web.app-0D9488?logo=firebase)](https://wholoset.web.app/)

</div>

---

## 📋 Overview

Wholoset is a full-stack **B2B wholesale marketplace** that connects manufacturers and brandized distributors with retailers and institutional buyers. The frontend is a **React 19 + Vite** SPA built with **Tailwind CSS v4** and **DaisyUI**, featuring **React Router v7 data loaders** for route-level product preloading, a **dual-context auth architecture** (Firebase + backend user sync), **minimum order quantity enforcement** at the buy modal level, and a **brandized seller onboarding flow** that gates product creation behind backend-verified seller status.

> 🔗 **Live:** [https://wholoset.web.app](https://wholoset.web.app)  
> 🔗 **Backend Repo:** [wholoset-server](https://github.com/ishtiakalhumaidi/wholoset-server)

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **📦 React Router v7 Data Loaders** | Route-level data preloading on `/all-product` and `/category/:name` using `loader` functions with `hydrateFallbackElement` for instant navigation — products are fetched before the component mounts |
| **🔐 Dual-Context Auth Architecture** | `AuthProvider` manages Firebase auth state (token, login, logout) while `UserProvider` fetches enriched backend user data (role, brand status, profile) via `useAxiosSecure` — decouples auth from business logic |
| **🏭 Brandized Seller Gating** | Product creation (`/add-product`) is protected by both `PrivateRoute` AND backend `brandized` status check — non-brandized users are redirected even if authenticated |
| **📊 Minimum Order Quantity Enforcement** | Buy modal validates quantity against `product.minQuantity` (floor) and `product.mainQuantity` (ceiling) with real-time error states — prevents sub-MOQ and over-stock orders |
| **🔄 Real-Time Inventory Deduction** | Post-purchase, the backend uses MongoDB `$inc` with negative values to atomically decrement `mainQuantity` — the frontend reflects updated stock on next data refetch |
| **🛒 Cart-to-Order Pipeline** | Cart items persist with buyer attribution, product snapshots, and order metadata — the `/my-cart` page shows purchase history with buy date, product info, and order quantity |
| **🎭 Card/Table View Toggle** | The all-products page supports dual display modes — card grid for browsing and data table for bulk comparison — state persisted per session |
| **⭐ Product Rating System** | Interactive 5-star rating via `react-rating-stars-component` with decimal precision display — ratings are persisted to the backend and shown on product detail pages |
| **🖼️ ImgBB Image Upload Pipeline** | Direct image upload to ImgBB API in the product creation form with preview, progress indication, and URL storage in MongoDB |
| **📂 Category-Driven Navigation** | Dynamic category pages (`/category/:name`) with loader-based data fetching — each category is a separate route with its own preloaded dataset |
| **📋 React Hook Form Validation** | Product creation uses `react-hook-form` with real-time validation for name, quantity, brand, category, and image fields |
| **🎠 Swiper Hero Banner** | Touch-enabled carousel on the landing page with promotional content and category highlights |
| **🎬 AOS + React Awesome Reveal** | Scroll-triggered entrance animations on the homepage (Banner, Categories, WhyChoose, FAQ sections) for progressive content discovery |
| **🍞 SweetAlert2 + React Toastify** | Dual notification system — SweetAlert2 for modal confirmations (delete, logout) and Toastify for inline async feedback (add to cart, purchase) |
| **🌗 DaisyUI Theme System** | Dark/light mode toggle with `localStorage` persistence and DaisyUI's built-in theme classes |
| **📱 Responsive Dashboard Layout** | Separate `DashboardLayout` for seller/admin pages with sidebar navigation, distinct from the public `MainLayout` |

---

## 🛠️ Tech Stack

**Core**
- [React 19](https://react.dev/) — UI library with concurrent features
- [Vite](https://vitejs.dev/) — Build tool & dev server
- [React Router v7](https://reactrouter.com/) — Client-side routing with data APIs

**Styling & UI**
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [DaisyUI](https://daisyui.com/) — Component-class plugin for Tailwind

**Authentication**
- [Firebase Auth](https://firebase.google.com/docs/auth) — Email/password + Google OAuth

**State & Data**
- [TanStack React Query v5](https://tanstack.com/query/latest) — Server-state synchronization, caching, background refetching
- [React Hook Form](https://react-hook-form.com/) — Performant form state management

**Animation**
- [AOS](https://michalsnik.github.io/aos/) — Scroll-triggered reveal animations
- [React Awesome Reveal](https://react-awesome-reveal.morello.dev/) — Component entrance animations
- [Swiper](https://swiperjs.com/) — Touch slider/carousel
- [Lottie React](https://lottiefiles.com/) — JSON-based vector animations

**Media**
- [ImgBB API](https://api.imgbb.com/) — Image hosting for product photos

**Rating**
- [React Rating Stars Component](https://www.npmjs.com/package/react-rating-stars-component) — Interactive star ratings

**Notifications**
- [SweetAlert2](https://sweetalert2.github.io/) — Modal alerts and confirmations
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) — Inline toast notifications

**Utilities**
- [Axios](https://axios-http.com/) — HTTP client with interceptors
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [React Spinners](https://www.davidhu.io/react-spinners/) — Loading indicators
- [React Tooltip](https://react-tooltip.com/) — Accessible tooltips

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ishtiakalhumaidi/wholoset-client.git
cd wholoset-client

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with your Firebase and ImgBB credentials:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
VITE_imgbb_api_key=your_imgbb_api_key
```

> ⚠️ **Never commit `.env.local` to version control.**

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for Firebase Hosting deployment.

---

## 📁 Project Structure

```
wholoset-client/
├── public/                        # Static assets
├── src/
│   ├── api/                       # API service functions
│   ├── assets/                    # Images, fonts, static files
│   ├── components/
│   │   ├── ThemeToggle/           # Dark/light mode toggle
│   │   ├── common/                # Reusable UI (Loader, Navbar, Footer, etc.)
│   │   └── ui/                    # UI primitives
│   ├── contexts/
│   │   ├── AuthContext.jsx        # Auth context export
│   │   ├── AuthProvider.jsx       # Firebase auth provider
│   │   └── UserProvider.jsx       # Backend user data provider
│   ├── firebase/
│   │   └── firebase.config.js     # Firebase initialization
│   ├── hooks/
│   │   └── useAxiosSecure.jsx     # JWT-intercepted Axios instance
│   ├── layouts/
│   │   ├── MainLayout.jsx         # Public layout (Navbar + Footer)
│   │   └── DashboardLayout.jsx    # Seller/Admin dashboard shell
│   ├── pages/
│   │   ├── Home/                  # Landing page sections
│   │   │   ├── Home.jsx
│   │   │   ├── Banner.jsx         # Swiper hero carousel
│   │   │   ├── Categories.jsx     # Category grid
│   │   │   ├── WhyChoose.jsx      # Value proposition
│   │   │   ├── FAQ.jsx            # Accordion FAQ
│   │   │   └── topSection/        # Top hero content
│   │   ├── auth/
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── AllProduct.jsx         # Product directory (card/table toggle)
│   │   ├── AddProduct.jsx         # Product creation (brandized only)
│   │   ├── MyProduct.jsx          # Seller's product management
│   │   ├── ProductDetails.jsx     # Product detail + buy modal
│   │   ├── CartPage.jsx           # Purchase history
│   │   ├── MyOrder.jsx            # Order tracking
│   │   ├── Category.jsx           # Category-specific product list
│   │   ├── UserProfile.jsx        # User profile page
│   │   ├── AboutUs.jsx            # About page
│   │   ├── Terms.jsx              # Terms of service
│   │   ├── Privacy.jsx            # Privacy policy
│   │   └── error/
│   │       └── Error404.jsx       # 404 page
│   ├── routes/
│   │   ├── Router.jsx             # Central router with loaders
│   │   └── PrivateRoute.jsx       # Auth guard with SweetAlert2
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point (React 19 createRoot)
│   └── index.css                  # Tailwind directives + custom styles
├── firebase.json                  # Firebase hosting config
├── vite.config.js                 # Vite configuration
├── package.json
└── README.md
```

---

## 🔑 Key Architectural Decisions

### 1. React Router v7 Data Loaders
The application uses React Router v7's `loader` pattern for route-level data preloading:

```jsx
// Router.jsx
{
  path: "all-product",
  loader: () => fetch("https://wholoset-server.vercel.app/products"),
  element: <AllProduct />,
  hydrateFallbackElement: <Loader />,
}
```

This provides:
- **Instant navigation** — Products are fetched before the component mounts, eliminating waterfall requests
- **Loading states** — `hydrateFallbackElement` shows a spinner during data fetch
- **Error boundaries** — Router-level error handling with the `errorElement` prop
- **Category-specific preloading** — `/category/:name` loaders fetch only the relevant category subset

### 2. Dual-Context Auth Architecture
The app separates authentication from business logic using two contexts:

**AuthProvider** — Manages Firebase auth state:
```jsx
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Firebase user object
  const [isLoading, setIsLoading] = useState(true);
  // Firebase login/logout/createUser/updateProfile
};
```

**UserProvider** — Fetches enriched backend user data:
```jsx
const UserProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email) return;
    axiosSecure.get(`/users/${user.email}`).then(res => setUser(res.data));
  }, [user?.email]);
  // currentUser contains: role, brandized status, profile data
};
```

This separation:
- **Decouples auth from business logic** — Swapping Firebase for another provider only touches AuthProvider
- **Enables brandized gating** — The `brandized` flag lives in backend user data, not Firebase claims
- **Prevents auth waterfalls** — Backend user fetch happens in parallel with Firebase state resolution

### 3. Axios Secure with Singleton Interceptor
The `useAxiosSecure` hook creates an Axios instance with a request interceptor that injects the Firebase JWT:

```jsx
const axiosInstance = axios.create({
  baseURL: "https://wholoset-server.vercel.app/",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  return axiosInstance;
};
```

Key design decisions:
- **Singleton instance** — Same Axios instance reused across all hooks, preventing interceptor duplication
- **Automatic token attachment** — No manual header management in API calls
- **Context-driven** — Automatically picks up the latest Firebase token on re-renders

### 4. Brandized Seller Gating
Product creation is gated at multiple levels:

1. **Route level** — `/add-product` is wrapped in `PrivateRoute` (requires auth)
2. **UI level** — The "Add Product" nav link is conditionally rendered based on `currentUser.brandized`
3. **Backend level** — The server rejects product creation from non-brandized users

This defense-in-depth approach ensures that even if a user bypasses the frontend checks (e.g., via direct URL), the backend enforces the brandized requirement.

### 5. Minimum Order Quantity Validation
The buy modal implements client-side validation with real-time error states:

```jsx
const isTooLow = quantity < product.minQuantity;
const isTooHigh = quantity > product.mainQuantity;
```

- **Floor validation** — Quantity must be ≥ `minQuantity` (wholesale MOQ)
- **Ceiling validation** — Quantity must be ≤ `mainQuantity` (available stock)
- **Suggested quantities** — Pre-calculated quantity buttons (1x, 2x, 5x minQuantity) for quick selection
- **Real-time feedback** — Error messages appear instantly as the user types, not on form submit

### 6. PrivateRoute with Non-Blocking Feedback
The auth guard uses SweetAlert2 for a toast-style redirect rather than a jarring page switch:

```jsx
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) return <Loader />;

  if (!user) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Hold on!",
      text: "You need to be logged in to access this page.",
      showConfirmButton: false,
      timer: 1200,
    });
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};
```

This provides:
- **Contextual feedback** — Users understand WHY they're being redirected
- **Redirect preservation** — `state={{ from: location }}` enables post-login return to the intended page
- **Loading skeleton** — `<Loader />` prevents flash-of-unauthorized-content during auth state resolution

---

## 🗺️ Roadmap

- [ ] **Stripe Checkout Integration** — Complete the payment flow with Stripe Elements for wholesale orders
- [ ] **Real-Time Inventory** — WebSocket integration for live stock updates across all connected buyers
- [ ] **Bulk Order Upload** — CSV/Excel upload for retailers placing large wholesale orders
- [ ] **Seller Analytics Dashboard** — Sales trends, top products, and revenue charts in DashboardLayout
- [ ] **Order Status Tracking** — Full order lifecycle (pending → processing → shipped → delivered)
- [ ] **PWA Support** — Service worker for offline browsing and push notifications for order updates
- [ ] **Multi-Currency Support** — Currency switching for international B2B buyers
- [ ] **E2E Testing** — Playwright tests covering critical flows (register → brandize → add product → purchase)
- [ ] **Search & Filters** — Full-text search with price range, brand, and availability filters
- [ ] **Wishlist/Favorites** — Save products for later comparison and bulk ordering

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**🏭 Connecting manufacturers to the world, one wholesale order at a time**

Built with 💚 by [Ishtiak Al Humaidi](https://github.com/ishtiakalhumaidi)

</div>
