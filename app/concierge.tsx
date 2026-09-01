"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const quickPrompts = [
  "Help me choose a cleaning service",
  "Check whether you serve my area",
  "Help me understand pricing",
  "I manage multiple properties",
  "I need help with an existing booking",
];

export default function Concierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi. What can I help you with? I can help you choose a service, understand pricing, check service areas, find booking or account tools, or point you to the right next step.",
    },
  ]);
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
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-8) }),
      });
      const result = (await response.json()) as { answer?: string };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            result.answer ||
            "I couldn't answer that just now. Send us a note through the contact form and we'll help from there.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. You can still reach the Charleston Clean Routine team through our contact form.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void ask(input);
  }

  return (
    <div className={`concierge ${open ? "open" : ""}`}>
      {open && (
        <section className="concierge-panel" aria-label="Ask Charleston Clean Routine">
          <header>
            <div>
              <span>Charleston Clean Routine</span>
              <strong>Ask Us</strong>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Ask Us">
              ×
            </button>
          </header>

          <div className="concierge-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p key={index} className={message.role}>
                {message.content}
              </p>
            ))}
            {sending && <p className="assistant typing">One moment…</p>}
          </div>

          {messages.length < 3 && (
            <div className="concierge-prompts">
              {quickPrompts.map((prompt) => (
                <button type="button" key={prompt} onClick={() => void ask(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={submit}>
            <label htmlFor="concierge-input">What can we help with?</label>
            <div>
              <input
                id="concierge-input"
                value={input}
                maxLength={500}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question…"
              />
              <button type="submit" disabled={sending || !input.trim()} aria-label="Send question">
                →
              </button>
            </div>
          </form>

          <footer>
            Need a person? <a href="/contact">Contact our Charleston team</a>. Please don&apos;t share card numbers, passwords, or property access codes here.
          </footer>
        </section>
      )}

      <button
        className="concierge-toggle"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
      >
        <span aria-hidden="true">{open ? "×" : "C"}</span>
        {open ? "Close" : "Ask us"}
      </button>
    </div>
  );
}
