# Makefile for Jekyll Academic Website
# This Makefile provides convenient commands for building, serving, and managing the website

# Variables
BUNDLE := bundle
JEKYLL := $(BUNDLE) exec jekyll
DOCKER_COMPOSE := docker-compose
PRETTIER := npx prettier

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
BLUE := \033[0;34m
NC := \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

# Phony targets
.PHONY: help install build serve clean test format check-deps docker-build docker-serve docker-stop docker-clean

##@ General

help: ## Display this help message
	@echo "$(BLUE)Jekyll Academic Website - Available Commands$(NC)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make $(YELLOW)<target>$(NC)\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(BLUE)%-15s$(NC) %s\n", $$1, $$2 } /^##@/ { printf "\n$(GREEN)%s$(NC)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Dependencies

check-deps: ## Check if required dependencies are installed
	@echo "$(BLUE)[INFO]$(NC) Checking dependencies..."
	@command -v ruby >/dev/null 2>&1 || { echo "$(RED)[ERROR]$(NC) Ruby is not installed"; exit 1; }
	@command -v bundle >/dev/null 2>&1 || { echo "$(YELLOW)[WARNING]$(NC) Bundler is not installed. Installing..."; gem install bundler; }
	@echo "$(GREEN)[SUCCESS]$(NC) All dependencies are available"
	@echo "  Ruby version: $$(ruby --version)"
	@echo "  Bundler version: $$(bundle --version)"

install: check-deps ## Install Ruby dependencies via Bundler
	@echo "$(BLUE)[INFO]$(NC) Installing Ruby dependencies..."
	@$(BUNDLE) install
	@echo "$(GREEN)[SUCCESS]$(NC) Dependencies installed successfully"

##@ Building

build: ## Build the Jekyll site
	@echo "$(BLUE)[INFO]$(NC) Building the Jekyll site..."
	@$(JEKYLL) build
	@echo "$(GREEN)[SUCCESS]$(NC) Site built successfully!"
	@echo "  Total files: $$(find _site -type f 2>/dev/null | wc -l | tr -d ' ')"
	@echo "  Site size: $$(du -sh _site 2>/dev/null | cut -f1)"

build-production: ## Build the Jekyll site for production (with optimizations)
	@echo "$(BLUE)[INFO]$(NC) Building the Jekyll site for production..."
	@JEKYLL_ENV=production $(JEKYLL) build
	@echo "$(GREEN)[SUCCESS]$(NC) Production build completed!"

##@ Development

serve: ## Build and serve the site locally with live reload
	@echo "$(BLUE)[INFO]$(NC) Starting local development server..."
	@echo "$(BLUE)[INFO]$(NC) Site will be available at: http://localhost:4000"
	@echo "$(YELLOW)[INFO]$(NC) Press Ctrl+C to stop the server"
	@$(JEKYLL) serve --watch --livereload

serve-drafts: ## Serve the site including draft posts
	@echo "$(BLUE)[INFO]$(NC) Starting server with drafts enabled..."
	@$(JEKYLL) serve --watch --livereload --drafts

serve-incremental: ## Serve with incremental builds (faster rebuilds)
	@echo "$(BLUE)[INFO]$(NC) Starting server with incremental builds..."
	@$(JEKYLL) serve --watch --livereload --incremental

##@ Cleaning

clean: ## Remove generated site files
	@echo "$(BLUE)[INFO]$(NC) Cleaning build artifacts..."
	@$(JEKYLL) clean
	@rm -f build.log
	@echo "$(GREEN)[SUCCESS]$(NC) Cleanup completed"

clean-cache: ## Remove Jekyll cache and metadata
	@echo "$(BLUE)[INFO]$(NC) Cleaning Jekyll cache..."
	@rm -rf .jekyll-cache
	@rm -rf .jekyll-metadata
	@echo "$(GREEN)[SUCCESS]$(NC) Cache cleaned"

clean-all: clean clean-cache ## Remove all generated files and caches
	@echo "$(BLUE)[INFO]$(NC) Removing all build artifacts and dependencies..."
	@rm -rf _site
	@echo "$(GREEN)[SUCCESS]$(NC) Complete cleanup finished"

##@ Testing & Quality

test: build ## Build and check for errors
	@echo "$(BLUE)[INFO]$(NC) Running build test..."
	@if [ -d "_site" ]; then \
		echo "$(GREEN)[SUCCESS]$(NC) Build test passed"; \
	else \
		echo "$(RED)[ERROR]$(NC) Build test failed - _site directory not created"; \
		exit 1; \
	fi

format: ## Format Liquid templates and markdown files with Prettier
	@echo "$(BLUE)[INFO]$(NC) Formatting files with Prettier..."
	@if command -v npx >/dev/null 2>&1; then \
		$(PRETTIER) --write "**/*.{md,liquid,html}" --ignore-path .gitignore; \
		echo "$(GREEN)[SUCCESS]$(NC) Files formatted successfully"; \
	else \
		echo "$(YELLOW)[WARNING]$(NC) npx not found. Install Node.js to use formatting"; \
	fi

check-format: ## Check if files are properly formatted
	@echo "$(BLUE)[INFO]$(NC) Checking file formatting..."
	@if command -v npx >/dev/null 2>&1; then \
		$(PRETTIER) --check "**/*.{md,liquid,html}" --ignore-path .gitignore; \
	else \
		echo "$(YELLOW)[WARNING]$(NC) npx not found. Install Node.js to use format checking"; \
	fi

##@ Docker

docker-build: ## Build the Docker image
	@echo "$(BLUE)[INFO]$(NC) Building Docker image..."
	@$(DOCKER_COMPOSE) build
	@echo "$(GREEN)[SUCCESS]$(NC) Docker image built successfully"

docker-serve: ## Serve the site using Docker
	@echo "$(BLUE)[INFO]$(NC) Starting site in Docker container..."
	@echo "$(BLUE)[INFO]$(NC) Site will be available at: http://localhost:4000"
	@$(DOCKER_COMPOSE) up

docker-serve-background: ## Serve the site using Docker in background
	@echo "$(BLUE)[INFO]$(NC) Starting site in Docker container (background)..."
	@$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)[SUCCESS]$(NC) Container started. Site at: http://localhost:4000"
	@echo "$(BLUE)[INFO]$(NC) Use 'make docker-logs' to view logs"
	@echo "$(BLUE)[INFO]$(NC) Use 'make docker-stop' to stop the container"

docker-stop: ## Stop the Docker container
	@echo "$(BLUE)[INFO]$(NC) Stopping Docker container..."
	@$(DOCKER_COMPOSE) down
	@echo "$(GREEN)[SUCCESS]$(NC) Container stopped"

docker-logs: ## View Docker container logs
	@$(DOCKER_COMPOSE) logs -f

docker-clean: ## Remove Docker containers and images
	@echo "$(BLUE)[INFO]$(NC) Cleaning Docker resources..."
	@$(DOCKER_COMPOSE) down -v --rmi all
	@echo "$(GREEN)[SUCCESS]$(NC) Docker cleanup completed"

##@ Maintenance

update-deps: ## Update Ruby dependencies
	@echo "$(BLUE)[INFO]$(NC) Updating Ruby dependencies..."
	@$(BUNDLE) update
	@echo "$(GREEN)[SUCCESS]$(NC) Dependencies updated"

info: ## Display project information
	@echo "$(BLUE)Project Information$(NC)"
	@echo "  Ruby version: $$(ruby --version 2>/dev/null || echo 'Not installed')"
	@echo "  Bundler version: $$(bundle --version 2>/dev/null || echo 'Not installed')"
	@echo "  Jekyll version: $$($(JEKYLL) --version 2>/dev/null || echo 'Not installed')"
	@echo "  Node version: $$(node --version 2>/dev/null || echo 'Not installed')"
	@echo "  Docker version: $$(docker --version 2>/dev/null || echo 'Not installed')"
	@if [ -d "_site" ]; then \
		echo "  Site files: $$(find _site -type f | wc -l | tr -d ' ')"; \
		echo "  Site size: $$(du -sh _site | cut -f1)"; \
	fi

quick-start: install build serve ## Quick start: install, build, and serve
	@echo "$(GREEN)[SUCCESS]$(NC) Quick start completed!"
