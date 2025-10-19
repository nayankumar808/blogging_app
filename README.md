
`# 📚 Medium Clone

A full-stack **Medium Clone** built with modern technologies like **React**, **TypeScript**, **TailwindCSS**, **Hono**, **Prisma**, and **Zod**. This project includes a **Frontend**, **Backend**, and a shared **Common Library** for types and validations.

---

## 🚀 Features

### 🌟 Frontend
- ✨ User authentication (Signup, Signin).
- ✨ Create, edit, and view blogs.
- ✨ Responsive design using TailwindCSS.

### 🔗 Backend
- ✨ Lightweight REST API with **Hono**.
- ✨ Secure JWT-based authentication.
- ✨ Database management using Prisma ORM.
- ✨ Input validation powered by Zod.

### 📦 Common
- ✨ Shared **TypeScript types** and **validation schemas**.

---

## 🛠️ Tech Stack

| **Layer**  | **Tech**                                                                                     |
|------------|---------------------------------------------------------------------------------------------|
| Frontend   | React, TypeScript, TailwindCSS, Vite, React Router DOM                                      |
| Backend    | Hono, Prisma, Zod, Cloudflare Workers                                                      |
| Database   | Prisma (compatible with PostgreSQL, MySQL, SQLite, etc.)                                   |
| Shared     | Zod (validation), TypeScript (types)                                                       |

---

## 📁 Project Structure

```plaintext
medium_clone/
├── frontend/        # Frontend application
│   ├── src/         # Source code
│   ├── public/      # Static assets
│   ├── tailwind.config.js  # TailwindCSS configuration
│   ├── vite.config.ts      # Vite configuration
│   ├── package.json        # Frontend dependencies
│
├── backend/         # Backend application
│   ├── src/         # Source code
│   ├── prisma/      # Prisma schema and migrations
│   ├── package.json # Backend dependencies
│
├── common/          # Shared library
    ├── src/         # Shared types and validation
    ├── package.json # Common dependencies` 

----------

## ⚙️ Setup Instructions

### ✅ Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn
-   Database (e.g., PostgreSQL, MySQL, SQLite)

### 🌐 Frontend Setup

1.  Navigate to the `frontend` directory:
 
    `cd frontend` 
    
2.  Install dependencies:
    
    `npm install` 
    
3.  Start the development server
    
    `npm run dev` 
   
### 🔗 Backend Setup

1.  Navigate to the `backend` directory:
    
    `cd backend` 
    
2.  Install dependencies:
    
    `npm install` 
    
3.  Set up the database:

    -   Update the `DATABASE_URL` in the `.env` file.
    
5.  Run Prisma migrations:
    
    `npx prisma migrate dev --name init` 
    
6.  Start the development server:
    
    `npm run dev` 
    
### 🔄 Common Setup

1.  Navigate to the `common` directory:
    
    `cd common` 
    
2.  Install dependencies:

    `npm install` 
    
----------

## 🛡️ Environment Variables

### Frontend

No specific environment variables are required for the frontend.

### Backend

Create a `.env` file in the backend directory with the following variables:

env



`DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"` 

----------

## 🚀 Deployment

### 🌐 Frontend Deployment

1.  Build the project:

    `npm run build` 
    
3.  Deploy the `dist` folder to your preferred hosting service (e.g., **Vercel**, **Netlify**).

### 🔗 Backend Deployment

Deploy the backend using **Wrangler**


`npm run deploy` 

----------

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1.  **Fork** the repository.
2.  Create a new branch:

    `git checkout -b feature/YourFeatureName` 
    
3.  Commit your changes:

    `git commit -m "Add some feature"` 
    
4.  Push to the branch:

    `git push origin feature/YourFeatureName` 
    
6.  Open a **Pull Request**.

----------

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

----------

## 🙌 Acknowledgments

-   💡 **Hono** for the lightweight backend framework.
-   💡 **Prisma** for the ORM.
-   💡 **Zod** for input validation.
