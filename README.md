# ⚡ LinkSnap

**LinkSnap** is a lightweight, ultra-fast, and open-source "Link-in-Bio" platform built with Next.js 14, TypeScript, and Zustand. 

What makes LinkSnap unique? **It operates entirely without a database.** By utilizing an innovative **URL Client-State Synchronization** architecture, all user profile configurations, links, and active themes are compressed and encoded directly into the shareable URL. No servers, no network latency, no database costs—just pure front-end performance.

---

## ✨ Features

- **Database-less & Serverless:** Zero database connections. User data is persisted via browser `LocalStorage` for the dashboard and synchronized dynamically via `Base64/URL` encryption for public profiles.
- **Feature-Driven Architecture:** Codebase organized strictly by feature-centric modules for clean separation of concerns and scalability.
- **Live Theme Builder:** Interactive theme customizer featuring smooth, fluid layout transitions driven by **Framer Motion**.
- **Dynamic Previews:** A fully interactive iPhone mockup wrapper displaying real-time UI/UX state updates as you edit.
- **Type Safety:** 100% end-to-end type coverage using TypeScript.

---

## 🏗️ Architecture Design

LinkSnap follows a strict **Feature-Driven (Domain-Driven)** folder structure to keep the codebase clean and maintainable:

```text
src/
├── app/                  # Next.js App Router (Routing layer only)
│   ├── (admin)/dashboard # Private content creator workspace
│   └── [username]/       # Dynamic public profile viewer
├── features/             # Core business domains
│   └── profile/          # Profile context containing all local sub-modules
│       ├── components/   # Feature-specific elements (ThemeSelector, LinkCard, PreviewPanel)
│       └── store/        # Zustand persistence layer (useProfileStore.ts)
└── types/                # Shared global TypeScript definitions
```

The State-to-URL Trick 🔮
When a user configures their profile, the internal Zustand state structure is serialized and encoded into a URL query parameter:

State Capture: JSON.stringify(profile)

Compression/URI Safety: encodeURIComponent(jsonString)

Hashing: Binary-to-text encoding using btoa()

Result: https://linksnap.vercel.app/johndoe?data=eyJuYW1lIjoiSm9obiBEb2UiLC...

🚀 Getting Started
Prerequisites
Node.js 18+

npm or pnpm / yarn

Installation
Clone the repository:

Bash
git clone [https://github.com/AdibJadidi/linksnap.git](https://github.com/AdibJadidi/linksnap.git)
cd linksnap
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 with your browser to see the live workspace.

🛠️ Tech Stack
Framework: Next.js 14 (App Router)
Language: TypeScript
State Management: Zustand
Animation Engine: Framer Motion
Styling: Tailwind CSS
Icons: Lucide React
