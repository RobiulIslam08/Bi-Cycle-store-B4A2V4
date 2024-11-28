# 🚲 BI-CYCLE MANAGEMENT SYSTEM

### Assignment Set : 4

The **BI-CYCLE MANAGEMENT SYSTEM** is a backend application developed using **Express.js**, **MongoDB**, **Mongoose**, and **TypeScript**. This project enables users to perform various **CRUD operations** and advanced MongoDB functionalities. It provides APIs for managing products, creating orders, and calculating the revenue generated from those orders. Additionally, it includes validation to ensure data integrity. The project follows a modular design, with separate modules for **Product Management** and **Order Handling**. To maintain code consistency, **Prettier** and **ESLint** have been configured.

### Live Link:

- [BI-CYCLE MANAGEMENT SYSTEM](https://bi-cycle-store-b4-a2-v4.vercel.app/)

### Video Demo:

- [Video Demonstration](https://drive.google.com/file/d/1wfNcEeD1VUL1_tlfrlwc3HGuo3lbLWFM/view)

---

### PROJECT USAGE GUIDELINES

This is a backend-only project, so you need to use **Postman** or a similar API testing tool to interact with it.

---

### ADD A NEW PRODUCT

- **ENDPOINT URL**: `/api/products`  
- **METHOD**: `POST`  
- **Body Example**:  
```json
{
  "name": "Roadster 7000",
  "brand": "SpeedKing",
  "price": 400,
  "type": "Mountain",
  "description": "High-performance mountain bike for adventure enthusiasts.",
  "quantity": 10,
  "inStock": true
}
```

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products
```

- **Description**:  
  Use this endpoint to create a new product by providing the required details. Validation ensures that all mandatory fields are included. If any field is missing, an error will be returned.

---

### FETCH ALL PRODUCTS

- **ENDPOINT URL**: `/api/products`  
- **METHOD**: `GET`  
- **Description**:  
  Use this URL to retrieve all product data from the database.  

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products
```

- **Search Functionality**:  
  To search for products by specific fields such as name, brand, or type, append a `searchTerm` query parameter.  
  Example:  
  ```bash
  https://bi-cycle-store-b4-a2-v4.vercel.app/api/products?searchTerm=Hybrid
  ```
  **Note**: The search uses regex, enabling partial matching for flexible queries.

---

### FETCH A SINGLE PRODUCT

- **ENDPOINT URL**: `/api/products/:productId`  
- **METHOD**: `GET`  
- **Description**:  
  Replace `:productId` with the ID of the desired product to fetch its details.

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740bf78d95e6dd49804f02e
```

---

### UPDATE A PRODUCT

- **ENDPOINT URL**: `/api/products/:productId`  
- **METHOD**: `PUT`  
- **Description**:  
  Provide the product ID and specify the fields you want to update.

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740bf78d95e6dd49804f02e
```

- **Body Example**:  
```json
{
  "price": 450,
  "quantity": 25
}
```

- **Note**: Partial updates are allowed. For instance, updating a single field like `quantity` is sufficient.

---

### DELETE A PRODUCT

- **ENDPOINT URL**: `/api/products/:productId`  
- **METHOD**: `DELETE`  
- **Description**:  
  Delete a specific product by providing its ID.

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/products/6740c2eb2e09631f60bf7b53
```

---

### CREATE AN ORDER

- **ENDPOINT URL**: `/api/orders`  
- **METHOD**: `POST`  
- **Body Example**:  
```json
{
  "email": "buyer@example.com",
  "product": "6740bf78d95e6dd49804f02e",
  "quantity": 5,
  "totalPrice": 200
}
```

- **Description**:  
  Place an order by providing order details. If the `totalPrice` is not provided, it is calculated automatically based on the product price and quantity.

---

### CALCULATE TOTAL REVENUE

- **ENDPOINT URL**: `/api/orders/revenue`  
- **METHOD**: `GET`  
- **Description**:  
  Retrieve the total revenue generated from all orders.

- **Full URL Format**:  
```bash
https://bi-cycle-store-b4-a2-v4.vercel.app/api/orders/revenue
```

- **Note**: Uses MongoDB aggregation to compute revenue by summing the `totalPrice` field from all order records.

---

### HIGHLIGHTED FEATURES

- **TypeScript Integration**: Ensures strong typing and better code maintenance.
- **Data Validation**: Validates incoming data to prevent invalid or incomplete entries.
- **Regex Search**: Enables efficient product filtering based on partial matches.
- **Timestamps**: Automatically records product creation and update times.
- **Prettier & ESLint**: Maintains clean and consistent code formatting.

---

### TECHNOLOGIES USED

- **Express.js**  
- **MongoDB**  
- **Mongoose**  
- **TypeScript**

---

### INSTALLATION STEPS

1. Clone the repository:  
   ```bash
   git clone https://github.com/Sazid60/Bi-Cycle-store-B4A2V4.git
   ```

2. Navigate to the project directory and install dependencies:  
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:  
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=<your_mongodb_connection_url>
   ```

4. Start the project in development mode:  
   ```bash
   npm run start:dev
   ```

---

### FUTURE ENHANCEMENTS

- Add authentication and role-based authorization.
- Implement pagination for product and order data.
- Build a frontend interface for user-friendly interactions.
- Improve error handling with custom error middleware.
