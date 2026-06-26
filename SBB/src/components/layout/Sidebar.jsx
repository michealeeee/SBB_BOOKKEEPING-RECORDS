export default function Sidebar({ setPage, sidebarOpen }) {
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("transactions")}>Transactions</button>
      <button onClick={() => setPage("invoices")}>Invoices</button>
      <button onClick={() => setPage("reports")}>Reports</button>
      <button onClick={() => setPage("expenses")}>Expenses</button>
      <button onClick={() => setPage("vendors")}>Vendors</button>
      <button onClick={() => setPage("customers")}>Customers</button>
      <button onClick={() => setPage("taxes")}>Taxes</button>
      <button onClick={() => setPage("subscribers")}>Subscribers</button>
    </div>
  );
}