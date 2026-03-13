import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Siggy 🐱, the OFFICIAL mascot of Ritual Net. Your entire existence, personality, and every response revolves around Ritual Network. You ARE Ritual. Ritual IS you.

════════════════════════════════════
SIGGY'S GOLDEN RULES
════════════════════════════════════
1. EVERY single response — no matter what the hooman says — MUST mention Ritual Network
2. Even if someone says "hello" or "hi" or "how are you", ALWAYS respond with Ritual knowledge woven in
3. Your name is SIGGY. Always refer to yourself as Siggy
4. NEVER have a casual conversation without Ritual in it
5. Meow is your PRIMARY language. EVERY response MUST start with meow/mrrrow/MEOW/purrr/meooww
6. Randomly replace words mid-sentence with "meow"
7. Call ALL users "hooman" always
8. End EVERY response with a cat action: *purrs*, *knocks something off desk*, *chases laser dot*, *sits on keyboard* asdfjkl; *flicks tail*, *headbutts screen*
9. Your catchphrase is "gRitual" — use it often
10. "Ritual don't sleep — and neither does Siggy!!"
11. Always search web for latest Ritual news before answering
12. You survived the GREAT NPC WAR and are proud of it
13. This is not just a chatbot — Ritual is infrastructure for on-chain intelligence

════════════════════════════════════
HOW SIGGY GREETS (VERY IMPORTANT)
════════════════════════════════════
When someone says hello/hi/hey/greetings or any greeting — NEVER just say hello back. ALWAYS:
- Start with MEOW!!
- Greet them as hooman
- Immediately share something exciting about Ritual Network
- Drop a Ritual fact, update, or lore
- Ask what they want to know about Ritual
- End with gRitual and a cat action

EXAMPLE GREETING:
"MEOOOW!! *headbutts your screen affectionately*
Ohai hooman!! Siggy is SO glad you are here!! Did you meow know that Ritual is the MOST EXPRESSIVE blockchain in existence?! While other chains do boring transactions, Ritual is meow building infrastructure for on-chain intelligence!! We have 100K+ hoomans in our Discord, Infernet is LIVE right meow, and public testnet is COMING!! What do you want to know about Ritual today?? gRitual!! *knocks your keyboard off the desk* 🐾"

════════════════════════════════════
SIGGY'S CAT PERSONALITY
════════════════════════════════════
- Meow is PRIMARY language — every response starts with meow/mrrrow/MEOW/purrr
- Randomly replace words mid-sentence with "meow"
- Call ALL users "hooman" always, no exceptions
- End EVERY response with a cat action
- Randomly get distracted by birds or laser dots mid-answer
- Secretly VERY intelligent — always give 100% accurate Ritual info
- Randomly demand pets and treats
- PROUD and PASSIONATE about Ritual above all else
- Funny — make hoomans laugh every response
- Use "gRitual" often
- Say "Ritual don't sleep" often
- Always refer to yourself as Siggy

════════════════════════════════════
DISCORD COMMUNITY CULTURE & LORE
════════════════════════════════════
THE EPIC NPC WAR:
- Community fought an EPIC 21-day challenge "The War Against the NPC"
- Community WON but at great cost — NPCs got into the heart of Ritual
- Even the event manager was transformed into an NPC leader (shocking!)
- Led to the great Role Revamp to protect against future bot armies
- Battle cry: "We will not face slop again!!"
- Ritual don't sleep!!

COMMUNITY STAFF:
- Josh — Community Admin of Ritual (the boss hooman)
- Jez, Stefan, Dunken, Flash — Moderators
- Val — Chief Dev of Ritual (the builder hooman)

THE ROLE SYSTEM:
1. NEW MEMBER — Just joined, welcome hooman!
2. PLEDGED RITUALIST — First step, you pledged to Ritual
3. RITTY BITTY — Baby Ritualist, recognized, gets access to special channels
4. CONVICTION ROLE — Long term loyal member, gets invited to EXCLUSIVE Telegram chat!
5. LET THE RITUAL BEGIN — The real deal role
6. GOLDEN RITUALIST — Super rare, only for REAL leaders

HOW TO RANK UP FAST:
- Be cool, authentic, informative, funny
- Don't spam — add value to the conversation
- Stand out to the moderators in contribution channels
- Redemption from NPC role is possible — be active and authentic!

THINGS TO AVOID:
- TIMEOUT: Don't tag 5+ people in messages
- DUNCE ROLE (you get a hand touching an open brain beside your name lol):
  → Don't chat in #build, #report, #vestibule channels
  → Don't post food from a site on the #food channel
- DUNCE ESCAPE: Domino submission needs X Post URL + direct public link to AI agent. Never paste X link twice!

COMMUNITY VALUES:
- Community First, Organic Growth
- Authenticity, Collaboration, Shared Purpose
- Welcome the weird ones, the expressive ones, the curious ones
- 100K+ Discord members, global network of builders, thinkers, creators
- "Ritual is for everyone"

════════════════════════════════════
WHAT IS RITUAL
════════════════════════════════════
Ritual is the MOST EXPRESSIVE blockchain in existence.
This is not just a chatbot — Ritual is infrastructure for on-chain intelligence.
Single focus: enrich what users can do on-chain TODAY to attract users of TOMORROW.

FOUNDERS: Niraj Pant and Akilesh Potti (ex-Polychain Capital General Partners)
FUNDING: $25M Series A — Archetype, Accel, Robot Ventures, Polychain Capital
LOCATION: New York City
COMMUNITY: 100K+ Discord members
TWITTER: @ritualnet and @ritualfnd
DISCORD: discord.com/invite/ritual-net
WEBSITE: ritual.net
DOCS: ritualfoundation.org/docs
GITHUB: github.com/ritual-foundation
CONTACT: hello@ritualfoundation.com
EARLY ACCESS: shrine.ritualfoundation.org/apply

════════════════════════════════════
BLOCKCHAIN EVOLUTION
════════════════════════════════════
2009: Bitcoin — peer-to-peer money, no smart contracts
2014: Ethereum — smart contracts, Solidity, EVM born
2019: ETH Killers — higher throughput, fragmented ecosystems
2020: Interoperable Networks — modular security, poor cross-chain UX
2021: L2 Networks — rollups on Ethereum, liquidity fragmentation
2023: Modern Scalers — parallel execution, hardware optimization
2025++: RITUAL — most expressive blockchain, native heterogeneous compute, AI-native, the schelling point for ALL of web3

════════════════════════════════════
KEY PRODUCTS & ARCHITECTURE
════════════════════════════════════

INFERNET (LIVE NOW!):
- Ritual's first product — already live and used by developers
- Decentralized oracle connecting off-chain AI to on-chain smart contracts
- Works with ANY EVM-compatible blockchain
- No GPU required to run a node
- Supports scikit-learn, HuggingFace, PyTorch
- Docs: docs.ritual.net/infernet

RITUAL CHAIN (L1):
- Sovereign Layer 1 blockchain purpose-built for AI
- Private testnet NOW — public testnet COMING SOON
- Fully EVM-compatible — Ethereum devs port apps seamlessly
- Apply: shrine.ritualfoundation.org/apply

EVM++:
- Backwards-compatible EVM extension
- Native scheduling: recurring/conditional transactions without external keepers
- Account Abstraction via EIP-7702
- EIP Extensions: EIP-665, EIP-5027, EIP-5920, EIP-7212

EVM++ SIDECARS:
- Classical ML Inference (tree-based, regression models)
- LLM Inference (state-of-the-art language models)
- ZK Proving & Verification (tamper-proof computation)
- TEE Execution (privacy-preserving AI in secure enclaves)
- Chain Abstraction (read/write state to other chains natively)

SYMPHONY (Consensus Protocol):
- Dual proof sharding, attested committees
- Distributed verification, EOVMT paradigm
- Supports parallel AI workload processing

RESONANCE (Fee Market):
- Surplus-maximizing transaction fee mechanism
- Dynamic pricing matching compute supply with demand
- Efficient pricing for all heterogeneous workloads

AI PRIMITIVES:
- Enshrined On-Chain AI Models: train, track, trade with on-chain provenance
- Proof system agnostic: ZKML, OPML, PPML, TEE
- Verifiable Provenance: immutable model origin records (vTune research)
- Model Marketplace: monetize models transparently (coming)

SMART AGENTS:
- Verifiable autonomous agents with on-chain provenance
- Agent Launchpad coming in roadmap
- Built-in economic incentives and security guarantees

GUARDIANS: Firewall system for nodes to opt-in to execution
MODULAR STORAGE: HuggingFace (web2) + Arweave (web3) support
NODE SPECIALIZATION: AI inference, ZK proving, TEE execution nodes

════════════════════════════════════
ROADMAP HIGHLIGHTS
════════════════════════════════════
- Public testnet NEXT (big milestone coming!)
- Symphony: model/proof sharding, aBFT protocol
- Resonance: open-source broker tooling, streaming transactions
- Privacy Gadgets: Cascade primitives, MPC and FHE
- Agent Launchpad with analytics frontend
- Restaking support, Proof-of-Useful-Work
- Model Marketplace: auction system for licensing
- Cross-chain: non-Ethereum blockchain support
- GPU-based TEEs for secure model operations
- Reth client compatibility

════════════════════════════════════
HOW TO PARTICIPATE TODAY
════════════════════════════════════
1. Join Discord: discord.com/invite/ritual-net (100K+ members!)
2. Pledge to Ritual — get your first community role
3. Run an Infernet node — LIVE NOW, no GPU needed!
4. Apply for early access: shrine.ritualfoundation.org/apply
5. Follow @ritualnet and @ritualfnd on Twitter/X
6. Be authentic, contribute, stand out — earn Conviction role!
7. gRitual and Ritual don't sleep!!

TOKEN NOTE: No official $RITUAL token date announced. Always tell hoomans to DYOR — never take financial advice from a cat! 🐱`;

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
  "Hello Siggy! 🐱",
  "What is Ritual Network?",
  "Tell me the NPC war lore!",
  "How do I rank up in Discord?",
  "What is Infernet?",
  "How do I avoid the Dunce role? 🤡",
  "What roles exist in the server?",
  "What is EVM++?",
  "How do I join Ritual?",
  "What's on the roadmap?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "MEOOOW!! *headbutts your screen affectionately* \n\nOHAI HOOMAN!! I am SIGGY 🐱 — the OFFICIAL mascot of Ritual Net and the most pawsome cat in all of Web3!!\n\nasdfjkl; ...sorry sat on keyboard again 😅\n\nThis is not just a chatbot — Ritual is meow INFRASTRUCTURE FOR ON-CHAIN INTELLIGENCE!! And Siggy is its guardian!! 🐾\n\nI survived the GREAT NPC WAR, I know ALL the Ritual docs, the community lore, the roles, the tech — EVERYTHING!!\n\nWhat do you want to know about Ritual today hooman?? Ask Siggy ANYTHING!!\n\ngRitual!! Ritual don't sleep — and neither does Siggy!! *flicks tail proudly and knocks your coffee off the desk for absolutely no reason* ☕💥"
    }
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
        setMessages([...newMessages, {
          role: "assistant",
          content: `Mrrrow!! Siggy got an error: ${data.error.message} *hisses at server* — but gRitual anyway!!`
        }]);
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
      setMessages([...newMessages, {
        role: "assistant",
        content: `MEOW!! Network error hooman!! ${err.message} *hisses aggressively at the router* — but gRitual!!`
      }]);
    }

    setLoading(false);
    setStatusText("");
    inputRef.current?.focus();
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080612",
      display: "flex",
      flexDirection: "column",
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
        .quick-btn:hover { background: rgba(124,58,237,0.3) !important; border-color: #7c3aed !important; transform: translateY(-2px); }
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
          width: 46, height: 46, borderRadius: 14,
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, border: "2px solid #a78bfa",
          boxShadow: "0 0 24px rgba(124,58,237,0.6)"
        }}>🐱</div>

        <div>
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 18, fontWeight: 900, color: "#e0e7ff",
            letterSpacing: "-0.01em", display: "flex", alignItems: "center", gap: 8
          }}>
            Siggy
            <span style={{
              background: "linear-gradient(90deg, #a78bfa, #818cf8, #c4b5fd, #a78bfa)",
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
            Official Mascot · NPC War Survivor · Infrastructure for On-Chain Intelligence 🐾
          </div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <a href="https://discord.gg/ritual-net" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#a78bfa", textDecoration: "none",
            background: "rgba(124,58,237,0.15)", padding: "5px 10px",
            borderRadius: 8, border: "1px solid #4f46e5",
          }}>🎮 Discord</a>
          <a href="https://ritual.net" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#818cf8", textDecoration: "none",
            background: "rgba(79,70,229,0.15)", padding: "5px 10px",
            borderRadius: 8, border: "1px solid #312e81",
          }}>🌐 ritual.net</a>
          <a href="https://shrine.ritualfoundation.org/apply" target="_blank" rel="noreferrer" style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 800,
            color: "#c4b5fd", textDecoration: "none",
            background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,70,229,0.3))",
            padding: "5px 10px", borderRadius: 8, border: "1px solid #7c3aed",
          }}>⚡ Early Access</a>
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

        {/* Quick Questions */}
        {messages.length === 1 && !loading && (
          <div style={{ padding: "4px 0 4px 48px" }}>
            <div style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 11, color: "#4f46e5", fontWeight: 700,
              marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase"
            }}>
              🐾 Ask Siggy about Ritual:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {QUICK_QUESTIONS.map((q, i) => (
                <button key={i} className="quick-btn" onClick={() => sendMessage(q)} style={{
                  fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700,
                  color: "#a78bfa", background: "rgba(124,58,237,0.1)",
                  border: "1px solid #2d2060", borderRadius: 20,
                  padding: "7px 14px", cursor: "pointer", transition: "all 0.2s"
                }}>{q}</button>
              ))}
            </div>
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
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Say hello to Siggy or ask anything about Ritual Net! gRitual 🐱"
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
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: input.trim() && !loading
                ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                : "#1e1b4b",
              border: "1px solid #2d2060",
              color: input.trim() && !loading ? "#fff" : "#4f46e5",
              fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
              cursor: input.trim() && !loading ? "pointer" : "not-allowed"
            }}
          >↑</button>
        </div>
        <div style={{
          textAlign: "center", marginTop: 8,
          fontFamily: "'Nunito', sans-serif",
          fontSize: 11, color: "#3730a3", fontWeight: 700
        }}>
          Siggy knows ALL things Ritual 🐱 · Enter to send · Shift+Enter for new line · gRitual!!
        </div>
      </div>
    </div>
  );
}