#!/bin/bash

# Stop all containers script
set -euo pipefail

echo "🛑 Stopping all containers..."
docker compose down

echo "✅ All containers stopped!"
