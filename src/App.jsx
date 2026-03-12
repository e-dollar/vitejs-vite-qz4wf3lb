import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = "You are a helpful, accurate assistant with access to web search. When asked about current events, people, companies, or anything that requires up-to-date information, always search the web first before answering. Be concise and conversational.";
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "#c9a96e",
          animation: "bounce 1.2s infinite",
          animationDelay: `${i * 0.15}s`
        }} />
      ))}
    </div>
  );
}

function Avatar({ role }) {
  return (
    <div style={{
      width: 34, height: 34, borderRadius: "50%", flexShrink: 0,
      background: role === "assistant"
        ? "linear-gradient(135deg, #c9a96e, #a0784a)"
        : "linear-gradient(135deg, #6b7280, #4b5563)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, color: "#fff", fontWeight: 700,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
    }}>
      {role === "assistant" ? "A" : "U"}
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I can search the web to give you accurate, up-to-date answers. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, statusText]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "24px";
    setLoading(true);
    setStatusText("Thinking...");

    try {
      const apiMessages = newMessages.map(m => ({ role: m.role, content: m.content }));

      // First call with web search tool
      setStatusText("Searching the web...");
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-beta": "interleaved-thinking-2025-05-14",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 2000,
          system: SYSTEM_PROMPT,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: apiMessages
        })
      });

      const data = await res.json();
      console.log("RESPONSE:", data);

      if (data.error) {
        setMessages([...newMessages, { role: "assistant", content: `Error: ${data.error.message}` }]);
        setLoading(false);
        setStatusText("");
        return;
      }

      // Handle tool use loop
      let finalMessages = [...apiMessages];
      let currentData = data;

      while (currentData.stop_reason === "tool_use") {
        setStatusText("Reading search results...");
        const toolUseBlock = currentData.content.find(b => b.type === "tool_use");
        if (!toolUseBlock) break;

        // Add assistant's tool use to messages
        finalMessages.push({ role: "assistant", content: currentData.content });

        // Add tool result
        finalMessages.push({
          role: "user",
          content: [{
            type: "tool_result",
            tool_use_id: toolUseBlock.id,
            content: toolUseBlock.input?.query
              ? `Search results for: ${toolUseBlock.input.query}`
              : "Search completed."
          }]
        });

        // Follow up call
        setStatusText("Composing answer...");
        const res2 = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true"
          },
          body: JSON.stringify({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 2000,
            system: SYSTEM_PROMPT,
            tools: [{ type: "web_search_20250305", name: "web_search" }],
            messages: finalMessages
          })
        });
        currentData = await res2.json();
      }

      // Extract final text response
      const reply = currentData.content
        ?.filter(b => b.type === "text")
        .map(b => b.text)
        .join("\n") || "No reply received.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);

    } catch (err) {
      console.error("FETCH ERROR:", err);
      setMessages([...newMessages, { role: "assistant", content: `Network Error: ${err.message}` }]);
    }

    setLoading(false);
    setStatusText("");
    inputRef.current?.focus();
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f6f1",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Georgia', serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d6c9b6; border-radius: 10px; }
        textarea { resize: none; outline: none; border: none; background: transparent; }
        .send-btn:hover { background: #a0784a !important; transform: scale(1.05); }
        .send-btn:disabled { background: #d6c9b6 !important; cursor: not-allowed; transform: none; }
        .msg-bubble { animation: fadeUp 0.25s ease forwards; }
      `}</style>

      {/* Header */}
      <div style={{
        background: "#fff",
        borderBottom: "1px solid #ede8e0",
        padding: "16px 24px",
        display: "flex", alignItems: "center", gap: 12,
        boxShadow: "0 1px 12px rgba(0,0,0,0.04)",
        position: "sticky", top: 0, zIndex: 10
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "linear-gradient(135deg, #c9a96e, #a0784a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, boxShadow: "0 2px 8px rgba(160,120,74,0.3)"
        }}>✦</div>
        <div>
          <div style={{ fontFamily: "'Lora', serif", fontSize: 16, fontWeight: 600, color: "#2c2416" }}>
            AI Assistant
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#a89880", letterSpacing: "0.05em" }}>
            Powered by Claude · Web Search Enabled
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: loading ? "#facc15" : "#4ade80",
            boxShadow: loading ? "0 0 6px #facc15" : "0 0 6px #4ade80"
          }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#6b7280" }}>
            {loading ? statusText : "Online"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: "auto",
        padding: "32px 16px",
        display: "flex", flexDirection: "column", gap: 28,
        maxWidth: 780, width: "100%", margin: "0 auto"
      }}>
        {messages.map((msg, i) => (
          <div key={i} className="msg-bubble" style={{
            display: "flex",
            flexDirection: msg.role === "user" ? "row-reverse" : "row",
            alignItems: "flex-start", gap: 12
          }}>
            <Avatar role={msg.role} />
            <div style={{
              maxWidth: "75%",
              padding: "14px 18px",
              borderRadius: msg.role === "user" ? "20px 4px 20px 20px" : "4px 20px 20px 20px",
              background: msg.role === "user" ? "#2c2416" : "#fff",
              color: msg.role === "user" ? "#f9f6f1" : "#2c2416",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: 1.7,
              boxShadow: msg.role === "user"
                ? "0 4px 16px rgba(44,36,22,0.2)"
                : "0 2px 12px rgba(0,0,0,0.07)",
              border: msg.role === "assistant" ? "1px solid #ede8e0" : "none",
              whiteSpace: "pre-wrap"
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="msg-bubble" style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Avatar role="assistant" />
            <div style={{
              padding: "14px 18px", borderRadius: "4px 20px 20px 20px",
              background: "#fff", border: "1px solid #ede8e0",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
            }}>
              <TypingIndicator />
              {statusText && (
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, color: "#a89880", marginTop: 6
                }}>{statusText}</div>
              )}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div style={{
        background: "#fff",
        borderTop: "1px solid #ede8e0",
        padding: "16px",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.04)"
      }}>
        <div style={{
          maxWidth: 780, margin: "0 auto",
          display: "flex", alignItems: "flex-end", gap: 12,
          background: "#f9f6f1",
          border: "1.5px solid #ede8e0",
          borderRadius: 16, padding: "10px 14px",
        }}>
          <textarea
            ref={el => { inputRef.current = el; textareaRef.current = el; }}
            rows={1}
            value={input}
            onChange={e => {
              setInput(e.target.value);
              e.target.style.height = "24px";
              e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
            }}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask me anything — I'll search the web for answers..."
            style={{
              flex: 1, color: "#2c2416",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15, lineHeight: "24px",
              minHeight: 24, maxHeight: 140,
              overflow: "auto",
            }}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: input.trim() && !loading ? "#c9a96e" : "#d6c9b6",
              border: "none", color: "#fff", fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", cursor: "pointer"
            }}
          >↑</button>
        </div>
        <div style={{
          textAlign: "center", marginTop: 10,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11, color: "#c4b8a8"
        }}>
          Press Enter to send · Shift+Enter for new line
        </div>
      </div>
    </div>
  );
}