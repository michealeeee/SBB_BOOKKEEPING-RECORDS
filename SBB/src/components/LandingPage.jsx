export default function LandingPage() {
  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Bookkeeply</div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#footer">Contact</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Smart Bookkeeping for Small Businesses</h1>
        <p>
          Manage income, expenses, invoices, and reports in one clean dashboard.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Start Free Trial</button>
          <button className="secondary-btn">View Pricing</button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <div className="feature">📊 Real-time Analytics</div>
        <div className="feature">🧾 Smart Invoicing</div>
        <div className="feature">💰 Expense Tracking</div>
        <div className="feature">📁 Financial Reports</div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing">

        <h2>Monthly Subscription Plans</h2>

        <div className="pricing-grid">

          <div className="plan">
            <h3>Starter</h3>
            <p className="price">$9 / month</p>
            <ul>
              <li>Basic bookkeeping</li>
              <li>1 business</li>
              <li>Email support</li>
            </ul>
            <button>Subscribe</button>
          </div>

          <div className="plan featured">
            <h3>Professional</h3>
            <p className="price">$19 / month</p>
            <ul>
              <li>Full dashboard access</li>
              <li>Unlimited invoices</li>
              <li>Advanced analytics</li>
            </ul>
            <button>Subscribe</button>
          </div>

          <div className="plan">
            <h3>Enterprise</h3>
            <p className="price">$39 / month</p>
            <ul>
              <li>Multi-business system</li>
              <li>API access</li>
              <li>Priority support</li>
            </ul>
            <button>Subscribe</button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="footer">
        <p>© 2026 Bookkeeply. All rights reserved.</p>
      </footer>

    </div>
  );
}