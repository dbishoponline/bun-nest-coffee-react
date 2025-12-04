#!/bin/bash

# Development startup script
set -e

echo "🚀 Starting development environment..."

# Check if .env exists, if not copy from example
if [ ! -f .env ]; then
    echo "📋 Creating .env from .env.example..."
    cp .env.example .env
fi

# Build and start containers
echo "🐳 Building and starting Docker containers..."
docker compose up --build -d

echo ""
echo "✅ Development environment is ready!"
echo ""
echo "📍 Services available at:"
echo "   Frontend:    http://localhost:5173"
echo "   Backend:     http://localhost:3000"
echo "   Prometheus:  http://localhost:9090"
echo "   Grafana:     http://localhost:3001 (admin/admin)"
echo ""
echo "📝 Useful commands:"
echo "   docker compose logs -f          # View logs"
echo "   docker compose down              # Stop all services"
echo "   docker compose restart backend   # Restart backend"
echo ""
