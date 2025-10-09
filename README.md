# Anna Tiala - Portfolio Website

A modern, responsive portfolio website showcasing web development projects, design work, and professional experience. Built with React and TypeScript, featuring a clean and accessible design.

🌐 **Live Site**: [anna.tiala.fi](http://anna.tiala.fi/)

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-section Portfolio**:
  - Web development projects
  - Design and graphics work
  - Photography portfolio
- **Interactive CV**: Expandable sections for work experience, education, and skills
- **Contact Form**: Integrated email functionality using EmailJS
- **Accessibility**: WCAG 2.1 AA compliant design
- **Modern UI**: Clean, professional design with smooth animations

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: SCSS with modular component-based architecture
- **Routing**: React Router DOM v6
- **UI Components**: Material-UI (MUI)
- **Email Service**: EmailJS for contact form
- **Image Optimization**: React Lazy Load Image Component
- **Build Tools**: Create React App with Vite configuration
- **Development Tools**: Storybook for component development

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header/          # Site navigation and header
│   ├── Main/            # Homepage layout
│   ├── CvView/          # CV/Resume section
│   ├── PortfolioView/   # Portfolio showcase
│   ├── ContactView/     # Contact form and info
│   └── [Component]/     # Individual component folders
├── images/              # Static image assets
├── styles/              # Global SCSS styles
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Latest LTS version (check with `node -v`)
- **npm**: Comes with Node.js

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/annaruntti/portfolio2.1.git
   cd portfolio2.1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The app will automatically reload when you make changes, and lint errors will appear in the console.

## 📜 Available Scripts

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `npm start`               | Runs the app in development mode |
| `npm build`               | Builds the app for production    |
| `npm test`                | Launches the test runner         |
| `npm run storybook`       | Starts Storybook on port 9009    |
| `npm run build-storybook` | Builds Storybook for production  |

## 🎨 Component Architecture

The project uses a modular component architecture where each component has its own folder containing:

- `ComponentName.tsx` - React component logic
- `ComponentName.scss` - Component-specific styles

### Key Components

- **Header**: Navigation and site branding
- **Main**: Homepage with introduction blocks
- **CvArea**: Professional experience and skills
- **PortfolioArea**: Project showcases with expandable content
- **ContactArea**: Contact form and social links
- **ExpandableContent**: Reusable accordion-style content blocks

## 🌐 Deployment

The site is deployed at [anna.tiala.fi](http://anna.tiala.fi/) and automatically updates from the main branch.

## 🔧 Development

### Node Version Management

If you need to update Node.js:

```bash
# Check current version
node -v

# Install latest version with nvm
nvm install node
nvm use node
```

### Troubleshooting

**Problem: `npm start` fails with "react-scripts: command not found"**

Solution:

```bash
# Install the correct version of react-scripts
npm install react-scripts@5.0.1 --save

# Then try starting again
npm start
```

**Problem: Node.js compatibility issues**

The project uses `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with older Node.js versions. If you encounter OpenSSL errors, this flag should resolve them.

### Code Style

The project uses:

- **Prettier** for code formatting
- **ESLint** for code linting
- **TypeScript** for type safety

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Anna Tiala**

- Website: [anna.tiala.fi](http://anna.tiala.fi/)
- LinkedIn: [annaruntti](https://www.linkedin.com/in/annaruntti/)
- GitHub: [annaruntti](https://github.com/annaruntti)
- Email: anruntti@gmail.com

---

Built with ❤️ using React and TypeScript
