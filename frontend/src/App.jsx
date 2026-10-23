import { useState } from 'react'
import './App.css'

function App() {
  const [healthStatus, setHealthStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorDetails, setErrorDetails] = useState(null)

  const checkBackendHealth = async () => {
    setIsLoading(true)
    setErrorDetails(null)
    setHealthStatus(null)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/health')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setHealthStatus(data)
    } catch (err) {
      setErrorDetails(
        err.message || 'Unable to reach backend. Ensure FastAPI server is running on http://127.0.0.1:8000'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-container" id="app-root-container">
      {/* Navigation Header */}
      <header className="navbar" id="main-navigation">
        <div className="brand" id="brand-identity">
          <svg
            className="brand-icon"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="48" height="48" rx="12" fill="url(#brand-grad)" />
            <path
              d="M14 16H34V32H14V16Z"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12V16M29 12V16M14 22H34"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="27" r="2" fill="#FFFFFF" />
            <defs>
              <linearGradient id="brand-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand-title">EventHub</span>
        </div>

        <div className="nav-badges" id="system-indicators">
          <span className="badge badge-version" id="badge-app-version">v0.1.0 Alpha</span>
          <span className="badge badge-status" id="badge-system-status">
            <span className="status-dot"></span>
            Scaffold Ready
          </span>
        </div>
      </header>

      {/* Hero Header */}
      <main id="main-content">
        <section className="hero-section" id="hero-overview">
          <div className="hero-pill" id="pill-announcement">
            <span>✨</span> Next-Gen Event Management & Booking Platform
          </div>
          <h1 className="hero-title" id="page-title">EventHub Platform</h1>
          <p className="hero-subtitle" id="hero-description">
            Initial project architecture successfully initialized with React Vite frontend, FastAPI backend, and PostgreSQL foundation.
          </p>
        </section>

        {/* Core Architecture Cards */}
        <section className="grid-container" id="architecture-overview" aria-label="Architecture Stack">
          {/* Tech Stack Card */}
          <article className="card" id="card-tech-stack">
            <div className="card-header">
              <h2 className="card-title">
                <span className="card-icon" role="img" aria-label="layers">⚡</span>
                Technology Stack
              </h2>
            </div>
            <div className="stack-list">
              <div className="stack-item" id="stack-frontend">
                <div className="stack-meta">
                  <span className="stack-name">Frontend</span>
                  <span className="stack-role">Interactive UI & SPA</span>
                </div>
                <span className="stack-tag">React 19 + Vite</span>
              </div>

              <div className="stack-item" id="stack-backend">
                <div className="stack-meta">
                  <span className="stack-name">Backend API</span>
                  <span className="stack-role">Async REST Web Service</span>
                </div>
                <span className="stack-tag">FastAPI (Python)</span>
              </div>

              <div className="stack-item" id="stack-database">
                <div className="stack-meta">
                  <span className="stack-name">Database Target</span>
                  <span className="stack-role">Relational Data Store</span>
                </div>
                <span className="stack-tag">PostgreSQL</span>
              </div>
            </div>
          </article>

          {/* Backend API Health Tester Card */}
          <article className="card" id="card-backend-tester">
            <div className="card-header">
              <h2 className="card-title">
                <span className="card-icon" role="img" aria-label="satellite">🛰️</span>
                Backend Health Check
              </h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Verify connectivity between this React client and the FastAPI backend service.
            </p>

            <div className="tester-box">
              <div className="endpoint-display" id="endpoint-url-display">
                <span className="method-tag">GET</span>
                <span>http://127.0.0.1:8000/api/health</span>
              </div>

              <div className="actions-row">
                <button
                  type="button"
                  id="btn-check-backend-health"
                  className="btn-primary"
                  onClick={checkBackendHealth}
                  disabled={isLoading}
                >
                  {isLoading ? 'Checking connection...' : 'Test Backend Connection'}
                </button>
              </div>

              {healthStatus && (
                <div className="response-card success" id="health-response-success">
                  <strong>Backend Status: 200 OK</strong>
                  <pre className="response-json">{JSON.stringify(healthStatus, null, 2)}</pre>
                </div>
              )}

              {errorDetails && (
                <div className="response-card error" id="health-response-error">
                  <strong>Connection Status: Offline / Unreachable</strong>
                  <p style={{ marginTop: '4px' }}>{errorDetails}</p>
                </div>
              )}

              {!healthStatus && !errorDetails && !isLoading && (
                <div className="response-card idle" id="health-response-idle">
                  <span>Click the button above to test the live FastAPI endpoint.</span>
                </div>
              )}
            </div>
          </article>

          {/* Roadmap & Next Steps Card */}
          <article className="card" id="card-next-milestones">
            <div className="card-header">
              <h2 className="card-title">
                <span className="card-icon" role="img" aria-label="checklist">📋</span>
                Next Implementation Steps
              </h2>
            </div>
            <div className="roadmap-grid">
              <div className="roadmap-item done" id="milestone-init-frontend">
                <span className="roadmap-dot"></span>
                <span>React + Vite Initialized</span>
              </div>
              <div className="roadmap-item done" id="milestone-init-backend">
                <span className="roadmap-dot"></span>
                <span>FastAPI Base & Health API</span>
              </div>
              <div className="roadmap-item" id="milestone-postgres-models">
                <span className="roadmap-dot"></span>
                <span>PostgreSQL & SQLAlchemy Models</span>
              </div>
              <div className="roadmap-item" id="milestone-auth-system">
                <span className="roadmap-dot"></span>
                <span>Authentication & Roles</span>
              </div>
              <div className="roadmap-item" id="milestone-event-crud">
                <span className="roadmap-dot"></span>
                <span>Event Creation & Listing</span>
              </div>
              <div className="roadmap-item" id="milestone-booking-flow">
                <span className="roadmap-dot"></span>
                <span>Ticket Booking & Checkout</span>
              </div>
            </div>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="main-footer">
        <p>EventHub Platform &bull; Initial Architecture Setup</p>
      </footer>
    </div>
  )
}

export default App
