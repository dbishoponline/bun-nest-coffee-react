# 🚀 Bun + NestJS + React Boilerplate

A modern, production-ready full-stack boilerplate using **Bun**, **NestJS**, **React**, **Redux Toolkit**, **Redux Sagas**, **PostgreSQL**, **Redis**, **Prometheus**, and **Grafana**, all orchestrated via **Docker Compose**.

## ✨ Features

### Backend
- **Bun** - Fast all-in-one JavaScript runtime
- **NestJS** - Progressive Node.js framework
- **TypeORM** - Database ORM with PostgreSQL
- **Redis** - In-memory cache and session store
- **Prometheus** - Metrics collection
- **Health checks** - Ready and live endpoints

### Frontend
- **React 18** - Modern React with hooks
- **Redux Toolkit** - State management
- **Redux Sagas** - Side effect management
- **TailwindCSS** - Utility-first CSS
- **tailwind-animate** - Animation utilities
- **DaisyUI** - Component library
- **shadcn/ui** - Beautiful, accessible components
- **Vite** - Lightning-fast build tool

### Infrastructure
- **Docker Compose** - Container orchestration
- **PostgreSQL** - Relational database
- **Redis** - Cache and session store
- **Prometheus** - Metrics collection
- **Grafana** - Metrics visualization

## 📁 Project Structure

```
.
├── backend/                 # NestJS backend application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── modules/        # Feature modules
│   │   │   ├── health/     # Health check module
│   │   │   └── metrics/    # Prometheus metrics module
│   │   ├── common/         # Shared utilities
│   │   ├── app.module.ts   # Main application module
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts         # Application entry point
│   ├── Dockerfile
│   └── package.json
│
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── features/       # Redux slices and sagas
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── store/          # Redux store configuration
│   │   ├── styles/         # Global styles
│   │   └── App.tsx         # Main application component
│   ├── Dockerfile
│   └── package.json
│
├── docker/                 # Docker configuration
│   ├── prometheus/         # Prometheus config
│   ├── grafana/            # Grafana provisioning
│   └── init-scripts/       # Database initialization
│
├── scripts/                # Utility scripts
│   ├── dev.sh             # Start development
│   ├── prod.sh            # Start production
│   ├── stop.sh            # Stop all services
│   └── clean.sh           # Clean up resources
│
├── docker-compose.yml      # Development compose file
├── docker-compose.prod.yml # Production overrides
├── .env.example           # Environment template
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Bun](https://bun.sh/) (for local development)

### Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bun-nest-coffee-react
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```

3. **Start development environment**
   ```bash
   ./scripts/dev.sh
   # or
   docker compose up --build
   ```

4. **Access the services**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - Prometheus: http://localhost:9090
   - Grafana: http://localhost:3001 (admin/admin)

### Production

```bash
./scripts/prod.sh
# or
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

## 🛠️ Development Commands

### Docker Commands

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Restart a specific service
docker compose restart backend

# Stop all services
docker compose down

# Clean up (remove volumes)
docker compose down -v
```

### Local Development (without Docker)

```bash
# Backend
cd backend
bun install
bun run start:dev

# Frontend
cd frontend
bun install
bun run dev
```

## 📊 API Endpoints

### Backend

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Welcome message |
| `/api/info` | GET | API information |
| `/health` | GET | Health check |
| `/health/ready` | GET | Readiness probe |
| `/health/live` | GET | Liveness probe |
| `/metrics` | GET | Prometheus metrics |

## 🎨 UI Components

The frontend includes pre-configured UI components:

- **Button** - Customizable button with variants
- **Card** - Card container with header, content, footer
- **ThemeToggle** - Dark/light mode switcher

### Using shadcn/ui

The project is set up to use shadcn/ui components. You can add more components:

```bash
cd frontend
bunx shadcn-ui@latest add [component-name]
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_HOST` | PostgreSQL host | postgres |
| `POSTGRES_PORT` | PostgreSQL port | 5432 |
| `POSTGRES_USER` | PostgreSQL user | postgres |
| `POSTGRES_PASSWORD` | PostgreSQL password | postgres |
| `POSTGRES_DB` | PostgreSQL database | app_database |
| `REDIS_HOST` | Redis host | redis |
| `REDIS_PORT` | Redis port | 6379 |
| `BACKEND_PORT` | Backend port | 3000 |
| `FRONTEND_PORT` | Frontend port | 5173 |
| `VITE_API_URL` | API URL for frontend | http://localhost:3000 |

## 📈 Monitoring

### Prometheus

Access Prometheus at http://localhost:9090 to view metrics.

Built-in metrics:
- Default Node.js metrics
- HTTP request counter
- HTTP request duration histogram

### Grafana

Access Grafana at http://localhost:3001 (admin/admin).

Prometheus is pre-configured as a data source.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.