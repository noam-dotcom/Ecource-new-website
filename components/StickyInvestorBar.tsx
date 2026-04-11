'use client';
import { useEffect, useState } from 'react';

export function StickyInvestorBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      const contact = document.getElementById('contact');
      const contactVisible = contact
        ? contact.getBoundingClientRect().top < window.innerHeight
        : false;
      setShow(window.scrollY > 400 && !contactVisible);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: 'rgba(10, 15, 30, 0.96)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.6rem 2rem', gap: '1rem', flexWrap: 'wrap',
      borderBottom: '1px solid rgba(245,158,11,0.2)'
    }}>
      <span style={{ color: '#fff', fontSize: '0.85rem' }}>
        <strong style={{ color: '#f59e0b' }}>$5M Seed Round Open</strong>
        {' · '}Patent Pending · 40 Countries
      </span>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <a
          href="#contact"
          style={{ color: '#fbbf24', fontSize: '0.82rem', textDecoration: 'underline' }}
        >
          Request Deck
        </a>
        <a
          href="CALENDLY_URL_HERE"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#f59e0b', color: '#0a0f1e', padding: '0.4rem 1.1rem',
            borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600,
            textDecoration: 'none', whiteSpace: 'nowrap'
          }}
        >
          Book a Call →
        </a>
      </div>
    </div>
  );
}
