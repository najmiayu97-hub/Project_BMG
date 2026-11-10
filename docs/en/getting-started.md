# Getting Started

## Prerequisites

- Node.js (latest LTS recommended)
- npm (bundled with Node.js)
- Git (optional, for version control)

## Installation

1. Enter the project directory:

```bash
cd C:\xampp\htdocs\project_BMG
```

2. Install dependencies:

```bash
npm install
```

## Running in Development Mode

```bash
npm run dev
```

Vite runs the dev server with HMR (Hot Module Replacement). Open the URL shown in the terminal (usually `http://localhost:5173`).

## Linting

```bash
npm run lint
```

Uses Oxlint to check the code.

## Production Build

```bash
npm run build
```

Build output is in the `dist/` folder.

## Preview Build

```bash
npm run preview
```

## Documentation (VitePress)

```bash
npm run docs:dev      # docs dev server
npm run docs:build    # build docs
npm run docs:preview  # preview docs build
```