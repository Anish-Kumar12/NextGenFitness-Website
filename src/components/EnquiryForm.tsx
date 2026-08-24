"use client";

import { useState, type FormEvent } from "react";
import { goals, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import { Button } from "./ui";

const field =
  "w-full rounded-xl border border-line bg-ink-2 px-[15px] py-[13px] text-[15.5px] text-fg " +
  "transition placeholder:text-muted/70 focus:border-teal focus:ring-3 focus:ring-teal/20 focus:outline-none";

const label =
  "mb-2 block text-[12.5px] font-bold tracking-[0.1em] text-muted uppercase";

const DEFAULT_NOTE = "Opens WhatsApp — nothing is stored on this site.";

/**
 * No backend required: the form composes a prefilled WhatsApp message
 * and hands it off to wa.me.
 */
export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState<string>(goals[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      setError("Please add your name.");
      return;
    }
    if (digits.length < 10) {
      setError("Please add a valid 10-digit mobile number.");
      return;
    }

    setError(null);

    const text = [
      "Hi NextGen Fitness! I'd like to know more about joining.",
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Goal: ${goal}`,
      message.trim() ? `Note: ${message.trim()}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface p-[30px]"
    >
      <h3 className="mb-1.5 text-[22px]">Send an enquiry</h3>
      <p className="mb-[22px] text-[14.5px] text-muted">
        Fill this in and we&rsquo;ll open WhatsApp with your details ready to send.
      </p>

      <div className="mb-4">
        <label htmlFor="name" className={label}>
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Rahul Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className={label}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={field}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="goal" className={label}>
          What&rsquo;s your goal?
        </label>
        <select
          id="goal"
          name="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className={field}
        >
          {goals.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className={label}>
          Anything else? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Preferred timing, injuries, questions..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} min-h-24 resize-y`}
        />
      </div>

      <Button type="submit" variant="whatsapp" className="mt-1.5 w-full">
        <WhatsAppIcon className="size-[18px] shrink-0" />
        Send on WhatsApp
      </Button>

      <p
        role={error ? "alert" : undefined}
        aria-live="polite"
        className={`mt-3.5 text-center text-[12.5px] ${error ? "text-copper-light" : "text-[#6f858e]"}`}
      >
        {error ?? DEFAULT_NOTE}
      </p>
    </form>
  );
}
