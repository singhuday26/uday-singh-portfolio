# Uday Singh - Portfolio Website

A modern, performant portfolio website built with React, TypeScript, and Vite, showcasing my work as a UI Engineer.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun package manager

### Local Development Setup

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd uday-singh-portfolio

# 2. Install dependencies
npm install
# or
bun install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and add your Supabase credentials

# 4. Start the development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:8080`

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

See `.env.example` for the template.

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: TanStack Query
- **Backend**: Supabase
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```text
src/
├── components/      # React components
│   ├── ui/         # Reusable UI components (shadcn/ui)
│   └── ...         # Feature components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── pages/          # Page components
├── types/          # TypeScript type definitions
└── utils/          # Helper utilities
```

## 🚢 Deployment

### Via Lovable

Simply open [Lovable](https://lovable.dev/projects/ec07e846-037c-49d0-9d3b-37d7d0bdc3b8) and click on Share -> Publish.

### Manual Deployment

```sh
npm run build
# Deploy the `dist` folder to your hosting provider
```

## 🔗 Custom Domain

To connect a custom domain via Lovable:

1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

### Uday Singh

- LinkedIn: [udaysingh2626](https://linkedin.com/in/udaysingh2626)
- GitHub: [singhuday26](https://github.com/singhuday26)
- Email: [uday.singh240818@gmail.com](mailto:uday.singh240818@gmail.com)
