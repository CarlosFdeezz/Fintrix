# Fintrix

Fintrix is an educational project to build a full-stack personal finance management application. It was born as my first "serious" portfolio project and is meant to document the complete learning journey of a modern workflow: from defining the product to deploying a React frontend with Tailwind and an Express backend powered by SQLite.

## Educational purpose

- **Comprehensive learning:** serves as a lab to practice client/server architecture, reusable component design, and data persistence.  
- **Good practices from day one:** the project includes linting configuration, Vitest-based testing, and layered separation to encourage professional habits.  
- **Data-driven iterations:** the API lets you register expenses and analyze them, making it possible to experiment with real or simulated financial metrics.

## AI in the process

Artificial intelligence was involved throughout the workflow: ideation, drafting initial copy, structuring the codebase, and reviewing changes. The goal is to show how human judgment can be combined with AI tools to speed up technical decisions, author documentation, and obtain continuous feedback. Each iteration is versioned to highlight the role of AI in the development.

## Current features

- Frontend built with **React + Vite** and styled with **Tailwind CSS**.  
- Navigation through key sections (landing page and themed pages) via a responsive header.  
- Footer describing Fintrix’s purpose plus legal notice.  
- Backend in **Express** that exposes REST endpoints to create, list, and delete expenses stored in **SQLite**.  
- Initial database `expenses.db` ready to use during development.

## Architecture

```
frontend/   → React application built with Vite
backend/    → Express API + SQLite
LICENCE     → Project MIT licence
```

- Communication happens through HTTP requests (`/api/expenses`).  
- Modular structure is favored (`components/`, `layouts/`, `pages/`, `config/`).  
- The backend owns the business logic and persistence in SQLite.

## Prerequisites

- Node.js 20 or higher.  
- npm 10 or higher.  

> 💡 Each package (frontend and backend) manages its own dependencies, so installation must be run in both directories.

## Getting started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fintrix.git
   cd fintrix
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Start the API (port 3001 by default)**
   ```bash
   cd backend
   node index.js
   ```

4. **Run the frontend in development mode (port 5173 by default)**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open the browser at** `http://localhost:5173` and start exploring Fintrix.

## Useful scripts

### Backend
- `node index.js`: starts the Express server and creates the database if it does not exist.

### Frontend
- `npm run dev`: development server with hot reload.  
- `npm run build`: generates the optimized production build.  
- `npm run preview`: previews the local production build.  
- `npm run lint`: runs ESLint over `.js` and `.jsx` files.  
- `npm run test`: runs the Vitest test suite.

## Suggested roadmap

- [ ] Design a basic authentication system.  
- [ ] Integrate visualizations (charts and reports) based on recorded expenses.  
- [ ] Add advanced filters and data export.  
- [ ] Prepare deployment scripts (Docker / managed services).  
- [ ] Document technical decisions and lessons learned in every release.

## Licence

This project is licensed under the [MIT License](./LICENCE).

---

Fintrix reflects my commitment to learning by building. By combining a clear educational goal with the support of AI tools, I aim to demonstrate technical judgment, iteration skills, and a candid narrative about the development process.
