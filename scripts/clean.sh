#!/bin/bash

# Clean up script - removes containers, volumes, and images
set -e

echo "🧹 Cleaning up Docker resources..."

# Stop and remove containers
echo "   Stopping containers..."
docker compose down -v

# Remove orphaned volumes
echo "   Removing volumes..."
docker volume prune -f

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "💡 To also remove Docker images, run:"
echo "   docker compose down --rmi all -v"
echo ""
