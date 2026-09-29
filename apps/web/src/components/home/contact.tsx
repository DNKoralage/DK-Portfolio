import { useState, type FormEvent } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, SendHorizontal } from 'lucide-react';
import { ClientResponseError } from 'pocketbase';
import pocketbaseClient from '@/lib/pocketbase-client';
import { socials } from '@/data/portfolio';

const icons = { LinkedIn: Linkedin, Facebook, Instagram };

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (name.length < 2 || !email.includes('@') || subject.length < 2 || message.length < 8) {
      setStatus('error');
      setError('Please complete every field with a real message.');
      return;
    }

    setStatus('sending');
    setError('');
    try {
      await pocketbaseClient.collection('messages').create({ name, email, subject, message });
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof ClientResponseError ? 'Could not send right now. Try again in a moment.' : 'Could not send right now. Try again in a moment.');
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-intro">
        <h2><Send size={16} /> Let&apos;s Build Something Great</h2>
        <p>Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p>
        <ul className="contact-list">
          <li><Mail size={15} /> <a href="mailto:dnkoralage@gmail.com">dnkoralage@gmail.com</a></li>
          <li><Phone size={15} /> <a href="tel:+94787984875">+94 78 798 4875</a></li>
          <li><MapPin size={15} /> Dehiwala, Sri Lanka</li>
        </ul>
        <div className="socials">
          {socials.map((item) => {
            const Icon = icons[item.label as keyof typeof icons];
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <label>Your Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
          <label>Your Email<input name="email" type="email" autoComplete="email" required placeholder="you@email.com" /></label>
        </div>
        <label>Subject<input name="subject" required minLength={2} placeholder="Project or collaboration" /></label>
        <label>Your Message<textarea name="message" required minLength={8} rows={4} placeholder="Tell me about the work" /></label>
        <button className="btn primary wide" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'} <SendHorizontal size={16} />
        </button>
        {status === 'sent' ? <p className="form-note ok" role="status">Message received. I&apos;ll reply soon.</p> : null}
        {status === 'error' ? <p className="form-note bad" role="alert">{error}</p> : null}
      </form>
    </section>
  );
}
