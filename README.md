# Amith Kamath's Personal Website

A professional academic website built with Jekyll, based on the [al-folio](https://github.com/alshedivat/al-folio/) theme.

## Quick Start

### Prerequisites

- Ruby 3.3 or higher
- Bundler gem

**First time setup?** See [SETUP.md](SETUP.md) for detailed installation instructions.

### Building and Serving Locally

Two scripts are provided for local development:

#### Full Build and Serve (Recommended for Development)
```bash
./build_and_serve.sh
```
This script will:
- Install all dependencies
- Clean previous builds
- Build the site
- Start a local server at http://localhost:4000
- Enable live reload for development

#### Quick Build Only (For Testing)
```bash
./build.sh
```
This script will:
- Quickly build the site
- Verify the build was successful
- Show build statistics

### Manual Commands

If you prefer to run Jekyll commands manually:

```bash
# Install dependencies
bundle install

# Clean previous builds
bundle exec jekyll clean

# Build the site
bundle exec jekyll build

# Serve locally with live reload
bundle exec jekyll serve --watch --livereload
```

## Site Structure

The website includes the following main sections:

- **Home** (`/`) - Introduction and overview
- **Research** (dropdown menu)
  - Projects - Research projects and thesis work
  - Publications - Published papers and research outputs
  - Service - Academic service and conference organization
- **Updates** (`/news/`) - Latest news, publications, and milestones
- **CV** (`/cv/`) - Curriculum Vitae
- **Notes** (`/notes/`) - Blog posts and paper summaries
- **Contact** (`/contact/`) - Contact information and social media links

## Recent Changes

### Configuration Cleanup
- Removed unused features: books collection, newsletter, comments (Giscus/Disqus)
- Removed unused analytics and verification services
- Simplified Jekyll plugins (removed Twitter, Jupyter Notebook, Tabs, Get-JSON plugins)

### UI Improvements
- Created dedicated Contact page for all social media links
- Removed social icons from homepage footer for cleaner appearance
- Reorganized navigation with clearer hierarchy
- Improved navigation order for better user flow

### Development Tools
- Added `build_and_serve.sh` script for full development workflow
- Added `build.sh` script for quick build validation
- Both scripts include colored output and error handling

## Deployment

This site is deployed on GitHub Pages. Any push to the `main` branch will trigger an automatic deployment.

## Known Issues

### Sass Deprecation Warnings

You may see deprecation warnings about Sass `@import` rules and global built-in functions during build. These are safe to ignore - they come from the al-folio theme's dependencies (Font Awesome, Tabler Icons) and don't affect the site functionality. The theme maintainers will update these in future releases.

### Blog Category Conflicts

You may see warnings about conflicting destinations for blog category pages. This is a known issue with Jekyll archives and doesn't affect the site.

## Customization

Key files to customize:
- `_config.yml` - Site-wide settings
- `_data/socials.yml` - Social media links
- `_pages/about.md` - Homepage content
- `_bibliography/papers.bib` - Publications

## License

All rights reserved.

## Acknowledgments

This site is based on the excellent [al-folio](https://github.com/alshedivat/al-folio/) theme by Maruan Al-Shedivat. 