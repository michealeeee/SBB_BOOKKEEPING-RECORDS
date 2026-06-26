import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./components/dashboard/Dashboard";
import Transactions from "./components/transactions/Transactions";
import Invoices from "./components/invoices/Invoices";
import Reports from "./components/reports/Reports";
import Expenses from "./components/expenses/Expenses";
import Vendors from "./components/vendors/Vendors";
import Customers from "./components/customers/Customers";
import Taxes from "./components/taxes/Taxes";
import Subscribers from "./components/subscribers/Subscribers";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(prev => !prev);

  if (isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "transactions":
        return <Transactions />;
      case "invoices":
        return <Invoices />;
      case "reports":
        return <Reports />;
      case "expenses":
        return <Expenses />;
      case "vendors":
        return <Vendors />;
      case "customers":
        return <Customers />;
      case "taxes":
        return <Taxes />;
      case "subscribers":
        return <Subscribers />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-header">
        <button className="menu-btn" onClick={toggleMenu}>
          <i className={mobileOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>
      </div>

      <Sidebar
        setPage={setPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="main-content">{renderPage()}</main>
    </div>
  );
}