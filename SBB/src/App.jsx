import { useState } from "react";
import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Invoices from "./components/invoices/Invoices";
import Reports from "./components/reports/Reports";

export default function App() {
  const [page, setPage] = useState("dashboard");

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