export default function StatCard({ title, value, color }) {
  return (
    <div className={`card ${color}`}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}