# Development Setup Guide

This guide will help you set up your development environment for working with this Jekyll website.

## Prerequisites

- macOS (these instructions are for macOS)
- Homebrew package manager
- Terminal/Command Line access

## Step-by-Step Setup

### 1. Install Homebrew (if not already installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install rbenv (Ruby Version Manager)

```bash
brew install rbenv ruby-build
```

### 3. Initialize rbenv in your shell

Add rbenv to your shell configuration:

```bash
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
```

Then reload your shell configuration:

```bash
source ~/.zshrc
```

Or simply open a new terminal window.

### 4. Install Ruby 3.3.10

```bash
rbenv install 3.3.10
```

This may take a few minutes as it compiles Ruby from source.

### 5. Set Ruby version for this project

Navigate to the project directory and set the local Ruby version:

```bash
cd /path/to/amithjkamath.github.io
rbenv local 3.3.10
```

This creates a `.ruby-version` file in the project directory.

### 6. Verify Ruby version

```bash
ruby --version
# Should output: ruby 3.3.10 (2025-10-23 revision 343ea05002) [arm64-darwin25]
```

### 7. Update RubyGems and install Bundler

```bash
gem update --system
gem install bundler
```

### 8. Install project dependencies

```bash
bundle install
```

This reads the `Gemfile` and installs all required gems.

## Building the Site

Once setup is complete, you have two options for building:

### Quick Build (for testing)

```bash
./build.sh
```

This will:
- Build the site
- Show statistics
- Report any errors

### Full Build & Serve (for development)

```bash
./build_and_serve.sh
```

This will:
- Build the site
- Start a local server at http://localhost:4000
- Enable live reload (changes appear automatically in browser)
- Keep running until you press Ctrl+C

## Troubleshooting

### Problem: "Could not find 'bundler' required by your Gemfile.lock"

**Solution:**
```bash
eval "$(rbenv init - zsh)"
gem install bundler
bundle install
```

### Problem: "Ruby version mismatch"

**Solution:**
```bash
cd /path/to/project
rbenv local 3.3.10
ruby --version  # Verify it's 3.3.10
```

### Problem: "Command 'rbenv' not found"

**Solution:**
```bash
# Reinstall rbenv
brew install rbenv ruby-build

# Add to shell
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc
```

### Problem: Build fails with gem errors

**Solution:**
```bash
# Clean and reinstall
rm -rf vendor/bundle .bundle
bundle install
```

### Problem: Port 4000 already in use

**Solution:**
```bash
# Find and kill process using port 4000
lsof -ti:4000 | xargs kill -9

# Or use a different port
bundle exec jekyll serve --port 4001
```

## Updating Dependencies

To update all gems to their latest compatible versions:

```bash
bundle update
```

To update a specific gem:

```bash
bundle update <gem-name>
```

## Verifying Setup

Run this quick verification:

```bash
# Check Ruby
ruby --version
# Expected: ruby 3.3.10

# Check Bundler
bundle --version
# Expected: Bundler version 2.7.x or higher

# Check rbenv
rbenv version
# Expected: 3.3.10 (set by /path/to/project/.ruby-version)

# Test build
./build.sh
# Expected: [SUCCESS] Site built successfully!
```

## Why rbenv?

We use rbenv instead of system Ruby because:

1. **System Ruby is outdated**: macOS ships with Ruby 2.6.x which is too old for modern Jekyll
2. **No sudo needed**: rbenv installs gems in your home directory
3. **Version isolation**: Different projects can use different Ruby versions
4. **Easy updates**: Simple to upgrade or switch Ruby versions

## Additional Resources

- [rbenv documentation](https://github.com/rbenv/rbenv)
- [Jekyll documentation](https://jekyllrb.com/docs/)
- [Bundler documentation](https://bundler.io/docs.html)
- [al-folio theme](https://github.com/alshedivat/al-folio/)

## Quick Reference

```bash
# View installed Ruby versions
rbenv versions

# Install a new Ruby version
rbenv install 3.3.10

# Set global default Ruby
rbenv global 3.3.10

# Set project-specific Ruby
rbenv local 3.3.10

# Rehash rbenv shims (after installing gems with executables)
rbenv rehash

# Build site
./build.sh

# Build and serve with live reload
./build_and_serve.sh

# Manual build
bundle exec jekyll build

# Manual serve
bundle exec jekyll serve

# Clean build artifacts
bundle exec jekyll clean
```

## Notes

- The `.ruby-version` file is committed to the repository and tells rbenv which Ruby version to use
- The `Gemfile.lock` file is committed and ensures everyone uses the same gem versions
- Build scripts automatically initialize rbenv, so you don't need to run `eval "$(rbenv init - zsh)"` manually
- Deprecation warnings from Sass are normal and can be ignored for now

---

**Last Updated**: October 31, 2025  
**Ruby Version**: 3.3.10  
**Bundler Version**: 2.7.2
