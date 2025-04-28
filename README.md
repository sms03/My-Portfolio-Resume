# My Portfolio & Resume

A personal portfolio and resume website for Shivam M. Salunkhe, showcasing 3D motion graphics design, CGI & VFX artistry, AI development, and web development projects.

## Live Demo

[View Portfolio Website](https://link)

## Features

- Modern, responsive design with custom animations
- Interactive sections with smooth scroll navigation
- Custom cursor with interactive animations
- In-progress projects section with completion indicators
- Work experience timeline and brand showcases
- 3D artist portfolio with client work display
- Skills visualization with progress indicators
- Contact form with email integration
- Dark/light mode toggle (coming soon)
- SEO-optimized content and metadata
- Mobile and tablet responsive layouts
- "Back to top" button for easy navigation
- Custom UI components based on shadcn/ui

## Technologies Used

- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Vite](https://vitejs.dev/) – Fast build tool and development server
- [Bun](https://bun.sh/) – JavaScript runtime and package manager
- [shadcn/ui](https://ui.shadcn.com/) – Accessible React components
- [lucide-react](https://lucide.dev/) – Icon library
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) – Viewport detection for animations
- [Radix UI](https://www.radix-ui.com/) – Primitives for UI components

## Project Structure

```
src/
  ├── components/              # React components
  │   ├── ui/                  # UI component library (shadcn/ui)
  │   ├── About.tsx            # About section with personal information
  │   ├── Contact.tsx          # Contact form and information
  │   ├── CustomCursor.tsx     # Interactive custom cursor component
  │   ├── Education.tsx        # Education and certifications section
  │   ├── Footer.tsx           # Page footer with links and credits
  │   ├── Hero.tsx             # Hero/landing section
  │   ├── Navbar.tsx           # Navigation with horizontal and vertical variants
  │   ├── Projects.tsx         # Projects and work experience sections
  │   ├── ScrollToTop.tsx      # Back-to-top button component
  │   └── Skills.tsx           # Skills and expertise section
  ├── hooks/                   # Custom React hooks
  │   ├── react-intersection-observer.tsx  # Scroll animation detection
  │   ├── use-mobile.tsx       # Mobile device detection
  │   ├── use-toast.ts         # Toast notification hook
  │   └── useScrollAnimation.tsx # Custom scroll animations
  ├── lib/                     # Utility functions
  │   └── utils.ts             # Common utility functions
  ├── pages/                   # Page components
  │   ├── Index.tsx            # Main landing page
  │   └── NotFound.tsx         # 404 error page
  ├── App.css                  # Global CSS styles
  ├── App.tsx                  # Main application component
  ├── index.css                # CSS entry point
  └── main.tsx                 # Application entry point
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) or npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sms03/My-Portfolio-Resume.git
   cd My-Portfolio-Resume
   ```

2. **Install dependencies:**
   ```sh
   bun install
   # OR
   npm install
   ```

3. **Start the development server:**
   ```sh
   bun run dev
   # OR
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

## Building for Production

```sh
bun run build
# OR
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Changing Content

Most content is defined directly in the component files. To update your information:

- **Personal Info**: Edit the `About.tsx` and `Hero.tsx` components
- **Work Experience**: Update the arrays in `Projects.tsx`
- **Skills**: Modify the skills arrays in `Skills.tsx`
- **Education**: Update the education information in `Education.tsx`
- **Contact**: Change contact details in `Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. Custom colors and themes are defined in:

- `tailwind.config.ts` - Theme configuration
- `App.css` - Global styles and animations

## Deployment

This portfolio site can be deployed to any static site hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## License

[MIT](LICENSE)

## Acknowledgments

- Icons: [Lucide Icons](https://lucide.dev/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Fonts: [Geist Mono](https://vercel.com/font)
