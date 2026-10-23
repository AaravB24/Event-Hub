# EventHub &bull; Event Management & Booking Platform

EventHub is a modern, full-stack event discovery, management, and ticket booking web platform.

---

## Tech Stack

- **Frontend:** React 19, Vite, Vanilla CSS
- **Backend:** Python FastAPI, Uvicorn, Pydantic
- **Database:** PostgreSQL (with SQLAlchemy & Alembic)

---

## Project Structure

```text
eventhub/
├── .gitignore                     # Root gitignore for OS, node_modules, and virtualenvs
├── README.md                      # Project documentation and setup guide
│
├── frontend/                      # React + Vite client
│   ├── .gitignore
│   ├── index.html                 # Main HTML entry
│   ├── package.json               # Node dependencies and scripts
│   ├── vite.config.js             # Vite configuration
│   ├── public/
│   │   └── eventhub-logo.svg      # Platform branding
│   └── src/
│       ├── main.jsx               # React entry point
│       ├── App.jsx                # Initial EventHub landing & health checker
│       ├── App.css                # App-level UI styling
│       └── index.css              # Global styles, variables, and typography
│
└── backend/                       # Python FastAPI REST API
    ├── .gitignore
    ├── .env.example               # Template environment configuration (no secrets)
    ├── requirements.txt           # Python dependencies
    ├── run.py                     # Convenience runner script
    └── app/
        ├── __init__.py
        ├── main.py                # FastAPI application with health check endpoints
        └── core/
            ├── __init__.py
            └── config.py          # Centralized configuration settings
```

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js**: v18.0.0 or later (v24+ recommended)
- **npm**: v9.0.0 or later
- **Python**: v3.10 or later (v3.13 tested)
- **PostgreSQL**: v14 or later (for upcoming database integration)

---

## Getting Started

### 1. Backend Setup (FastAPI)

1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   - **Windows (PowerShell / Command Prompt):**
     ```powershell
     python -m venv .venv
     .\.venv\Scripts\activate
     ```
   - **Linux / macOS:**
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   Copy `.env.example` to `.env`:
   - **Windows:**
     ```powershell
     copy .env.example .env
     ```
   - **Linux / macOS:**
     ```bash
     cp .env.example .env
     ```
   *(Adjust PostgreSQL credentials and host in `.env` as required for your local setup. Secrets should never be committed to git).*

5. Start the backend development server:
   ```bash
   python run.py
   ```
   *Alternative uvicorn command:*
   ```bash
   uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
   ```

6. Verify the backend:
   - **Health Check:** [http://127.0.0.1:8000/api/health](http://127.0.0.1:8000/api/health) or [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)
   - **Interactive API Docs (Swagger UI):** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
   - **ReDoc:** [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

### 2. Frontend Setup (React + Vite)

1. In a separate terminal, navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   - [http://localhost:5173](http://localhost:5173)

---

## Verifying Frontend & Backend Integration

1. Start both the backend (port 8000) and frontend (port 5173).
2. In the frontend application at [http://localhost:5173](http://localhost:5173), click the **"Test Backend Connection"** button in the health check card.
3. The card will ping the FastAPI `/api/health` endpoint and display the live status response.

---

## Security Notes

- No passwords, private API keys, or database credentials are saved in this repository.
- Always add sensitive configuration to `.env` (which is ignored by `.gitignore`).
- For production, configure explicit CORS domain whitelisting in `backend/app/core/config.py`.

---

## Roadmap

- [x] Initial scaffold: Frontend (React + Vite) & Backend (FastAPI)
- [x] CORS middleware & health check endpoints
- [ ] PostgreSQL connection setup & SQLAlchemy ORM models
- [ ] User authentication & authorization (JWT)
- [ ] Event discovery, creation, and management
- [ ] Ticket booking and reservation flow
