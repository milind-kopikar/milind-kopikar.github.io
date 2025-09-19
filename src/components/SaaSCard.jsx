import { Link } from "react-router-dom";

export default function SaaSCard({ saas }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      width: "250px",
      boxShadow: "2px 2px 8px #eee"
    }}>
      <img
        src={saas.image}
        alt={saas.name}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3>{saas.name}</h3>
      <p>{saas.description}</p>
      <p><em>{saas.audience}</em></p>
      <Link to={`/saas/${saas.id}`}>Learn More</Link>
    </div>
  );
}