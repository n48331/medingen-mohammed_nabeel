# Medingen Project Documentation

## Overview
This repository contains the backend and frontend components of the Medingen project. Below are structured README files for each part of the project to facilitate documentation and maintenance.

## **Backend**
Handles API requests and database operations for Medingen.

### **Setup**
1. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

2. Configure environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    SECRET_KEY=your-secret-key
    SQLALCHEMY_DATABASE_URI=mysql+mysqlconnector://<user>:<password>@localhost/medingen_db
    JWT_SECRET_KEY=your-jwt-secret-key
    ```

    Example data can be found in `.env.local`.

3. Update `config.py`:
    ```python
    import os

    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
    ```

4. Seed data:
    ```bash
    python seeders.py
    ```

5. Run the application:
    ```bash
    python app.py
    ```

### **Files**
- **`app.py`**: Main Flask app with extensions and routes.
- **`config.py`**: Configuration settings.
- **`models.py`**: Database models (e.g., Product, Review).
- **`routes.py`**: API endpoints (e.g., `/api/products`).
- **`extensions.py`**: Shared Flask extensions (db, cache).
- **`seeders.py`**: Adds sample data to MySQL.

### **API Endpoints**
- `GET /api/products`: List all products.
- `GET /api/products/<id>`: Get full details for a product.

---

## **Frontend**
Manages UI components and interactions.
### **Setup**

1. Install dependencies:
    ```bash
    npm install
    ```
    Or, if you prefer `pnpm`:
    ```bash
    pnpm install
    ```

2. Start the development server:
    ```bash
    npm start
    ```
    Or, with `pnpm`:
    ```bash
    pnpm start
    ```

3. Build the application for production:
    ```bash
    npm run build
    ```
    Or, with `pnpm`:
    ```bash
    pnpm run build
    ```


### **Context API**
#### `frontend/src/context/ProductContext.js`
- Manages product data for the frontend.
- Provides data via React Context.
- Fetches data from `/api/products/<id>` and `/api/products`.
- Uses `useMemo` to cache processed data.
- Handles loading and error states.

#### **Usage**
```jsx
<ProductProvider><App /></ProductProvider>
```
Use in components:
```jsx
const { product, allProducts } = useProduct();
```

---

### **Components Documentation**

#### `frontend/src/components/CompareMedicine/`
- Compares multiple medicines.
- Displays medicine details like price, ratings, and reviews.
- Uses Framer Motion for animations.

#### `frontend/src/components/ProductDetails/`
- Shows detailed medicine info.
- Displays description, uses, side effects, and generic alternatives.
- Uses nested components like `GenericMedicine` and `ProductCard`.

#### `frontend/src/components/FAQSection/`
- Lists FAQs for a product.
- Accordion-style collapse using AnimatePresence.

#### `frontend/src/components/ReviewsSection/`
- Displays user reviews with star ratings visualization.
- Staggered animations with Framer Motion.

#### `frontend/src/components/Disclaimer/`
- Legal disclaimer section.
- Provides a notice about medical information usage.

#### `frontend/src/components/Footer/`
- Displays logo, navigation links, and copyright.
- Responsive grid layout with hover effects.

#### `frontend/src/components/Header/`
- Navigation header with logo, links, and cart icon.
- Desktop navigation and mobile bottom bar.
- Uses Framer Motion for animations.

#### `frontend/src/components/Features/`
- Highlights key app features (e.g., Safe Payment).
- Uses a responsive grid and Framer Motion animations.

---


