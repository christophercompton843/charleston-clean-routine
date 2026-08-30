"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const quickPrompts = ["What services do you offer?", "Do you serve my area?", "I manage multiple properties", "How do I contact you?", "I’m interested in becoming a provider"];

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hello. I’m the Charleston Clean Routine concierge. I can explain services, pricing, service areas, bookings, account access, contact options, and provider opportunities." }]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  async function ask(text: string) {
    const question = text.trim();
    if (!question || sending) return;
    const next = [...messages, { role: "user" as const, content: question }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const response = await fetch("/api/concierge", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next.slice(-8) }) });
      const result = (await response.json()) as { answer?: string };
      setMessages((current) => [...current, { role: "assistant", content: result.answer || "I’m sorry—I could not answer that just now. Please use our contact form for human help." }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I’m having trouble connecting. Please email hello@charlestoncleanroutine.com or use our online inquiry form." }]);
    } finally { setSending(false); }
  }

  function submit(event: FormEvent) { event.preventDefault(); void ask(input); }

  return (
    <div className={`concierge ${open ? "open" : ""}`}>
      {open && <section className="concierge-panel" aria-label="Charleston Clean Routine concierge">
        <header><div><span>Charleston Clean Routine</span><strong>AI concierge</strong></div><button type="button" onClick={() => setOpen(false)} aria-label="Close concierge">×</button></header>
        <div className="concierge-messages" aria-live="polite">{messages.map((message, index) => <p key={index} className={message.role}>{message.content}</p>)}{sending && <p className="assistant typing">Considering that…</p>}</div>
        {messages.length < 3 && <div className="concierge-prompts">{quickPrompts.map((prompt) => <button type="button" key={prompt} onClick={() => void ask(prompt)}>{prompt}</button>)}</div>}
        <form onSubmit={submit}><label htmlFor="concierge-input">Ask a question</label><div><input id="concierge-input" value={input} maxLength={500} onChange={(event) => setInput(event.target.value)} placeholder="How can we help?" /><button type="submit" disabled={sending || !input.trim()} aria-label="Send question">→</button></div></form>
        <footer>For personal help, <a href="/contact">contact our Charleston team</a>. Never share card numbers, passwords, or access codes here.</footer>
      </section>}
      <button className="concierge-toggle" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open}><span aria-hidden="true">{open ? "×" : "C"}</span>{open ? "Close" : "Ask us"}</button>
    </div>
  );
}
