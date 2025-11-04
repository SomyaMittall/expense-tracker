# 💰 Expense Tracker — Personal Finance Dashboard

**Expense Tracker** is a modern React-based web application that helps users manage their personal finances with ease.  
It provides an interactive dashboard displaying your **total balance**, **income**, **expenses**, and **recent transactions**, along with a **visual financial overview chart** for clear insights.

---

## 🚀 Features

### 👤 user
- Add, view, and delete income and expense entrie  
- Filter expense and income based on category, amount, date  
- Auto-calculated expense summary by category
- Can see Chart Visualization of expenses

### 🧠 General
- Simple, responsive UI using Tailwind CSS  
- Organized and readable code structure

### 💼 Dashboard
- Financial overview with income vs expense vs total balance  
- Total Balance, Income & Expenses summary cards   
- Recent transaction list with clean layout

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Charting** | Recharts |
| **State Management** | local component state (via React’s useState) |
| **Build Tool** | Vite |

---
## 📂 Project Structure
```
EXPENSE-TRACKER/     
│
└── frontend/
    ├── src/
    │   ├── components/  # UI Components (Dashboard-widgets, Layouts, Income, Expense)
    │   ├── pages/       # Main pages (Dashboard, Income, Expense, Not found)
    │   ├── services/    # Logic for managing data (localStorage or mock APIs)
    │   ├── utils/       # data & helper functions
    │   ├── assets/      # Images
    │   └── App.jsx / main.jsx
    └── index.html
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SomyaMittall/expense-tracker.git
```
### 2. Navigate to the Project Folder
```
cd Expense-Tracker
```

---

## 🔹 Frontend Setup
```bash
cd frontend
npm install
```

### Run the Development Server
```bash
npm run dev
```
---

## ✅ Future Enhancements
 - Add authentication (login & register)
 - Better UI/UX Enhancements
 - Export reports (CSV / PDF)
 - Dark / Light theme support
 - Backend integration (Node.js + MongoDB)

 ---

## 🤝 Contributing
Feel free to report issues or submit enhancements via pull requests.
All contributions that improve functionality, performance, or documentation are welcome!

---

## 📄 License
This project is created for learning and interview assignment purposes.
You may use or modify it freely for educational and demonstration goals.

---




