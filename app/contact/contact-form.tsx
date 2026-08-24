"use client";

import { FormEvent, useState } from "react";

const topics = [
  "Residential cleaning",
  "Vacation-rental turnover",
  "Existing booking",
  "Property or business partnership",
  "Provider opportunity",
  "Something else",
];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [topic, setTopic] = useState(() => {
    if (typeof window === "undefined") return "";
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (requested === "provider") return "Provider opportunity";
    if (requested === "partnership") return "Property or business partnership";
    return "";
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");
    const form = event.currentTarget;
    try {
      const formData = new FormData(form);
      formData.set("form-name", "contact-inquiry");
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error("We could not send your message.");
      form.reset();
      setTopic("");
      setState("success");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "We could not send your message. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-success" role="status">
        <span aria-hidden="true">✓</span>
        <h2>Message received.</h2>
        <p>Thank you. Our Charleston team will review your note and respond using the contact details you provided.</p>
        <button className="button" type="button" onClick={() => setState("idle")}>Send another message</button>
      </div>
    );
  }

  return (
    <form name="contact-inquiry" data-netlify="true" netlify-honeypot="website" className="contact-form" onSubmit={submit}>
      <input type="hidden" name="form-name" value="contact-inquiry" />
      <div className="contact-form-grid">
        <label><span>First name</span><input name="firstName" autoComplete="given-name" required maxLength={80} /></label>
        <label><span>Last name</span><input name="lastName" autoComplete="family-name" required maxLength={80} /></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
        <label><span>Mobile <small>(optional)</small></span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label className="contact-form-wide"><span>What can we help with?</span><select name="topic" required value={topic} onChange={(event) => setTopic(event.target.value)}><option value="" disabled>Choose one</option>{topics.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="contact-form-wide"><span>Message</span><textarea name="message" rows={6} minLength={10} maxLength={1500} required placeholder="Tell us what would help us respond clearly." /></label>
      </div>
      <label className="honeypot-field" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <p className="contact-privacy">Your information is used only to respond to this request. If you provide a mobile number, we may use it for transactional service alerts, confirmations, or reminders. Message and data rates may apply.</p>
      {state === "error" && <p className="contact-error" role="alert">{error}</p>}
      <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">→</span></button>
    </form>
  );
}
