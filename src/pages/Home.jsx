import SaaSCard from "../components/SaaSCard";
import Chatbot from "../components/Chatbot";

const saasList = [
  {
    id: "konkani-dictionary",
    name: "Amchigale Konkani Dictionary",
    image: "https://via.placeholder.com/200x120/667eea/ffffff?text=🕉️+Konkani",
    description: "Complete digital dictionary for the Konkani language with 4,381 entries featuring Devanagari script and smart search.",
    audience: "For language learners and cultural preservation.",
    url: "/konkani-dictionary",
    tech: ["Node.js", "PostgreSQL", "Unicode", "Railway"],
    stats: {
      entries: "4,381",
      script: "83% Devanagari", 
      searches: "6 Types"
    }
  },
  {
    id: "ai-chatbot",
    name: "Multi-LLM AI Chatbot",
    image: "https://via.placeholder.com/200x120/4ECDC4/ffffff?text=🤖+AI+Chat",
    description: "Intelligent chatbot with multi-provider support (OpenAI, Anthropic, Gemini) and voice capabilities.",
    audience: "For AI-powered conversations and learning.",
    url: "#chatbot",
    tech: ["React", "Node.js", "LLM APIs", "Voice AI"],
    stats: {
      providers: "3 LLM",
      features: "Voice Ready",
      deployment: "Cloud Native"
    }
  },
  {
    id: "agentic-crm",
    name: "Agentic CRM",
    image: "https://via.placeholder.com/200x120?text=Agentic+CRM",
    description: "AI-powered CRM for modern businesses.",
    audience: "For sales teams and entrepreneurs.",
    tech: ["AI Agents", "CRM", "Automation"],
    stats: {
      automation: "80%",
      leads: "Smart Scoring",
      integration: "Multi-Platform"
    }
  },
  {
    id: "smart-scheduler",
    name: "SmartScheduler",
    image: "https://via.placeholder.com/200x120?text=SmartScheduler",
    description: "Automate your meetings and appointments.",
    audience: "For busy professionals.",
    tech: ["Calendar AI", "Scheduling", "Integration"],
    stats: {
      bookings: "Auto",
      conflicts: "Zero",
      platforms: "Universal"
    }
  },
];

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "4rem 2rem",
        borderRadius: "20px",
        textAlign: "center",
        marginBottom: "3rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ 
          fontSize: "3em", 
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)" 
        }}>
          Milind Kopikar's Digital Portfolio
        </h1>
        <p style={{ 
          fontSize: "1.3em", 
          opacity: 0.9,
          maxWidth: "800px",
          margin: "0 auto" 
        }}>
          Software Engineer & Language Enthusiast building AI-powered solutions for language preservation and modern business automation
        </p>
      </div>

      {/* Projects Grid */}
      <h2 style={{ 
        textAlign: "center", 
        color: "#2c3e50", 
        marginBottom: "2rem",
        fontSize: "2.5em" 
      }}>
        Featured Applications
      </h2>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {saasList.map((saas) => (
          <SaaSCard key={saas.id} saas={saas} />
        ))}
      </div>

      {/* Interactive AI Demo Section */}
      <div 
        id="chatbot-section"
        style={{
          background: "#f8f9fa",
          padding: "3rem 2rem",
          borderRadius: "20px",
          marginTop: "3rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ 
          textAlign: "center", 
          color: "#2c3e50", 
          marginBottom: "2rem" 
        }}>
          🤖 Try the AI Chatbot
        </h2>
        <p style={{ 
          textAlign: "center", 
          color: "#666", 
          marginBottom: "2rem",
          fontSize: "1.1em" 
        }}>
          Experience multi-LLM AI conversation with support for OpenAI, Anthropic, and Google Gemini
        </p>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto", 
          height: "500px",
          border: "1px solid #ddd",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}>
          <Chatbot />
        </div>
      </div>
    </div>
  );
}