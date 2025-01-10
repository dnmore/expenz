# 💰 Expenz - Expense Tracker Dashboard

The Expense Tracker Dashboard is a streamlined and visually engaging web application designed to help users monitor and analyze their financial activity. The application offers a dashboard with a high-level overview of total income, expenses, and budget, accompanied by visual charts for better understanding. Dedicated routes for viewing detailed income and expense entries include functionality for exporting data as a CSV file via a Python FastAPI endpoint.

[Live Demo](https://expenz-dashboard.vercel.app/)

**Note:** This project focuses solely on data retrieval and visualization. Authentication, CRUD operations, and data entry functionalities are not included.


![Preview](/frontend/public/hero.png)


## ✨ Features

- **Dashboard Overview:** Displays total income, expense, and budget with supporting charts for visual insights.
- **Income and Expense Routes:** View detailed entries categorized by income or expense.
- **CSV Export Functionality:** Export financial data in CSV format through a FastAPI endpoint.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Loading State Skeletons:** Skeleton components for smooth user experience during dashboard loading.

## 🛠️ Tech Stack

### Frontend
- `Next.js`- React framework for building fast and scalable web applications.
- `@mui/x-charts`- Charting library for data visualization.
- `React`– A powerful front-end library for building user interfaces.
- `react-icons`- Icon library for consistent UI.
- `motion`- Animation library for React.
- `tailwindcss` - Utility-first CSS framework for custom designs.

### Backend
- `Drizzle ORM`- TypeScript ORM for querying and managing database models.
- `Neon Database`- Serverless PostgreSQL database solution for modern applications.

### Python (CSV Export API)
- `FastAPI`- Fast and modern web framework for building APIs.
- `asyncpg`- Asynchronous PostgreSQL client for Python.
- `uvicorn` - ASGI server for running FastAPI applications.

## ⚙️ Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/dnmore/expenz.git
   ```
2. **Install dependencies**
   - For the frontend:
   ```bash
     cd frontend
     npm install
   ```
   - For the Python backend:
   ```bash
     cd services/csv-export
     pip install -r requirements.txt
   ```
3. **Set up environment variables**
- Create `.env` files in the project root for both the frontend and backend, and define necessary variables (e.g., database connection string, API keys).
4. **Run the application**
  - Start the frontend:
   ```bash
    cd frontend
    npm run dev
   ```

  - Start the backend:
   ```bash
    cd services/csv-export
    uvicorn api.index:app --reload
 
   ```
5. **Access the application**
- Open your browser and navigate to `http://localhost:3000`.

## 📄 License

This project is licensed under the MIT License.




