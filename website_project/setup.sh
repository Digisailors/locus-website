#!/bin/bash

echo "========================================"
echo "Spatial Intelligence Website Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
node_version=$(node --version | cut -d 'v' -f 2)
required_version="18.0.0"

if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]; then
    echo "❌ Node.js version $node_version is too old. Please update to 18+."
    exit 1
fi

echo "✅ Node.js version: $node_version"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully"
    echo ""
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create public/images directory if it doesn't exist
if [ ! -d "public/images" ]; then
    echo "Creating public/images directory..."
    mkdir -p public/images
    echo "✅ Directory created"
fi

echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "To start the development server:"
echo "  > npm run dev"
echo ""
echo "The website will be available at:"
echo "  > http://localhost:3000"
echo ""
echo "Don't forget to:"
echo "  1. Add your logo to public/images/logo.png"
echo "  2. Customize brand name in components"
echo "  3. Update meta SEO tags"
echo ""