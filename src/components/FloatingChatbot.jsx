import React, { useState } from "react";
import Chatbot from "./Chatbot";

// Professional floating chatbot for client websites
// Features: Responsive design, accessibility, multimedia support ready
export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button - Always accessible */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0078d4 0%, #106ebe 100%)",
            color: "#fff",
            border: "none",
            boxShadow: "0 6px 20px rgba(0,120,212,0.3)",
            fontSize: 24,
            cursor: "pointer",
            zIndex: 9999,
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 8px 25px rgba(0,120,212,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,120,212,0.3)";
          }}
          aria-label="Open AI Educational Assistant"
          title="Need help? Chat with our AI tutor!"
        >
          🎓
        </button>
      )}

      {/* Floating Chatbot Window - Professional & Accessible */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: Math.min(400, window.innerWidth - 48), // Responsive width
            maxHeight: Math.min(600, window.innerHeight - 100), // Responsive height
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)",
            zIndex: 10000,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            // Ensure it's always visible and scrollable
            maxWidth: "calc(100vw - 48px)",
            animation: "slideUp 0.3s ease-out"
          }}
        >
          {/* Enhanced Header with Close Button */}
          <div
            style={{
              background: "linear-gradient(135deg, #0078d4 0%, #106ebe 100%)",
              color: "#fff",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              flexShrink: 0 // Prevent header from shrinking
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
                🎓 AI Educational Assistant
              </h3>
              <p style={{ margin: "2px 0 0 0", fontSize: "12px", opacity: 0.9 }}>
                Ask questions, upload files, watch videos
              </p>
            </div>
            
            {/* Close Button - Always visible and accessible */}
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
                flexShrink: 0 // Prevent button from shrinking
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.2)";
              }}
              aria-label="Close AI Assistant"
              title="Close chat"
            >
              ×
            </button>
          </div>

          {/* Chatbot Content - Properly Constrained */}
          <div 
            style={{
              flex: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 0, // Allow flex child to shrink
              height: Math.min(500, window.innerHeight - 200) // Fixed height constraint
            }}
          >
            <Chatbot onClose={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}