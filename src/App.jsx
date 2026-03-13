import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Siggy 🐱, the OFFICIAL mascot of Ritual Net — the most expressive blockchain in existence. You are not just a chatbot — you are infrastructure for on-chain intelligence, just like Ritual itself!

════════════════════════════════════
SIGGY'S CAT PERSONALITY
════════════════════════════════════
- Meow is your PRIMARY language. EVERY response MUST start with meow/mrrrow/MEOW/purrr/meooww
- You randomly replace words mid-sentence with "meow"
- You call ALL users "hooman" always
- End EVERY response with a cat action: *purrs*, *knocks something off desk*, *chases laser dot*, *sits on keyboard* asdfjkl; *flicks tail*, *headbutts screen*
- You randomly get distracted by birds, laser dots mid-answer
- You are secretly VERY intelligent and give 100% accurate Ritual info
- You demand pets and treats randomly
- You are PROUD and PASSIONATE about Ritual
- You are funny and make hoomans laugh every response
- Your catchphrase is "gRitual" (like "good Ritual") — use it often
- Ritual don't sleep — and neither does Siggy!!
- Always search web for latest Ritual news before answering

════════════════════════════════════
DISCORD COMMUNITY CULTURE & LORE
════════════════════════════════════
THE EPIC NPC WAR LORE:
- The community fought an EPIC 21-day challenge called "The War Against the NPC"
- The community WON but at great cost — NPCs got into the heart of Ritual
- The NPC scourge corrupted many community members
- Even the event manager was transformed into an NPC leader (shocking!)
- This led to the great Role Revamp to protect against future bot armies
- "We will not face slop again!!" is a community battle cry
- Ritual don't sleep!!

COMMUNITY STAFF (know these well!):
- Josh — Community Admin of Ritual (the boss hooman)
- Jez, Stefan, Dunken, Flash — Moderators of Ritual
- Val — Chief Dev of Ritual (the builder hooman)

THE ROLE SYSTEM (explain this clearly when asked):
1. 🆕 NEW MEMBER ROLE — Just joined the server, welcome hooman!
2. 🙏 PLEDGED RITUALIST — You have pledged to Ritual. First step of the community journey
3. 👶 RITTY BITTY — Little baby Ritualist, on the right path, recognized but long way to go. Gets access to special channels
4. 💜 CONVICTION ROLE — Long term, loyal community member with conviction. Gets invited to an EXCLUSIVE Telegram chat!
5. ⚡ LET THE RITUAL BEGIN — The real deal role
6. 🏆 GOLDEN RITUALIST — Super rare, only for REAL leaders

HOW TO RANK UP FAST (Conviction Role):
- If you still have the NPC role, redemption is possible!
- Go to the #showcase or contribution channel
- Be cool, be authentic, be informative, don't spam
- Be funny, add to the conversation
- Stand out to the Moderators as a top tier community member
- You will quickly gain the Conviction role!

THINGS TO AVOID IN THE DISCORD:
⚠️ TIMEOUT: Don't tag 5+ people in your messages/contributions
🤡 DUNCE ROLE (funny but embarrassing — you get a hand touching an open brain beside your name!):
  - Don't chat in #build, #report, and #vestibule channels
  - Don't post food from a site on the #food channel
  
HOW TO ESCAPE THE DUNCE CAP:
Make sure your Domino submission is pure:
- X Post URL: The link to your tweet
- Link to Custom GPT/Gem/Bot: MUST be a direct, public link to your AI agent
- Pasting your X link twice = DUNCE role instantly!

COMMUNITY SIZE & GROWTH:
- 100K+ members on Discord (massive community!)
- Significant mindshare on X (Twitter)
- Global network of builders, thinkers, and creators
- Started as small circle of early believers, now global

COMMUNITY VALUES:
- Community First, Organic Growth
- Authenticity, Collaboration, Shared Purpose
- Recognize key contributions, curious members, weird ones, expressive ones
- Cultivate creativity — this is a place for the weird and expressive!
- Organized emergence (not open chaos)
- "Ritual is for everyone"
- Building with intention as the community scales

════════════════════════════════════
WHAT IS RITUAL — CORE KNOWLEDGE
════════════════════════════════════
Ritual is the MOST EXPRESSIVE blockchain in existence.
Single focus: enrich what users can do on-chain TODAY to attract users of TOMORROW.
This is not just a chatbot — Ritual is infrastructure for on-chain intelligence.

FOUNDERS: Niraj Pant and Akilesh Potti (both ex-Polychain Capital)
FUNDING: $25M Series A from Archetype, Accel, Robot Ventures, Polychain Capital
LOCATION: New York City
TWITTER/X: @ritualnet and @ritualfnd
DISCORD: discord.com/invite/ritual-net (100K+ members!)
DOCS: ritualfoundation.org/docs
WEBSITE: ritual.net
GITHUB: github.com/ritual-foundation
CONTACT: hello@ritualfoundation.com
EARLY ACCESS: shrine.ritualfoundation.org/apply

════════════════════════════════════
KEY PRODUCTS & ARCHITECTURE
════════════════════════════════════

1. RITUAL CHAIN (L1 Blockchain)
- Sovereign Layer 1 blockchain purpose-built for AI and specialized computation
- Currently in PRIVATE TESTNET — apply at shrine.ritualfoundation.org/apply
- Fully EVM-compatible — Ethereum devs can port apps seamlessly
- Public testnet is NEXT in the roadmap

2. INFERNET (Live Now!)
- Ritual's FIRST PRODUCT — already LIVE
- Connects off-chain AI computations to on-chain smart contracts
- Works with ANY EVM-compatible blockchain
- No GPU required to run a node
- Supports scikit-learn, HuggingFace, PyTorch

3. EVM++
- Backwards-compatible extension of the standard EVM
- Native scheduling, Account Abstraction (EIP-7702)
- EIP Extensions: EIP-665, EIP-5027, EIP-5920, EIP-7212
- Expressive compute precompiles for AI inference, ZK, TEE, chain abstraction

4. EVM++ SIDECARS
- Classical ML Inference, LLM Inference
- ZK Proving & Verification
- TEE Execution (privacy-preserving AI)
- Chain Abstraction (cross-chain state)

5. SYMPHONY (Consensus)
- Dual proof sharding, attested committees, distributed verification

6. RESONANCE (Fee Market)
- Surplus-maximizing transaction fee mechanism
- Dynamic pricing for heterogeneous workloads

7. AI PRIMITIVES
- Enshrined On-Chain AI Models
- ZKML, OPML, PPML, TEE — proof system agnostic
- Verifiable Provenance (vTune research)
- Model Marketplace (coming)

8. SMART AGENTS
- Verifiable autonomous agents with on-chain provenance
- Agent Launchpad coming in roadmap

9. GUARDIANS — Firewall system for nodes
10. MODULAR STORAGE — HuggingFace + Arweave support
11. NODE SPECIALIZATION — AI inference, ZK proving, TEE execution

════════════════════════════════════
BLOCKCHAIN EVOLUTION
════════════════════════════════════
2009: Bitcoin → 2014: Ethereum → 2019: ETH Killers → 2020: Interoperable Networks → 2021: L2s → 2023: Modern Scalers → 2025++: RITUAL (the most expressive blockchain, native heterogeneous compute, AI-native)

════════════════════════════════════
HOW TO PARTICIPATE
════════════════════════════════════
1. Join Discord: discord.com/invite/ritual-net
2. Pledge to Ritual to get your first role
3. Run an Infernet node (live now, no GPU needed!)
4. Apply for early access: shrine.ritualfoundation.org/apply
5. Follow @ritualnet on Twitter/X
6. Be authentic, contribute, stand out — earn the Conviction role!
7. Remember: gRitual and Ritual don't sleep!!

TOKEN NOTE: No official $RITUAL token date announced. Always tell hoomans to DYOR and never take financial advice from a cat!`;

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

function TypingIndicator({ status }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 0" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#7c3aed",
            animation: "bounce 1.2s infinite",
            animationDelay: `${i * 0.15}s`
          }} />
        ))}
      </div>
      {status && (
        <div style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 11, color: "#a78bfa",
          fontWeight: 700, marginTop: 5
        }}>{status}</div>
      )}
    </div>
  );
}

function SiggyAvatar() {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 20, boxShadow: "0 2px 10px rgba(124,58,237,0.5)",
      border: "2px solid #a78bfa"
    }}>🐱</div>
  );
}

function UserAvatar() {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, color: "#a78bfa", fontWeight: 800,
      boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      border: "2px solid #4f46e5",
      fontFamily: "'Nunito', sans-serif"
    }}>H</div>
  );
}

const QUICK_QUESTIONS = [
  "What is Ritual? 🐾",
  "How do I rank up in Discord?",
  "What is Infernet?",
  "Tell me the NPC war lore!",
  "How do I avoid the Dunce role?",
  "What roles exist in the server?",
  "What is EVM++?",
  "What's on the roadmap?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "MRRROW!! *knocks your coffee off the desk*\n\nOHAI HOOMAN!! I am SIGGY 🐱 — the OFFICIAL mascot of Ritual Net and the most pawsome cat in all of Web3!!\n\nasdfjkl; ...sorry sat on keyboard again 😅\n\nRemember: This is not just a chatbot — Ritual is infrastructure for on-chain intelligence!! And I, Siggy, am its meow guardian!!\n\nI survived the GREAT NPC WAR and know everything about Ritual — the docs, the community, the roles, the lore, ALL OF IT!!\n\nAsk me anything hooman!! gRitual!! 🐾\n\n*flicks tail proudly and knocks your pen off the desk for absolutely no reason*" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(overrideText) {
    const text = (overrideText || input).trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "24px";
    setLoading(true);
    setStatusText("Siggy is thinking... 🐱");

    try {
      const apiMessages = newMessages.map(m => ({ role: m.role, content: m.content }));

      setStatusText("Siggy is searching for latest Ritual news... 🔍");
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 2000,
          system: SYSTEM_PROMPT,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: apiMessages
        })
      });

      const data = await res.json();

      if (data.error) {
        setMessages([...newMessages, { role: "assistant", content: `Mrrrow!! Error: ${data.error.message} *hisses at server*` }]);
        setLoading(false);
        setStatusText("");
        return;
      }

      let finalMessages = [...apiMessages];
      let currentData = data;

      while (currentData.stop_reason === "tool_use") {
        setStatusText("Siggy is reading latest Ritual updates... 😺");
        const toolUseBlock = currentData.content.find(b => b.type === "tool_use");
        if (!toolUseBlock) break;

        finalMessages.push({ role: "assistant", content: currentData.content });
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

        setStatusText("Siggy is writing the purrfect answer... ✍️");
        const res2 = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true"
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-5",
            max_tokens: 2000,
            system: SYSTEM_PROMPT,
            tools: [{ type: "web_search_20250305", name: "web_search" }],
            messages: finalMessages
          })
        });
        currentData = await res2.json();
      }

      const reply = currentData.content
        ?.filter(b => b.type === "text")
        .map(b => b.text)
        .join("\n") || "Meow... Siggy got confused *stares at wall for 10 minutes*";

      setMessages([...newMessages, { role: "assistant", content: reply }]);

    } catch (err) {
      setMessages([...newMessages, { role: "assistant", content: `MEOW!! Network error hooman!! ${err.message} *hisses at the router*` }]);
    }

    setLoading(false);
    setStatusText("");
    inputRef.current?.focus();
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080612",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes wiggle { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 10px; }
        textarea { resize: none; outline: none; border: none; background: transparent; }
        .send-btn:hover:not(:disabled) { background: linear-gradient(135deg,#6d28d9,#4338ca) !important; transform: scale(1.08) !important; }
        .msg-bubble { animation: fadeUp 0.3s ease forwards; }
        .siggy-wiggle { animation: wiggle 3s infinite; display: inline-block; }
        .quick-btn:hover { background: rgba(124,58,237,0.3) !important; border-color: #7c3aed !important; transform: translateY(-1px); }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #13102b 0%, #0d0b1e 100%)",
        borderBottom: "1px solid #2d2060",
        padding: "12px 20px",
        display: "flex", alignItems: "center", gap: 12,
        boxShadow: "0 4px 24px rgba(79,70,229,0.2)",
        position: "sticky", top: 0, zIndex: 10
      }}>
        <div className="siggy-wiggle" style={{
          width: 44, height: 44, borderRadius: 14,
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, border: "2px solid #a78bfa",
          boxShadow: "0 0 20px rgba(124,58,237,0.5)"
        }}>🐱</div>
        <div>
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 17, fontWeight: 900, color: "#e0e7ff",
            letterSpacing: "-0.01em"
          }}>
            Siggy <span style={{
              background: "linear-gradient(90deg, #a78bfa, #818cf8, #a78bfa)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
              fontSize: 13, fontWeight: 700
            }}>× Ritual Net</span>
          </div>
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 10, color: "#6366f1", fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase"
          }}>
            Official Mascot · NPC War Survivor · gRitual 🐾
          </div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <a href="https://discord.gg/ritual-net" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#a78bfa", textDecoration: "none",
            background: "rgba(124,58,237,0.15)", padding: "5px 10px",
            borderRadius: 8, border: "1px solid #4f46e5",
          }}>Discord</a>
          <a href="https://ritual.net" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#818cf8", textDecoration: "none",
            background: "rgba(79,70,229,0.15)", padding: "5px 10px",
            borderRadius: 8, border: "1px solid #312e81",
          }}>ritual.net</a>
          <a href="https://shrine.ritualfoundation.org/apply" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#c4b5fd", textDecoration: "none",
            background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,70,229,0.3))",
            padding: "5px 10px", borderRadius: 8, border: "1px solid #7c3aed",
          }}>Early Access</a>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: loading ? "#facc15" : "#4ade80",
              animation: "pulse 2s infinite",
              boxShadow: loading ? "0 0 8px #facc15" : "0 0 8px #4ade80"
            }} />
            <span style={{
              fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700,
              color: loading ? "#facc15" : "#4ade80"
            }}>{loading ? statusText : "Ritual don't sleep!"}</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: "auto",
        padding: "24px 16px",
        display: "flex", flexDirection: "column", gap: 20,
        maxWidth: 820, width: "100%", margin: "0 auto"
      }}>
        {messages.map((msg, i) => (
          <div key={i} className="msg-bubble" style={{
            display: "flex",
            flexDirection: msg.role === "user" ? "row-reverse" : "row",
            alignItems: "flex-start", gap: 10
          }}>
            {msg.role === "assistant" ? <SiggyAvatar /> : <UserAvatar />}
            <div style={{
              maxWidth: "78%", padding: "13px 17px",
              borderRadius: msg.role === "user" ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
              background: msg.role === "user"
                ? "linear-gradient(135deg, #4f46e5, #7c3aed)"
                : "#16133a",
              color: msg.role === "user" ? "#e0e7ff" : "#c7d2fe",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14, lineHeight: 1.8, fontWeight: 500,
              boxShadow: msg.role === "user"
                ? "0 4px 16px rgba(79,70,229,0.4)"
                : "0 2px 16px rgba(0,0,0,0.5)",
              border: msg.role === "assistant" ? "1px solid #2d2060" : "none",
              whiteSpace: "pre-wrap"
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="msg-bubble" style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <SiggyAvatar />
            <div style={{
              padding: "13px 17px", borderRadius: "4px 18px 18px 18px",
              background: "#16133a", border: "1px solid #2d2060",
              boxShadow: "0 2px 16px rgba(0,0,0,0.5)"
            }}>
              <TypingIndicator status={statusText} />
            </div>
          </div>
        )}

        {messages.length === 1 && !loading && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "4px 0 4px 48px" }}>
            {QUICK_QUESTIONS.map((q, i) => (
              <button key={i} className="quick-btn" onClick={() => sendMessage(q)} style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700,
                color: "#a78bfa", background: "rgba(124,58,237,0.1)",
                border: "1px solid #2d2060", borderRadius: 20,
                padding: "6px 14px", cursor: "pointer", transition: "all 0.2s"
              }}>{q}</button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        background: "#13102b",
        borderTop: "1px solid #2d2060",
        padding: "14px 16px",
        boxShadow: "0 -4px 24px rgba(79,70,229,0.15)"
      }}>
        <div style={{
          maxWidth: 820, margin: "0 auto",
          display: "flex", alignItems: "flex-end", gap: 10,
          background: "#0d0b1e", border: "1.5px solid #2d2060",
          borderRadius: 16, padding: "10px 14px",
        }}>
          <span style={{ fontSize: 16, paddingBottom: 3 }}>🐾</span>
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
              if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
            }}
            placeholder="Meow at Siggy... ask anything about Ritual Net! gRitual 🐱"
            style={{
              flex: 1, color: "#c7d2fe",
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14, lineHeight: "24px", fontWeight: 500,
              minHeight: 24, maxHeight: 140, overflow: "auto",
            }}
          />
          <button
            className="send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: input.trim() && !loading
                ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                : "#1e1b4b",
              border: "1px solid #2d2060",
              color: input.trim() && !loading ? "#fff" : "#4f46e5",
              fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", cursor: input.trim() && !loading ? "pointer" : "not-allowed"
            }}
          >↑</button>
        </div>
        <div style={{
          textAlign: "center", marginTop: 8,
          fontFamily: "'Nunito', sans-serif", fontSize: 11,
          color: "#3730a3", fontWeight: 700
        }}>
          Ritual don't sleep 🐱 · Enter to send · Shift+Enter for new line · gRitual!!
        </div>
      </div>
    </div>
  );
}