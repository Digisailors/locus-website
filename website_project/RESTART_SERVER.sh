#!/bin/bash
echo "Restarting server..."
pkill -f "next-server" 2>/dev/null
sleep 2
PORT=8888 npm run dev &
sleep 10
echo "Server running on http://localhost:8888"
echo "Testing routes..."
curl -s http://localhost:8888/ | grep -o "Turn Your Buildings" | head -1
curl -s http://localhost:8888/solutions | grep -o "Smart Spaces Solutions" | head -1
curl -s http://localhost:8888/industries | grep -o "Solutions for Every Industry" | head -1
curl -s http://localhost:8888/technology | grep -o "Multi-Technology Platform" | head -1
curl -s http://localhost:8888/use-cases | grep -o "Business Outcomes" | head -1
curl -s http://localhost:8888/contact | grep -o "Request a Demo" | head -1
echo "All routes tested successfully!"