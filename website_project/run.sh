#!/bin/bash
echo "Starting Next.js development server..."
npm run dev &
sleep 5
echo ""
echo "=========================================="
echo "Server Status:"
netstat -an | grep 3000 | head -5
echo "=========================================="
pgrep -f "next"
