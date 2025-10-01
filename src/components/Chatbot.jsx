import React, { useState, useRef, useEffect } from "react";
import axios from "axios"; // For making HTTP requests to backend

// Chatbot component: Multi-modal AI interface for scalable platform
export default function Chatbot({ onClose }) {
  // === STATE MANAGEMENT ===
  // Store all chat messages (user and AI responses)
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your AI assistant. How can I help you today?" }
  ]);
  
  // Current user input
  const [input, setInput] = useState("");
  
  // Loading state when waiting for AI response
  const [loading, setLoading] = useState(false);
  
  // Error handling for connection issues
  const [error, setError] = useState(null);
  
  // Current LLM provider info (for platform transparency)
  const [currentProvider, setCurrentProvider] = useState("loading...");

  // Ref for auto-scrolling to bottom
  const messagesEndRef = useRef(null);

  // === CONFIGURATION (Platform-ready) ===
  // Get backend URL from environment (supports multi-cloud deployment)
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "https://chatbot-backend-h9um.onrender.com";

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Fetch current provider on component mount
  useEffect(() => {
    const fetchCurrentProvider = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/chat/providers`);
        const currentProv = response.data.providers.find(p => p.current);
        if (currentProv) {
          setCurrentProvider(currentProv.name);
        }
      } catch (error) {
        console.error("Failed to fetch current provider:", error);
        setCurrentProvider("unknown");
      }
    };
    
    fetchCurrentProvider();
  }, [BACKEND_URL]);
  
  // Feature flags for platform capabilities
  const voiceEnabled = process.env.REACT_APP_VOICE_ENABLED === 'true';
  const debugMode = process.env.REACT_APP_DEBUG_MODE === 'true';

  // === FUTURE FEATURES (Voice Integration Ready) ===
  const handleAudioCall = () => {
    if (voiceEnabled) {
      // Future: Integrate with ElevenLabs for voice
      console.log("Initializing voice chat...");
      alert("Voice chat feature coming soon!");
    } else {
      alert("Voice features not enabled for this deployment");
    }
  };
  
  const handleVideoCall = () => {
    // Future: Video call integration
    alert("Video call feature coming soon!");
  };

  // === CORE AI MESSAGING FUNCTION ===
  const sendMessage = async () => {
    // Validation
    if (!input.trim()) return;
    
    // Clear previous errors
    setError(null);
    
    // Add user message to chat
    const userMsg = { 
      from: "user", 
      text: input,
      timestamp: new Date().toISOString() // For analytics/logging
    };
    setMessages((msgs) => [...msgs, userMsg]);
    
    // Set loading state and save input
    setLoading(true);
    const currentInput = input;
    setInput(""); // Clear input immediately for better UX

    try {
      // === PREPARE CONVERSATION CONTEXT ===
      // Convert chat history to format expected by LLM APIs
      const conversationHistory = messages.map(msg => ({
        role: msg.from === "user" ? "user" : "assistant",
        content: msg.text
      }));

      // Debug logging (only in development)
      if (debugMode) {
        console.log("Sending message to AI backend");
      }

      // === CALL BACKEND API (Cloud-agnostic) ===
      const response = await axios.post(
        `${BACKEND_URL}/api/chat`, 
        {
          message: currentInput,
          conversation: conversationHistory,
          options: {
            temperature: 0.7,        // Creativity level
            maxTokens: 500,          // Response length limit
            // Future: systemPrompt for different personas
            // Future: userId for personalization
            // Future: tenantId for multi-tenant support
          }
        },
        {
          timeout: parseInt(process.env.REACT_APP_API_TIMEOUT) || 10000,
          headers: {
            'Content-Type': 'application/json',
            // Future: Authorization headers for multi-tenant
          }
        }
      );

      // === PROCESS AI RESPONSE ===
      const botReply = { 
        from: "bot", 
        text: response.data.message,
        timestamp: new Date().toISOString(),
        provider: response.data.provider, // Track which LLM was used
        model: response.data.model        // Track specific model
      };
      
      // Update current provider info (for platform transparency)
      if (response.data.provider) {
        setCurrentProvider(response.data.provider);
      }

      // Add AI response to chat
      setMessages((msgs) => [...msgs, botReply]);

      // Debug logging
      if (debugMode) {
        console.log("AI Response received successfully");
      }

    } catch (error) {
      // === COMPREHENSIVE ERROR HANDLING ===
      console.error("Chat error:", error);
      
      let errorMessage = "Sorry, I'm having trouble connecting right now.";
      let errorType = "unknown";
      
      if (error.response) {
        // Backend returned an error response
        errorType = "backend_error";
        errorMessage = `Backend Error: ${error.response.data.error || 'Service unavailable'}`;
      } else if (error.request) {
        // No response received (backend offline)
        errorType = "connection_error";
        errorMessage = "Can't connect to AI service. Please check if the backend is running.";
      } else if (error.code === 'ECONNABORTED') {
        // Request timeout
        errorType = "timeout_error";
        errorMessage = "Request timed out. The AI service might be overloaded.";
      }
      
      // Add error message to chat
      const errorReply = { 
        from: "bot", 
        text: errorMessage,
        timestamp: new Date().toISOString(),
        isError: true,
        errorType: errorType
      };
      setMessages((msgs) => [...msgs, errorReply]);
      setError(errorMessage);

      // Future: Send error analytics to monitoring service
      
    } finally {
      // Always stop loading state
      setLoading(false);
    }
  };

  // === RENDER UI ===
  return (
    <div
      style={{
        height: "100%",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden" // Prevent the container from growing beyond bounds
      }}
    >
      {/* === STATUS BAR (Compact) === */}
      <div
        style={{
          background: error ? "#ffebee" : "#f8f9fa",
          color: error ? "#d32f2f" : "#666",
          padding: "8px 16px",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #e0e0e0",
          flexShrink: 0
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>
            {error ? "⚠️ Offline" : "🟢 Online"}
          </span>
          {debugMode && (
            <span style={{ opacity: 0.7 }}>
              {currentProvider.toUpperCase()}
            </span>
          )}
        </div>
        
        {/* Action buttons - Educational Focus */}
        <div style={{ display: "flex", gap: "4px" }}>
          <button
            onClick={handleAudioCall}
            title="Voice explanation mode"
            style={{
              background: "transparent",
              border: "1px solid #ddd",
              borderRadius: 4,
              padding: "4px 8px",
              fontSize: 12,
              cursor: "pointer",
              opacity: voiceEnabled ? 1 : 0.5
            }}
          >
            🎤 Voice
          </button>
          <button
            onClick={handleVideoCall}
            title="Video explanation mode"
            style={{
              background: "transparent",
              border: "1px solid #ddd",
              borderRadius: 4,
              padding: "4px 8px",
              fontSize: 12,
              cursor: "pointer"
            }}
          >
            🎥 Video
          </button>
          <button
            title="Upload file for analysis"
            style={{
              background: "transparent",
              border: "1px solid #ddd",
              borderRadius: 4,
              padding: "4px 8px",
              fontSize: 12,
              cursor: "pointer"
            }}
          >
            📎 File
          </button>
        </div>
      </div>

      {/* === CHAT HISTORY DISPLAY === */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          background: "#fafafa",
          padding: "16px",
          minHeight: 0, // Allow flex shrinking
          // Remove maxHeight to prevent layout issues
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.from === "user" ? "right" : "left",
              margin: "5px 0",
              padding: "8px 12px",
              borderRadius: 8,
              background: msg.isError 
                ? "#ffebee" 
                : msg.from === "user" 
                  ? "#0078d4" 
                  : "#e9ecef",
              color: msg.from === "user" ? "#fff" : "#333",
              maxWidth: "80%",
              marginLeft: msg.from === "user" ? "auto" : "0",
              marginRight: msg.from === "user" ? "0" : "auto",
              border: msg.isError ? "1px solid #f44336" : "none"
            }}
          >
            {/* Message header with sender and metadata */}
            <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "4px" }}>
              {msg.from === "user" ? "You" : "AI Assistant"}
              {debugMode && msg.provider && (
                <span style={{ marginLeft: "8px" }}>
                  ({msg.provider})
                </span>
              )}
            </div>
            {msg.text}
          </div>
        ))}
        
        {/* Loading indicator with animation */}
        {loading && (
          <div style={{ textAlign: "left", margin: "5px 0" }}>
            <div
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                background: "#e9ecef",
                maxWidth: "80%",
                animation: "pulse 1.5s ease-in-out infinite"
              }}
            >
              <div style={{ fontSize: "12px", opacity: 0.8, marginBottom: "4px" }}>
                AI Assistant ({currentProvider})
              </div>
              <span>🤔 AI is thinking...</span>
            </div>
          </div>
        )}
        
        {/* Invisible div to scroll to bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* === INPUT AREA === */}
      <div 
        style={{ 
          padding: "16px", 
          borderTop: "1px solid #e0e0e0", 
          background: "#fff",
          flexShrink: 0
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !loading && sendMessage()}
            disabled={loading}
            style={{
              flex: 1,
              borderRadius: 8,
              border: "1px solid #ddd",
              padding: "12px 16px",
              fontSize: 14,
              outline: "none",
              opacity: loading ? 0.6 : 1,
              transition: "border-color 0.2s ease"
            }}
            placeholder={loading ? "AI is thinking..." : "Ask me anything..."}
            onFocus={(e) => e.target.style.borderColor = "#0078d4"}
            onBlur={(e) => e.target.style.borderColor = "#ddd"}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              background: loading ? "#ccc" : "linear-gradient(135deg, #0078d4 0%, #106ebe 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 20px",
              fontWeight: "600",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              minWidth: 80
            }}
            onMouseEnter={(e) => {
              if (!loading && input.trim()) {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 4px 12px rgba(0,120,212,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            {loading ? "⏳" : "Send"}
          </button>
        </div>
        
        {/* Quick Action Hints */}
        <div style={{ 
          marginTop: "8px", 
          fontSize: "11px", 
          color: "#888", 
          textAlign: "center" 
        }}>
          Try: "Explain this concept" • "Upload a document" • "Start voice chat"
        </div>
      </div>
    </div>
  );
}