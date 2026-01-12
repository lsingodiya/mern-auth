import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card
          className="border-0"
          style={{
            maxWidth: '820px',
            width: '100%',
            padding: '4.5rem 3.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              marginBottom: '1.75rem',
              padding: '6px 14px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '999px',
              background: '#f1f3f5',
              color: '#495057',
            }}
          >
            Production-Ready • Secure • Scalable
          </div>

          <h1
            style={{
              fontSize: '3.25rem',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
              color: '#111',
            }}
          >
            MERN Authentication
            <br />
            <span style={{ color: '#0d6efd' }}>
              Built for Real Applications
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.75,
              color: '#495057',
              maxWidth: '640px',
              marginBottom: '3rem',
            }}
          >
            A hardened MERN authentication boilerplate using JWT stored in
            secure HTTP-Only cookies, Redux Toolkit for predictable state
            management, and React Bootstrap for clean, maintainable UI —
            designed for production from day one.
          </p>

          <div className="d-flex align-items-center gap-3">
            <Button
              href="/login"
              size="lg"
              style={{
                padding: '0.75rem 2.25rem',
                fontWeight: 600,
                borderRadius: '12px',
              }}
            >
              Sign In
            </Button>

            <Button
              href="/register"
              size="lg"
              variant="outline-secondary"
              style={{
                padding: '0.75rem 2.25rem',
                fontWeight: 600,
                borderRadius: '12px',
              }}
            >
              Create Account
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
