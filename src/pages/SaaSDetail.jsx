import { useParams } from "react-router-dom";

const saasList = [
  {
    id: "1",
    name: "Agentic CRM",
    image: "https://via.placeholder.com/200x120?text=Agentic+CRM",
    description: "AI-powered CRM for modern businesses.",
    audience: "For sales teams and entrepreneurs.",
    details: "Agentic CRM helps you automate sales, manage leads, and grow your business with AI.",
  },
  {
    id: "2",
    name: "SmartScheduler",
    image: "https://via.placeholder.com/200x120?text=SmartScheduler",
    description: "Automate your meetings and appointments.",
    audience: "For busy professionals.",
    details: "SmartScheduler syncs with your calendar and uses AI to find the best meeting times.",
  },
  // Add more SaaS products here as needed
];

export default function SaaSDetail() {
  const { id } = useParams();
  const saas = saasList.find((s) => s.id === id);

  if (!saas) return <div>Product not found.</div>;

  return (
    <div>
      <h1>{saas.name}</h1>
      <img src={saas.image} alt={saas.name} style={{ width: "300px" }} />
      <p>{saas.details}</p>
      <button>Buy Now</button>
    </div>
  );
}