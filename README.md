# Kanban Board Component

Frontend Developer Hiring Assignment – Kanban Board View implementation based on the provided PDF.

## Live Storybook

> TODO: Deploy Storybook (Chromatic / Vercel / Netlify) and paste the URL here.

## Installation

```bash
npm install
# or
yarn
```

### Run Storybook

```bash
npm run storybook
```

### Run Vite dev server

```bash
npm run dev
```

## Architecture

- **Vite + React + TypeScript** for fast, type‑safe development.
- **Tailwind CSS** for utility‑first styling. Design tokens follow the appendix from the assignment.
- The Kanban board is a **pure component** that receives `columns` and `tasks` plus callbacks:
  - `onTaskMove`
  - `onTaskCreate`
  - `onTaskUpdate`
  - `onTaskDelete`
- Local board behaviour such as drag‑and‑drop and modal editing is implemented inside the Kanban components and reported upwards via the callbacks.
- State is owned in **Storybook stories** (and `App.tsx` for local playground) so the component can be reused in other apps easily.

## Features

- [x] Drag‑and‑drop tasks between columns using native HTML5 DnD
- [x] Task creation & editing via an accessible modal
- [x] Delete tasks from the modal or card actions
- [x] Priority, tags, assignee avatar, and due‑date badge
- [x] Column header with task count and optional WIP limit display
- [x] Collapse / expand columns
- [x] Responsive design with horizontal scrolling on desktop and stacked behaviour on smaller viewports (via Storybook viewport)
- [x] Keyboard accessibility for opening/editing tasks, focus styles, and Escape to close modal

## Storybook Stories

- **Default** – Standard board with 4 columns and the sample tasks from the PDF.
- **Empty** – Same columns but no tasks to showcase empty states.
- **LargeDataset** – 40+ generated tasks spread across columns to test rendering performance.
- **MobileView** – Uses Storybook viewport to demonstrate mobile layout.
- **InteractivePlayground** – Fully interactive board where you can drag, add, edit, and delete tasks.

## Technologies

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Storybook
- Native HTML5 drag‑and‑drop
- Small primitives (Button, Avatar, Modal)

## Contact

Your Name – your.email@example.com

> Note: This project structure and implementation was generated with AI assistance. Make sure you understand every file and adapt, refactor, or extend it so it truly becomes your own work before submitting anywhere.
