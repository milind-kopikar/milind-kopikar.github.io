import SaaSCard from "../components/SaaSCard";

const saasList = [
  {
    id: "1",
    name: "Agentic CRM",
    image: "https://via.placeholder.com/200x120?text=Agentic+CRM",
    description: "AI-powered CRM for modern businesses.",
    audience: "For sales teams and entrepreneurs.",
  },
  {
    id: "2",
    name: "SmartScheduler",
    image: "https://via.placeholder.com/200x120?text=SmartScheduler",
    description: "Automate your meetings and appointments.",
    audience: "For busy professionals.",
  },
  // Add more SaaS products here as needed
];

export default function Home() {
  return (
    <div>
      <h1>Milind Kopikar's SaaS Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {saasList.map((saas) => (
          <SaaSCard key={saas.id} saas={saas} />
        ))}
      </div>
    </div>
  );
}