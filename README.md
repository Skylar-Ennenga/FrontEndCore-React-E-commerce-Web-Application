# E-Commerce Frontend Project

## Overview

This project is a frontend application for an e-commerce platform, built with React, Vite, and Bootstrap. The application provides features for managing products, customer accounts, customers, and orders. It interacts with a backend API that was developed separately, which handles the data storage and business logic for these entities.

## Features

- **Product Management**: 
  - View all products
  - Add new products
  - Edit existing products
  - Delete products

- **Customer Management**:
  - View all customers
  - Add new customers
  - Edit existing customers
  - Delete customers

- **Customer Account Management**:
  - View all customer accounts
  - Add new customer accounts
  - Edit existing customer accounts
  - Delete customer accounts

- **Order Management**:
  - View all orders
  - Add new orders
  - Edit existing orders
  - Delete orders

- **User Interaction**:
  - Modal pop-ups for success and error messages on CRUD operations
  - Navigation between different sections using React Router

## Backend API

This frontend application is linked to a backend API that manages the data for products, customers, customer accounts, and orders. The API was developed separately and is not included in this codebase. However, the frontend interacts with the API via HTTP requests to perform all CRUD operations.

### API Endpoints

The application interacts with the following endpoints:

- **Products**: `/products`
- **Customers**: `/customers`
- **Customer Accounts**: `/customeraccounts`
- **Orders**: `/orders`

Each of these endpoints supports standard CRUD operations (`GET`, `POST`, `PUT`, `DELETE`) to manage the respective entities.

## Installation

To get started with this project:

1. Clone this repository.
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the project directory.
   ```bash
   cd your-repo
   ```

3. Install the dependencies.
   ```bash
   npm install
   ```

4. Run the development server.
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite) to see the application in action.

## Usage

### Adding Products, Customers, Accounts, and Orders

- Navigate to the relevant section using the navbar.
- Use the provided forms to add new products, customers, accounts, or orders.
- The application provides a simple UI to interact with the backend API and manage these entities.

### Editing and Deleting

- Use the "Edit" buttons to update existing records.
- Use the "Delete" buttons to remove records from the database.
- Confirm deletion via a pop-up window before proceeding.

### Viewing Details

- Click on "Details" to view more information about any product, customer, account, or order.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast project setup and development.
- **Bootstrap**: For styling and responsive design.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For managing navigation within the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.
