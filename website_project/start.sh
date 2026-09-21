#!/bin/bash
cd "/Users/rampowiz/Documents/Testbook/Stream-Pro/clipboard/Locus screenshot/website_project"
PORT=8080 npm run dev &
echo $! > server.pid
echo "Server started on port 8080"