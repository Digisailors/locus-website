#!/bin/bash
PORT=15000
PROJECT_DIR="/Users/rampowiz/Documents/Testbook/Stream-Pro/clipboard/Locus screenshot/website_project"

cd "$PROJECT_DIR"
echo "Changing to directory: $PROJECT_DIR"
echo "Starting Next.js server on port $PORT"
PORT=$PORT npm run dev &
SERVER_PID=$!
echo "Server PID: $SERVER_PID"
echo $SERVER_PID > server.pid

sleep 10
echo ""
echo "Server should be running on http://localhost:$PORT"
echo "Checking..."

if curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT | grep -q "200"; then
    echo "✅ Server is running successfully!"
    echo "URL: http://localhost:$PORT"
else
    echo "⏳ Waiting for server to start..."
    sleep 5
    curl -s http://localhost:$PORT | head -2
fi