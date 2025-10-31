#!/bin/bash
# Build and serve script for Jekyll website
# This script builds the Jekyll site locally and serves it for testing

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_status "Starting Jekyll build and serve process..."

# Initialize rbenv if available
if command -v rbenv &> /dev/null; then
    eval "$(rbenv init - zsh)" || eval "$(rbenv init - bash)"
fi

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    print_error "Ruby is not installed. Please install Ruby first."
    exit 1
fi

print_status "Ruby version: $(ruby --version)"

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    print_warning "Bundler is not installed. Installing Bundler..."
    gem install bundler
fi

# Install dependencies
print_status "Installing dependencies..."
if bundle install; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Clean previous builds
print_status "Cleaning previous builds..."
bundle exec jekyll clean

# Build the site
print_status "Building the site..."
if bundle exec jekyll build; then
    print_success "Site built successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if _site directory was created
if [ ! -d "_site" ]; then
    print_error "_site directory was not created"
    exit 1
fi

print_success "Build completed successfully!"
print_status "Site is ready in the _site directory"

# Serve the site
print_status "Starting local server..."
print_status "The site will be available at: http://localhost:4000"
print_status "Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --watch --livereload
