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
            Hands-on • Real-world • Production-focused • OpenSource
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
            DevOps Training Project
            <br />
            <span style={{ color: '#0d6efd' }}>
              Learn by Building Real Systems
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
            A practical DevOps training platform focused on real-world workflows
            including CI/CD pipelines, containerization, cloud infrastructure,
            monitoring, and secure authentication — designed to simulate
            production environments, not toy examples.
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
              Access Training
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
              Enroll Now
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
