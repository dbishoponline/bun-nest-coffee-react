#!/bin/bash

# Production startup script
set -euo pipefail

echo "🚀 Starting production environment..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found. Please create one from .env.example"
    exit 1
fi

# Build and start containers with production overrides
echo "🐳 Building and starting Docker containers in production mode..."
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d

echo ""
echo "✅ Production environment is ready!"
echo ""
echo "📍 Services available at:"
echo "   Frontend:    http://localhost:5173"
echo "   Backend:     http://localhost:3000"
echo "   Prometheus:  http://localhost:9090"
echo "   Grafana:     http://localhost:3001"
echo ""
