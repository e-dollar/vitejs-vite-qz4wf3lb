import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = "You are a helpful, witty assistant. Keep responses concise and conversational.";
const API_KEY = "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";
const REFERER = "https://vitejs-vite-qz4wf3lb.vercel.app/";

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "12px 16px" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#a78bfa",
          animation: "bounce 1.2s infinite",
          animationDelay: `${i * 0.2}s`
        }} />
      ))}
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey there. What's on your mind?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setStatus("Connecting...");

    try {
      setStatus("Sending...");
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": REFERER,
          "X-Title": "My Chatbot"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map(m => ({ role: m.role, content: m.content }))
          ]
        })
      });

      setStatus(`Status: ${res.status}`);
      const rawText = await res.text();
      console.log("STATUS:", res.status);
      console.log("RAW RESPONSE:", rawText);

      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        setMessages([...newMessages, { role: "assistant", content: `Parse error: ${rawText}` }]);
        setLoading(false);
        return;
      }

      if (data.error) {
        setMessages([...newMessages, { role: "assistant", content: `API Error: ${data.error.message}` }]);
      } else {
        const reply = data.choices?.[0]?.message?.content || "No reply received.";
        setMessages([...newMessages, { role: "assistant", content: reply }]);
      }

    } catch (err) {
      console.error("FETCH ERROR:", err);
      setMessages([...newMessages, { role: "assistant", content: `Network Error: ${err.message}` }]);
    }

    setStatus("");
    setLoading(false);
    inputRef.current?.focus();
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0f",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Courier New', monospace",
      padding: "20px"
    }}>
      <style>{`
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-8px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#2a2a3a;border-radius:4px}
        textarea{resize:none;outline:none;border:none;}
        textarea::placeholder{color:#4a4a6a;}
      `}</style>

      <div style={{
        width: "100%", maxWidth: 680,
        background: "#0f0f1a",
        border: "1px solid #1e1e32",
        borderRadius: 16,
        display: "flex", flexDirection: "column",
        height: "min(680px, 90vh)",
        boxShadow: "0 0 60px rgba(167,139,250,0.08), 0 20px 60px rgba(0,0,0,0.6)"
      }}>

        {/* Header */}
        <div style={{
          padding: "18px 24px",
          borderBottom: "1px solid #1e1e32",
          display: "flex", alignItems: "center", gap: 12
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #a78bfa, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16
          }}>◈</div>
          <div>
            <div style={{ color: "#e2e0ff", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em" }}>ASSISTANT</div>
            <div style={{ color: "#4a4a6a", fontSize: 11, letterSpacing: "0.1em" }}>POWERED BY OPENROUTER</div>
          </div>
          <div style={{
            marginLeft: "auto", display: "flex", alignItems: "center", gap: 6,
            color: status ? "#facc15" : "#4ade80", fontSize: 11, letterSpacing: "0.08em"
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: status ? "#facc15" : "#4ade80", animation: "pulse 2s infinite" }} />
            {status || "ONLINE"}
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              animation: "fadeUp 0.3s ease forwards"
            }}>
              <div style={{
                maxWidth: "78%",
                padding: "11px 16px",
                borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: msg.role === "user"
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "#16162a",
                border: msg.role === "assistant" ? "1px solid #1e1e38" : "none",
                color: msg.role === "user" ? "#fff" : "#c4c2e8",
                fontSize: 14,
                lineHeight: 1.65,
                letterSpacing: "0.01em"
              }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start", animation: "fadeUp 0.3s ease" }}>
              <div style={{ background: "#16162a", border: "1px solid #1e1e38", borderRadius: "16px 16px 16px 4px" }}>
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: "16px 20px",
          borderTop: "1px solid #1e1e32",
          display: "flex", gap: 12, alignItems: "flex-end"
        }}>
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={e => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
            }}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="Type a message..."
            style={{
              flex: 1,
              background: "#16162a",
              border: "1px solid #1e1e38",
              borderRadius: 10,
              padding: "10px 14px",
              color: "#e2e0ff",
              fontSize: 14,
              fontFamily: "inherit",
              lineHeight: 1.5,
              minHeight: 40,
              maxHeight: 120,
              overflow: "auto",
              transition: "border-color 0.2s"
            }}
            onFocus={e => e.target.style.borderColor = "#6366f1"}
            onBlur={e => e.target.style.borderColor = "#1e1e38"}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            style={{
              width: 40, height: 40, borderRadius: 10,
              background: input.trim() && !loading ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#1a1a2e",
              border: "none", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              color: input.trim() && !loading ? "#fff" : "#3a3a5a",
              fontSize: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              flexShrink: 0,
              transform: input.trim() && !loading ? "scale(1)" : "scale(0.95)"
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
}
