---
title: 'Getting Started'
pubDate: 2025-05-05
description: 'A comprehensive guide to getting started with the Litos Theme'
recommend: true
tags: ['Tutorial']
heroImage: 'Getting-Started.webp'
ogImage: 'Getting-Started.webp'
---

Welcome to **[Litos Theme](https://github.com/Dnzzk2/Litos)**! This comprehensive guide will walk you through setting up and launching your project with Litos, a modern blog theme built with Astro.js.

## Prerequisites

Before starting, ensure you have the following tools installed in your development environment:

- :link[Node.js]{id=https://nodejs.org/en/download} - Required for running the development environment
- :link[pnpm]{id=https://pnpm.io/installation} - Our preferred package manager for dependency management
- :link[Git]{id=https://git-scm.com/} - For version control and project management
- :link[VS Code]{id=https://code.visualstudio.com/} - Recommended code editor with excellent development experience

> [!tip]
> While VS Code is recommended, you can use any code editor of your choice that supports web development.

## Project Setup

### Creating Your Project

You can start your Litos project by forking the repository:

1. Visit the [Litos Theme repository](https://github.com/Dnzzk2/Litos)
2. Click the "Fork" button to create your copy
3. Clone your forked repository locally:

```bash
git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
cd [YOUR_REPO_NAME]
```

### Installing Dependencies

Once you have cloned the repository, install the project dependencies:

```bash
# Install all required dependencies
pnpm install

# Start the development server
pnpm dev
```

## Project Configuration

Before customizing your site, familiarize yourself with the [project structure](/posts/project-structure). There are three main configuration areas to focus on:

1. **Basic Site Configuration**
   - File: `src/config.ts`
   - Purpose: Configure site metadata, navigation, and core settings
   - Learn more: [Basic Configuration Guide](/posts/basic-configuration)

2. **Code Block Styling**
   - File: `ec.config.mjs`
   - Purpose: Customize code block appearance and behavior
   - Learn more: [ExpressiveCode Configuration](/posts/expressivecode-configuration)

3. **Markdown Extensions**
   - File: `/plugins/index.ts`
   - Purpose: Configure markdown plugins and extensions
   - Learn more: [Markdown Extension Syntax](/posts/markdown-extension-syntax)

## Content Creation

Litos supports both standard Markdown and enhanced syntax features:

- [Basic Markdown Syntax](/posts/markdown-syntax-guide) - Core markdown formatting
- [Extended Markdown Features](/posts/markdown-extension-syntax) - Advanced formatting options

For post configuration and metadata, refer to the [Post Configuration](/posts/md-configuration) guide.

> [!tip]
> Start by customizing the basic configuration to match your site's branding and navigation structure before creating content.
