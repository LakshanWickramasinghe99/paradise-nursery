# 🌸 Paradise Nursery Shopping Application  

Welcome to the **Paradise Nursery Shopping Application**! This project is a fully functional and interactive front-end application designed to enhance your shopping experience for houseplants.  

---

## ✨ Features  

### 🏡 Landing Page  
- A visually engaging entry point.  
- Includes:  
  - 🌟 **Company Name**  
  - 📝 **A Paragraph About the Company**  
  - 🖼️ **Background Image**  
  - 👉 **"Get Started" Button** linking to the product listing page.  

### 🌱 Product Listing Page  
- Browse a collection of houseplants categorized by features (e.g., air purifying or aromatic).  
- Includes:  
  - 🌐 **Company Name & Logo** (navigates back to the landing page).  
  - 🎯 **Tagline**  
  - 🛒 **Shopping Cart Icon** displaying item count.  
  - 📦 **Product Cards** for each plant:  
    - 📸 **Thumbnail Image**  
    - 💬 **Name, Price & Brief Description**  
    - ➕ **"Add to Cart" Button**, dynamically updating to ✅ "Added to Cart".  

### 🛍️ Shopping Cart Page  
- Review, modify, and finalize your shopping list.  
- Includes:  
  - 🖼️ **Cards for Each Plant in the Cart**  
  - 🔄 **Quantity Modification (Increase/Decrease)**  
  - ❌ **Delete Option to Remove Items**  
  - 💵 **Subtotals for Each Plant** and a 🧮 **Grand Total**.  
  - ✅ **Checkout Button**  

---

## 🔧 User Interactions and Behavior  

- **Adding an Item to the Cart**:  
  - Disables the ➕ "Add to Cart" button.  
  - Updates the 🛒 cart icon in the header.  

- **Removing All Items of a Type from the Cart**:  
  - Re-enables the ➕ "Add to Cart" button on the product listing page.  
  - Updates the 🛒 cart icon.  

- **Dynamic Updates**:  
  - 📊 Total cost and item count dynamically reflect user actions.  

---

## 🛠️ Technologies Used  

- ⚛️ **React**: Front-end framework for building user interfaces.  
- 💻 **TypeScript**: Typed superset of JavaScript for improved code quality.  
- 🎨 **CSS**: Styles for creating an appealing UI.  
- 🧰 Additional libraries/tools as needed.  

---

## 🗂️ Project Structure  

1. **🏡 Landing Page**: Introduces users to the company and app.  
2. **🌱 Product Listing Page**: Explore plants and add them to the cart.  
3. **🛍️ Shopping Cart Page**: View selected items, adjust quantities, and finalize the cart.  

---

## 🚀 Setup Instructions  

1. Clone the repository:  
    ```bash
    git clone https://github.com/your-username/paradise-nursery.git
    ```  
2. Navigate to the project directory:  
    ```bash
    cd paradise-nursery
    ```  
3. Install dependencies:  
    ```bash
    npm install
    ```  
4. Run the development server:  
    ```bash
    npm start
    ```  

The application will be available at 🌐 `http://localhost:3000/`.  

---

## 🛒 How to Use  

1. Start at the 🏡 **Landing Page** to learn about Paradise Nursery.  
2. Click 👉 **"Get Started"** to browse the 🌱 **Product Listing**.  
3. Add plants to your cart by clicking ➕ **"Add to Cart"**.  
4. Navigate to the 🛍️ **Shopping Cart Page** to review and adjust your items.  
5. ✅ Proceed to checkout to finalize your order.  

---

## 🤝 Contributing  

Contributions are welcome! Please follow these steps:  

1. Fork the repository.  
2. Create a feature branch:  
    ```bash
    git checkout -b feature-name
    ```  
3. Commit your changes:  
    ```bash
    git commit -m "Add feature name"
    ```  
4. Push to the branch:  
    ```bash
    git push origin feature-name
    ```  
5. Open a pull request.  

---
