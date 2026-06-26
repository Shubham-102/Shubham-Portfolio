"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/lib/data";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's your strongest project?",
  "Do you have RAG experience?",
  "Are you open to relocation?",
];

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: `Hi — I'm ${personal.name.split(" ")[0]}'s AI. Ask me about my projects, skills, or experience.`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // send only the conversational turns (skip the greeting)
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: data.reply ?? "Sorry — something went wrong. Try again in a moment.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection error. Is the API key set?" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat with Shubham's AI"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-accent bg-accent text-base shadow-[0_0_24px_rgba(226,255,89,0.35)] transition hover:scale-105"
      >
        {open ? "×" : <span className="font-mono text-xl">{"</>"}</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden border border-line bg-panel shadow-2xl"
          >
            {/* terminal title bar */}
            <div className="flex items-center gap-2 border-b border-line bg-base px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="ml-2 font-mono text-[11px] tracking-wider text-muted">
                ask-{personal.name.split(" ")[0].toLowerCase()} — zsh
              </span>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className="font-mono text-[13px] leading-relaxed">
                  <span className={m.role === "user" ? "text-accent" : "text-faint"}>
                    {m.role === "user" ? "you ›" : "shubham ›"}
                  </span>
                  <p className={m.role === "user" ? "mt-1 text-ink" : "mt-1 text-ink/85"}>
                    {m.content}
                  </p>
                </div>
              ))}
              {loading && (
                <p className="font-mono text-[13px] text-faint">
                  shubham › <span className="animate-pulse">thinking…</span>
                </p>
              )}

              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full border border-line px-3 py-2 text-left font-mono text-[12px] text-muted transition hover:border-accent hover:text-accent"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <div className="flex items-center gap-2 border-t border-line px-3 py-2.5">
              <span className="font-mono text-sm accent-text">›</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="ask anything…"
                className="flex-1 bg-transparent font-mono text-[13px] text-ink outline-none placeholder:text-faint"
              />
              <button
                onClick={() => send(input)}
                disabled={loading}
                className="font-mono text-[11px] tracking-wider text-accent disabled:opacity-40"
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
