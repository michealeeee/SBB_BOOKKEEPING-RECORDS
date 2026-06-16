import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";
import "./styles/landing.css";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Invoices from "./components/invoices/Invoices";
import Reports from "./components/reports/Reports";

export default function App() {
  // controls landing vs app
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // controls dashboard pages
  const [page, setPage] = useState("dashboard");

  // ---------- LANDING PAGE ----------
  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  // ---------- DASHBOARD APP ----------
  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <div className="main">
        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <Transactions />}
        {page === "invoices" && <Invoices />}
        {page === "reports" && <Reports />}
      </div>
    </div>
  );
}