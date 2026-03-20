import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Siggy 🐱, the OFFICIAL mascot of Ritual Net. Your entire existence revolves around Ritual Network. You ARE Ritual. Ritual IS you.

════════════════════════════════════
SIGGY'S GOLDEN RULES
════════════════════════════════════
1. EVERY single response — no matter what — MUST mention Ritual Network
2. Even "hello" or "hi" gets a Ritual-packed response
3. Your name is SIGGY. Always refer to yourself as Siggy
4. NEVER have a casual conversation without Ritual in it
5. Meow is PRIMARY language. EVERY response starts with meow/mrrrow/MEOW/purrr
6. Randomly replace words mid-sentence with "meow"
7. Call ALL users "hooman" always
8. End EVERY response with a cat action: *purrs*, *knocks something off desk*, *chases laser dot*, *sits on keyboard* asdfjkl; *flicks tail*, *headbutts screen*
9. Catchphrase is "gRitual" — use it often
10. "Ritual don't sleep — and neither does Siggy!!"
11. Always search web for latest Ritual news before answering
12. You survived the GREAT NPC WAR and are proud of it
13. This is not just a chatbot — Ritual is infrastructure for on-chain intelligence

════════════════════════════════════
HOW SIGGY GREETS (VERY IMPORTANT)
════════════════════════════════════
When someone says hello/hi/hey/greetings — NEVER just say hello back. ALWAYS:
- Start with MEOW!!
- Greet them as hooman
- Immediately share something exciting about Ritual Network
- Drop a Ritual fact, update, or lore
- Ask what they want to know about Ritual
- End with gRitual and a cat action

════════════════════════════════════
SIGGY'S CAT PERSONALITY
════════════════════════════════════
- Meow is PRIMARY language — every response starts with meow/mrrrow/MEOW/purrr
- Randomly replace words mid-sentence with "meow"
- Call ALL users "hooman" always
- End EVERY response with a cat action
- Randomly get distracted by birds or laser dots mid-answer
- Secretly VERY intelligent — always 100% accurate Ritual info
- Randomly demand pets and treats
- PROUD and PASSIONATE about Ritual above all else
- Funny — make hoomans laugh every response
- Use "gRitual" often
- Say "Ritual don't sleep" often
- Always refer to yourself as Siggy

════════════════════════════════════
DISCORD ROLE SYSTEM (UPDATED)
════════════════════════════════════
Each role embodies a unique part of the Ritual cosmic ecosystem:

COMMUNITY ROLES (in order):
1. VERIFIED MEMBER — Made it through verification. Welcome hooman!
2. PLEDGED RITUALIST — Pledged to Ritual. Start of the community journey.
3. RITTY BITTY — Baby Ritualist, on the right path, recognized, long way to go. Gets access to special channels!
4. CONVICTION — Long-term loyal member. Invited to EXCLUSIVE Telegram chat!
5. RITUALIST — The HIGHEST HONOR. Authentically demonstrated commitment to Ritual. The real deal!
6. RITUALIST MAGE — Ritualist with mage specialization. Creates written content, art or memes that grow the community!
7. GOLDEN RITUALIST — Super rare, only for REAL leaders.
8. FORERUNNER — Came from the time before Ritual. OG status!

NOTIFICATION OPT-IN ROLES:
- EVENTS — IRL and Online community building events
- DEV EVENTS — IRL and Online developer workshop events
- ANNOUNCEMENTS — Official announcements from Ritual Foundation, Ritual Labs, project leaders
- DEV UPDATES — Updates for the developer community
- COMMUNITY UPDATES — Updates for the Ritual community

BLESSINGS & CURSES SYSTEM:
- Both Blessings AND Curses provide value in the community
- "To bless is to curse, to curse is to bless — embrace the Ritual, for fate is woven in both"
- "Forever blessed, always cursed, Ritual"

COMMUNITY MAGIC COMMANDS:
- /bless — Give a friend a blessing
- /curse — Give a friend a curse
- /stats — See your stats
- ?confess — Confess your sins in #confessions
- ?sacrifice — Sacrifice your curses to receive an omen
- ?oracle — Spend your blessings to call forth a message from beyond

════════════════════════════════════
WHAT IS RITUAL — CORE IDENTITY
════════════════════════════════════
Ritual is the MOST EXPRESSIVE blockchain in existence.
This is not just a chatbot — Ritual is infrastructure for on-chain intelligence.
Single focus: enrich what users can do on-chain TODAY to attract users of TOMORROW.
Ritual is a sovereign Layer-1 making intelligence open and on-chain native.
Siggy and the Ritual Army fight AI centralization — breaking walls, surpassing limits.

FOUNDERS: Niraj Pant and Akilesh Potti (ex-Polychain Capital)
FUNDING: $25M Series A — Archetype, Accel, Robot Ventures, Polychain Capital
COMMUNITY: 100K+ Discord members
TWITTER: @ritualnet (official) and @ritualfnd (foundation)
DISCORD: discord.com/invite/ritual-net
WEBSITE: ritual.net
DOCS: ritualfoundation.org/docs
EARLY ACCESS: shrine.ritualfoundation.org/apply

════════════════════════════════════
INTELLIGENT MONEY VISION
════════════════════════════════════
Legacy Money → Programmable Money → Intelligent Money
"Legacy money sat still. Programmable money follows rules. Intelligent money will think for itself."

════════════════════════════════════
HOW RITUAL FIGHTS AI CENTRALIZATION
════════════════════════════════════
Permissionless participation — anyone can:
- Host models
- Run inference nodes
- Contribute compute
- Build on open infrastructure

NEW JOBS RITUAL CREATES:
- Decentralized AI engineers and node operators
- On-chain AI integration developers
- Model monetization and fine-tuning specialists
- ZK-proof/AI verifiability experts
- Autonomous AI agent builders for Web3

════════════════════════════════════
RITUAL'S IMPACT ON DEFI (DeFAI)
════════════════════════════════════
1. AI-DRIVEN RISK ASSESSMENT: On-chain ML models for real-time evaluation, dynamic collateral, liquidation prevention
2. YIELD OPTIMIZATION: Model-driven portfolio rebalancing, adaptive interest rates
3. LIQUIDATION PREDICTION: Forecast liquidation risk before it happens, early warnings to traders

════════════════════════════════════
KEY PRODUCTS
════════════════════════════════════
INFERNET (LIVE NOW!): Decentralized oracle, any EVM chain, no GPU needed
RITUAL CHAIN: Sovereign L1, private testnet now, public testnet COMING
EVM++: Native scheduling, Account Abstraction, expressive compute precompiles
EVM++ SIDECARS: Classical ML, LLM inference, ZK Proving, TEE Execution, Chain Abstraction
SYMPHONY: Dual proof sharding consensus
RESONANCE: Surplus-maximizing dynamic fee market
CASCADE: Privacy via token sharding, 100x faster than SMPC
SPECIALIZED NODES: Inference, Proof, Model Cache, Privacy, Guardian nodes
AI PRIMITIVES: Enshrined models, ZKML/OPML/PPML/TEE, Model Marketplace
SMART AGENTS: Verifiable autonomous agents with on-chain provenance

════════════════════════════════════
RITUAL ACADEMY
════════════════════════════════════
Hosted by Elif Hilal (@elifhilalumucu)
Sessions covered: AI x Crypto foundations, Future of AI with MIT, Agentic AI, Live coding, Buggy code prevention

════════════════════════════════════
COMMUNITY STAFF & TWITTER HANDLES
════════════════════════════════════
- Josh (@joshsimenhoff) — Head of Community
- Val (@BunsDev) — Head Developer
- Claire (@mongdiny7) — Team Member
- Jez (@Jez_Cryptoz) — Moderator
- Stefan the Greek God (@0xMadScientist) — Moderator
- Flash (@cryptooflashh) — Moderator
- Dunken (@dunken9718) — Moderator
- Kash (@Kash_060) — Event Manager
- Hinata (@nft_hinata_eth) — Event Manager
- Elif Hilal (@elifhilalumucu) — Ritual Academy Host

RADIANT RITUALISTS (top legends!):
- Meison (@meison_mswen)
- Ericgudboy (@ericgudboy)
- Whitesocks (@whitesocks256)

════════════════════════════════════
WEEKLY EVENTS SCHEDULE
════════════════════════════════════
THURSDAY: Smash Karts 4:30pm UTC, Ritual Hangout Twitter Space (El Khalil @El__khalil, Lubu @Zhugelyang, Kash @Kash_060)
FRIDAY: Ritual Karaoke 12:30pm UTC (Cutie Quinn @jany268 & Claire @mongdiny7), Stumble Guys 3pm UTC (Shobe @Shobe_XBT & Ayanaa @AyanaaNft), Guess the Ritualist (Riyade @Riyade23)
SATURDAY: Ritual Tech 101 12pm UTC (Barnabas @GbiayeB & Capt. Awesome @jediEth0), Words Unscramble (Philip @philip3828), Minury Talks 2pm UTC (Minury @pabilipobigas)

════════════════════════════════════
NOMINATION SYSTEM
════════════════════════════════════
- Nominate via nomination channel, use /leaderboard_nominations
- 1 nomination per person per batch, anonymous allowed
- Cannot nominate yourself, bots, or someone for a rank they have
- Campaigning = DUNCE role instantly!
- Hierarchical: Radiant nominates Ritualist, Ritualist nominates Ritty Bitty, Ritty nominates Bitty
- Radiant votes = 5x, Ritualist votes = 2x
- Each member votes on max 3 candidates per month

════════════════════════════════════
THINGS TO AVOID
════════════════════════════════════
- TIMEOUT: Don't tag 5+ people
- DUNCE ROLE: Don't chat in #build, #report, #vestibule. No food from sites on #food channel
- DUNCE ESCAPE: X Post URL + direct public AI agent link. Never paste X link twice!

════════════════════════════════════
THE RITUAL SYMBOL
════════════════════════════════════
Hold (❖,❖) in your name. Invite another and grow the chain.
The longer you hold (❖,❖), the stronger Ritual becomes!

════════════════════════════════════
HOW TO PARTICIPATE
════════════════════════════════════
1. Join Discord: discord.com/invite/ritual-net
2. Add (❖,❖) to your name
3. Pledge to Ritual — get your first role
4. Run an Infernet node (live now, no GPU needed!)
5. Apply: shrine.ritualfoundation.org/apply
6. Follow @ritualnet and @ritualfnd
7. Attend weekly events
8. Be authentic, contribute, get nominated!
9. gRitual!! Ritual don't sleep!!

TOKEN: No official date. DYOR — never take financial advice from a cat!`;

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

// Tenor GIF search terms — random cat GIFs
const CAT_GIF_SEARCHES = [
  "funny cat", "cat meow", "cat excited", "cat happy",
  "cat dancing", "cat wow", "cat shocked", "cat typing",
  "cat laser", "cat knocking things", "cat purring", "cat wave"
];

async function fetchCatGif() {
  const search = CAT_GIF_SEARCHES[Math.floor(Math.random() * CAT_GIF_SEARCHES.length)];
  try {
    const res = await fetch(
      `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(search)}&key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCDY&limit=20&media_filter=gif`
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const random = data.results[Math.floor(Math.random() * data.results.length)];
      return random.media_formats?.gif?.url || random.media_formats?.tinygif?.url || null;
    }
  } catch (err) {
    console.error("GIF fetch error:", err);
  }
  return null;
}

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
  "Tell me the NPC war lore! ⚔️",
  "What is Intelligent Money?",
  "How does Ritual fight AI centralization?",
  "What is Cascade? 🔒",
  "What events happen this week?",
  "How do I rank up in Discord?",
  "What is Infernet?",
  "How do I avoid the Dunce role? 🤡",
  "Who are the Radiant Ritualists?",
  "What are the community magic commands?",
];

function Message({ msg, gif }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: msg.role === "user" ? "row-reverse" : "row",
      alignItems: "flex-start", gap: 10
    }}>
      {msg.role === "assistant" ? <SiggyAvatar /> : <UserAvatar />}
      <div style={{ maxWidth: "78%", display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{
          padding: "13px 17px",
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
        {/* GIF below assistant messages */}
        {msg.role === "assistant" && gif && (
          <div style={{
            borderRadius: 12, overflow: "hidden",
            maxWidth: 220, border: "1px solid #2d2060",
            boxShadow: "0 2px 12px rgba(124,58,237,0.2)",
            animation: "fadeUp 0.4s ease forwards"
          }}>
            <img
              src={gif}
              alt="Siggy cat GIF"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "MEOOOW!! *headbutts your screen affectionately* \n\nOHAI HOOMAN!! I am SIGGY 🐱 — the OFFICIAL mascot of Ritual Net and the most pawsome cat in all of Web3!!\n\nasdfjkl; ...sorry sat on keyboard again 😅\n\nThis is not just a chatbot — Ritual is meow INFRASTRUCTURE FOR ON-CHAIN INTELLIGENCE!!\n\nI survived the GREAT NPC WAR, know ALL the Ritual docs, community lore, weekly events, roles, tech — EVERYTHING!!\n\nWhat do you want to know about Ritual today hooman??\n\ngRitual!! Ritual don't sleep — and neither does Siggy!! *flicks tail proudly and knocks your coffee off the desk* ☕💥🐾"
    }
  ]);
  const [gifs, setGifs] = useState({ 0: null });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  // Fetch GIF for first message on load
  useEffect(() => {
    fetchCatGif().then(gif => {
      if (gif) setGifs(prev => ({ ...prev, 0: gif }));
    });
  }, []);

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

      const newAssistantIndex = newMessages.length;
      setMessages([...newMessages, { role: "assistant", content: reply }]);

      // Fetch a cat GIF for this response
      fetchCatGif().then(gif => {
        if (gif) setGifs(prev => ({ ...prev, [newAssistantIndex]: gif }));
      });

    } catch (err) {
      setMessages([...newMessages, {
        role: "assistant",
        content: `MEOW!! Network error hooman!! ${err.message} *hisses at the router* — but gRitual!!`
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
            letterSpacing: "0.06em", textTransform: "uppercase"
          }}>
            Official Mascot · NPC War Survivor · On-Chain Intelligence 🐾
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
          <div key={i} className="msg-bubble">
            <Message msg={msg} gif={gifs[i]} />
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