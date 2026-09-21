#!/bin/bash
kill -9 $(lsof -ti:8080) 2>/dev/null
sleep 1
PORT=8080 npm run dev &
sleep 8
echo "Server started on http://localhost:8080"
