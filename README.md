# AI Agent Mastery

This repository is a hands-on learning project for understanding and building AI
agents step by step. Each week contains a learning journal and small TypeScript
experiments covering agent concepts such as tools, state, orchestration, and
language-model integration.

## Setup

Requirements:

- Node.js 20 or later
- npm

Install dependencies:

```bash
npm install
```

## Run the Day 01 Example

Start the TypeScript example in development mode:

```bash
npm run dev
```

Run the TypeScript type check:

```bash
npm run typecheck
```

Build the project:

```bash
npm run build
```

The Day 01 example accepts a text goal, selects a matching tool, executes only
that tool, and returns a response based on its result. It currently supports
pending and completed study-task requests.

## Project Structure

```text
src/index.ts                    Day 01 tool-selection example
learning-journal/week-01/       Weekly learning notes
tsconfig.json                   TypeScript configuration
package.json                    Scripts and dependencies
```

## Learning Journal

- [Week 01 — Day 01](learning-journal/week-01/day-01.md)
