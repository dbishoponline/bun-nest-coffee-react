#!/bin/bash

# Stop all containers script
set -e

echo "🛑 Stopping all containers..."
docker compose down

echo "✅ All containers stopped!"
