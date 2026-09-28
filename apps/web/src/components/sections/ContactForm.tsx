'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, ArrowRightIcon, CheckIcon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const intents = ['Senior / Full-time role', 'Custom Plugin / Contract', 'Architecture Advisory', 'Quick consultation'];
const ease = [0.23, 1, 0.32, 1] as const;

export function ContactForm() {
  const [intent, setIntent] = useState(intents[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please provide your name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please provide a valid work email address.';
    if (message.trim().length < 10) e.message = 'Please provide a short description of the role or system requirements.';
    return e;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus('submitting');
    
    // Simulate API submission or dispatch mailto
    await new Promise((r) => setTimeout(r, 1000));
    
    // Fallback directly to mailto so user message is never lost
    try {
      const subject = encodeURIComponent(`[Portfolio Inquiry: ${intent}] from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nIntent: ${intent}\n\nMessage:\n${message}`);
      window.open(`mailto:chzeeshanyousaf343@gmail.com?subject=${subject}&body=${body}`, '_blank');
    } catch {
      // Ignore if blocked
    }
    
    setStatus('success');
  };

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
  };

  const field =
    'w-full rounded-theme border bg-bg/50 px-4 py-3 text-fg placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 ease-out focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20';

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          className="flex h-full min-h-[420px] flex-col items-start justify-center"
          role="status"
        >
          <span className="glow flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg">
            <CheckIcon className="h-6 w-6" />
          </span>
          <h3 className="display mt-6 text-3xl font-semibold text-fg">Inquiry logged!</h3>
          <p className="mt-3 max-w-sm leading-relaxed text-muted">
            Thank you, {name.split(' ')[0]}. I will review your requirements and respond to {email} within 24 hours.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 text-sm text-fg underline decoration-line underline-offset-4 transition-colors duration-150 ease-out hover:decoration-accent focus:outline-none focus-visible:text-accent"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <fieldset>
            <legend className="text-sm font-medium text-muted">What are you reaching out regarding?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {intents.map((i) => {
                const selected = intent === i;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setIntent(i)}
                    className={`whitespace-nowrap rounded-theme-sm border px-3 py-1.5 text-xs transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      selected
                        ? 'border-accent bg-accent/15 text-accent font-medium'
                        : 'border-line text-muted hover:border-fg/30 hover:text-fg'
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your Name" id="cf-name" error={errors.name}>
              <input
                id="cf-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sarah Jenkins"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'cf-name-error' : undefined}
                className={`${field} ${errors.name ? 'border-red-400/70' : 'border-line'}`}
              />
            </Field>
            <Field label="Work Email" id="cf-email" error={errors.email}>
              <input
                id="cf-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@company.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'cf-email-error' : undefined}
                className={`${field} ${errors.email ? 'border-red-400/70' : 'border-line'}`}
              />
            </Field>
          </div>

          <Field label="Message & Requirements" id="cf-message" error={errors.message}>
            <textarea
              id="cf-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the engineering challenge, team scope, or project timeline…"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'cf-message-error' : undefined}
              className={`${field} resize-none ${errors.message ? 'border-red-400/70' : 'border-line'}`}
            />
          </Field>

          {status === 'error' && (
            <p role="alert" className="flex items-center gap-2 text-sm text-red-300">
              <AlertCircleIcon className="h-4 w-4" /> Something went wrong. Please email directly at chzeeshanyousaf343@gmail.com
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="group glow mt-1 inline-flex items-center justify-center gap-2 rounded-theme bg-accent px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-150 ease-out hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-wait disabled:opacity-80"
          >
            {status === 'submitting' ? (
              <>
                <Loader2Icon className="h-4 w-4 animate-spin" /> Transmitting…
              </>
            ) : (
              <>
                Send direct message
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, id, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium text-muted uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
