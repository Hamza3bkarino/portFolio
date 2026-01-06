

## ✨ Features

✅ **Modern UI/UX Design** - Beautiful, responsive layout with smooth animations
✅ **Next.js 16+** - Fast performance with automatic code splitting
✅ **Tailwind CSS** - Utility-first styling for rapid development
✅ **React Icons** - Beautiful, consistent icons throughout
✅ **Contact Form** - Integrated with n8n for real-time message handling
✅ **Project Showcase** - Detailed project cards with technology stacks
✅ **Skill Display** - Interactive skill matrix with proficiency levels
✅ **SEO Optimized** - Built-in Next.js SEO features
✅ **Dark/Light Mode** - Automatic theme detection
✅ **Fully Responsive** - Works on all device sizes
✅ **Modern Authentication** - Client-side routing with Next.js navigation

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS 4.1.18
- **State Management**: React hooks
- **API Client**: Axios
- **Icons**: React Icons
- **Font**: DM Sans (Google Fonts)

### Development Tools
- **Linting**: ESLint with Next.js config
- **Build Tool**: Vite (bundled with Next.js)
- **Version Control**: Git
- **Package Manager**: npm/yarn/pnpm

### Backend Integration
- **Form Handling**: n8n webhook integration
- **Environment Variables**: For API keys and configuration

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- A code editor (VS Code recommended)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the `my-next-app` directory with:
   ```env
   N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/portfolio-contact
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

---

## 🎯 Usage

### Basic Navigation

The portfolio includes:
- **Homepage**: Hero section with call-to-action
- **Services**: Detailed service offerings
- **Projects**: Showcase of completed projects
- **About**: Personal information and skills
- **Contact**: Form for inquiries

### Customization Guide

1. **Update Content**:
   Edit files in the `my-next-app/app` directory:
   - `page.js` (Homepage)
   - `services/page.js` (Services)
   - `projects/page.js` (Projects)
   - `about/page.js` (About)
   - `contact/page.js` (Contact)

2. **Change Styling**:
   Modify Tailwind classes in component files or update `tailwind.config.js`

3. **Add New Projects**:
   Edit the `projects` array in `projects/page.js` to add new project cards

4. **Update Skills**:
   Modify the `skills` array in `projects/page.js` to reflect your expertise

### Contact Form Integration

The contact form uses n8n for backend processing. To set this up:

1. Create a free account at [n8n.io](https://n8n.io/)
2. Create a new workflow with an HTTP trigger
3. Set the webhook URL in your `.env.local` file
4. Configure the workflow to process incoming form data

---

## 📁 Project Structure

```
my-next-app/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Footer.jsx       # Footer component
│   │   └── Navbar.jsx       # Navigation component
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── page.js              # Homepage
│   ├── contact/page.jsx     # Contact page
│   ├── projects/page.jsx    # Projects page
│   ├── services/page.jsx    # Services page
│   └── about/page.jsx        # About page
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies
├── package-lock.json        # Lockfile for dependencies
└── jsconfig.json            # TypeScript paths configuration
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the project root with:

env
# n8n Webhook URL for contact form
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/portfolio-contact

