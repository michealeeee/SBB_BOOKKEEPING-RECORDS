import StatCard from "./StatCard";
import LineChart from "./LineChart";
import CashFlow from "./CashFlow";
import SummaryBoxes from "./SummaryBoxes";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="grid">
        <StatCard title="Income" value="$24,250" color="green" />
        <StatCard title="Expenses" value="$8,320" color="red" />
        <StatCard title="Net Profit" value="$15,930" color="blue" />
        <StatCard title="Invoices" value="$5,600" color="orange" />
      </div>

      <CashFlow />
         <LineChart />
      <SummaryBoxes />
    </div>
  );
}