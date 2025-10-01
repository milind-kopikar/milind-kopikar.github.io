import { Link } from "react-router-dom";

export default function SaaSCard({ saas }) {
  const handleCardClick = () => {
    if (saas.url) {
      if (saas.url.startsWith('http') || saas.url.startsWith('/')) {
        if (saas.url === '/konkani-dictionary') {
          // Open dictionary in new tab
          window.open('https://milind-kopikar.github.io/konkani-dictionary/', '_blank');
        } else if (saas.url === '#chatbot') {
          // Scroll to chatbot section
          document.getElementById('chatbot-section')?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.open(saas.url, '_blank');
        }
      }
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "20px",
        padding: "2rem",
        color: "white",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "translateY(-10px)";
        e.target.style.boxShadow = "0 25px 60px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "-50px",
        right: "-50px",
        width: "100px",
        height: "100px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />
      
      <img
        src={saas.image}
        alt={saas.name}
        style={{ 
          width: "100%", 
          borderRadius: "15px",
          marginBottom: "1.5rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      />
      
      <h3 style={{ 
        fontSize: "1.5em", 
        marginBottom: "1rem",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)" 
      }}>
        {saas.name}
      </h3>
      
      <p style={{ 
        marginBottom: "1rem", 
        lineHeight: "1.6",
        opacity: 0.9 
      }}>
        {saas.description}
      </p>
      
      <p style={{ 
        fontStyle: "italic", 
        marginBottom: "1.5rem",
        opacity: 0.8,
        fontSize: "0.9em" 
      }}>
        {saas.audience}
      </p>

      {/* Tech Stack */}
      {saas.tech && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "0.5rem" 
          }}>
            {saas.tech.map((tech, index) => (
              <span 
                key={index}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  padding: "4px 12px",
                  borderRadius: "15px",
                  fontSize: "0.75em",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.3)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      {saas.stats && (
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          marginBottom: "1rem"
        }}>
          {Object.entries(saas.stats).map(([key, value], index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{ 
                fontWeight: "bold", 
                fontSize: "1.2em",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)" 
              }}>
                {value}
              </div>
              <div style={{ 
                fontSize: "0.7em", 
                opacity: 0.8,
                textTransform: "capitalize" 
              }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Button */}
      <div style={{
        background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)",
        color: "white",
        padding: "12px 24px",
        borderRadius: "25px",
        textAlign: "center",
        fontWeight: "600",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease"
      }}>
        {saas.url === '#chatbot' ? '💬 Try Chatbot' : 
         saas.url === '/konkani-dictionary' ? '🚀 Open Dictionary' : 
         '🔗 Learn More'}
      </div>
    </div>
  );
}