# Clothiq – Fullstack E-commerce Clothing Store

**React · React Router · Node.js · Express · Prisma · MySQL**

A full-stack e-commerce application where users can browse clothing categories, view product details, manage favourites, and use a client-side shopping cart.

The project focuses on clean component architecture, reusable UI elements, consistent global styling, and a structured backend powered by Prisma ORM and MySQL.

---

## Features

### Product Browsing

- Browse products by:
  - Gender (Women / Men / Children)
  - Category
  - Subcategory
- Product detail pages with:
  - Multiple photos
  - Description
  - Maintenance information
- Pagination support
- Bestseller section on main page

---

### Shopping Cart

- Add products to cart
- Remove individual products from cart
- Cart stored in localStorage
- Automatic total price calculation
- Currency switch (PLN / USD)
- Delivery cost logic with free shipping threshold
- Cart summary panel

---

### Favourites

- Add products to favourites
- Remove favourites
- Backend persistence (Prisma + MySQL)
- Favourite list page

---

### UI & UX

- Fully responsive layout (desktop & mobile)
- Sticky top navigation
- Mobile-optimized header layout
- Hero section with dynamic image per gender
- CSS Modules with global design tokens
- Reusable components:
  - Product
  - Products Grid
  - Accordion
  - Breadcrumbs
  - Pagination
  - CartSummary
  - FavouriteProduct
  - ExpandableMenu

---

## Screenshots

| Home                          | Subcategory                                 | Favorite                              | Bag                         |
| ----------------------------- | ------------------------------------------- | ------------------------------------- | --------------------------- |
| ![Home](screenshots/home.png) | ![Subcategory](screenshots/subcategory.png) | ![Favorite](screenshots/favorite.png) | ![Bag](screenshots/bag.png) |

---

## Tech Stack

### Frontend

- React 18
- React Router v6 (Data Router)
- Context API
- CSS Modules
- LocalStorage (cart persistence)

### Backend

- Node.js
- Express
- Prisma ORM
- MySQL
- dotenv
- CORS

---

## Architecture Overview

- REST API built with Express
- Prisma ORM for database access
- Relational data modeling (Products, Photos, Favourites)
- Frontend data fetching via React Router loaders
- Context API for global state management (cart & currency)

---

## Project Structure

```bash
back-end/
  prisma/
    schema.prisma
    seed.js
  src/
    product/
    favourite/
    constants/
  public/
    product-photos/
  index.js

front-end/
  src/
    components/
    views/
    api/
    contexts/
    constants/
    styles/
  main.jsx
```

## Installation

### 1. Clone repository

```bash
git clone https://github.com/kacpi95/ecommerce-platform-fullstack.git
cd ecommerce-platform-fullstack
```

### 2. Backend configuration

**Create a `.env` file inside `back-end/` directory:**

```bash
DATABASE_URL="mysql://user:password@localhost:3306/ecommerceclothesdb"
PORT=3000
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run migrations & seed database

```bash
npx prisma migrate reset
```

### 5. Start backend

```bash
npm run dev
```

**Backend runs at:**

http://localhost:3000

### 6. Frontend configuration

```bash
cd front-end
npm install
npm run dev
```

**Frontend runs at:**

http://localhost:5173

---

## Database

- Products stored in MySQL
- Relations:
  - Product → Photos (1:n)
  - Product → Favourites (1:n)
- Images served statically from:

```bash
  back-end/public/product-photos
```

---

## Styling Approach

- Global design tokens:
  - colors
  - border radius
  - spacing
  - container width
- CSS Modules for local scope
- Responsive breakpoints
- Clean flex/grid layout
- Theme-ready color system (easy to reskin)

---

## What I Learned

- Building a fullstack e-commerce architecture
- Designing relational database models with Prisma
- Structuring Express controllers and services
- Handling frontend-backend integration
- Managing state with Context API
- Implementing client-side cart logic
- Building reusable and scalable component systems
- Debugging routing & loader issues in React Router
- Responsive UI architecture

---

## Future Improvements

- User authentication (login / registration)
- User accounts with order history
- Checkout flow after cart
- Payment integration (Stripe / PayU)
- Admin panel for managing products
- Quantity handling instead of duplicate cart items
- Server-side cart persistence (instead of localStorage)
- Product reviews and ratings
- Filtering by price range
- Performance optimization & lazy loading
- Automated tests (frontend & backend)
