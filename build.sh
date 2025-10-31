#!/bin/bash
# Quick build script for Jekyll website - just builds without serving
# Useful for quickly checking if the site builds successfully

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
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

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_status "Quick build starting..."

# Initialize rbenv if available
if command -v rbenv &> /dev/null; then
    eval "$(rbenv init - zsh)" || eval "$(rbenv init - bash)"
fi

# Clean previous builds
print_status "Cleaning previous builds..."
bundle exec jekyll clean 2>/dev/null || true

# Build the site
print_status "Building the site..."
if bundle exec jekyll build 2>&1 | tee build.log; then
    print_success "Site built successfully!"
    
    # Check for actual build errors (not deprecation warnings)
    if grep -E "^(ERROR|Error):" build.log > /dev/null; then
        print_error "Build completed but actual errors were found in the log"
    fi
    
    # Count deprecation warnings
    DEPRECATION_COUNT=$(grep -c "DEPRECATION WARNING" build.log 2>/dev/null || echo "0")
    if [ "$DEPRECATION_COUNT" -gt 0 ]; then
        echo -e "${YELLOW}[INFO]${NC} Found $DEPRECATION_COUNT deprecation warnings (can be ignored for now)"
    fi
    
    # Clean up log file
    rm -f build.log
    
    # Print site info
    print_status "Site information:"
    echo "  - Total files generated: $(find _site -type f | wc -l | tr -d ' ')"
    echo "  - Site directory size: $(du -sh _site | cut -f1)"
    
    exit 0
else
    print_error "Build failed. Check the output above for errors."
    rm -f build.log
    exit 1
fi
