import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--neon-cyan)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-glass btn-cyan-glow">
        Return Home
      </Link>
    </div>
  );
}
