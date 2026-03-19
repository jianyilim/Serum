# 🧪 Serum | AI UI Prompt Generator (v1.2)

Serum is a professional-grade tool designed to help designers and developers generate highly detailed, technical UI design prompts for AI tools (like Midjourney, v0, Bolt, or ChatGPT). It provides granular control over design systems, typography, and motion, with a real-time "Live Canvas" for instant feedback.

![Serum UI Concept](https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Latest Features (v1.2)

### 🚀 Quick Start Presets
Auto-configure your entire design system with one click using curated presets:
- **Modern Business**: Professional, Inter-based, clean blue accents.
- **Editorial Blog**: Sophisticated Serif pairing (Playfair + Merriweather).
- **Tech Startup / SaaS**: Bold Grotesque typography with Glassmorphism.
- **E-commerce Store**: Mobile-first, accessible, product-focused layouts.
- **Creative Portfolio**: Brutalist aesthetics with dramatic shadows.
- **Gaming Community**: Immersive Neumorphism with vibrant accents.

### 🎨 Advanced Styling Builder
- **8 Visual Styles**: Glassmorphism, Neumorphism, Claymorphism, Brutalist, Material, Flat, Outline, and Minimalist.
- **Curated Color Palettes**: 8 professional schemes (Modern, Vibrant, Earth, Monochrome, Nature, Ocean, Sunset, Pastel).
- **Shadow Depth hierarchy**: Granular control from 'None' to '2XL' depth.
- **Device Target Optimization**: Tailor prompts for Desktop, Tablet, or Mobile viewports.

### 🔠 Precision Typography Builder
- **Font Pairing Strategies**: Built-in logic for Classic, Modern, and Editorial pairings.
- **Expanded Typeface Families**: Sans, Serif, Monospace, Display, and Grotesque.
- **Granular Size Scales**: Independent control for Headings, Subheadings, and Body text.
- **Micro-Typography Control**: Adjustable weights and letter spacing (including dedicated ALL CAPS spacing).

### 📐 Layout Prompt Builder
Construct complex structural directives with:
- **Layout Types**: Responsive, List, Grid, Bento Box, or Custom.
- **Content Purpose**: Optimized for Websites, Products, Dashboards, Articles, or Portfolios.
- **Feature Selection**: Toggle specific elements like Navigation, Hero sections, Cards, Tabs, Sidebars, and more.

### 🎭 Animation & Motion Builder
Add polish to your prompts with technical motion specs:
- **Intensity Levels**: Minimal, Subtle, or Expressive.
- **Component Motion**: Card hover effects (Scale, 3D Tilt, Flip) and Button interactions (Ripple, Pulse, Icon Slide).
- **Entrance Effects**: Fade Up, Slide In, or Staggered appearances.
- **Technical Easing**: Linear, Ease-Out, Ease-In-Out, or elastic Spring timing.
- **Speed Control**: Fast (150ms) to Slow (600ms) durations.

### 👁️ Live Canvas v1.2
A simulated browser environment that updates in real-time as you tweak your configuration, showing exactly how your typography and colors harmonized.

### 🧵 Stitch UI Generation
Generate real, interactive web components from your prompts using the Stitch API:
- **Instant Generation**: Click 'Generate' when enabled to turn your prompt into code.
- **Side-by-Side Preview**: View the generated UI in a live iframe alongside the design prompt.
- **Code Access**: Copy the generated HTML directly for use in your projects.
- **Device Targeted**: Optimizes code generation based on your selected device target.


---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (for Tailwind CSS v4 build process)
- Any modern web browser

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd Serum
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the CSS locally:
   ```bash
   npm run dev 
   # or
   npx @tailwindcss/cli -i ./input.css -o ./output.css --minify
   ```
4. Open `index.html` in your browser.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS v4
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: Google Fonts (Inter, Bricolage Grotesque, Playfair Display, etc.)
- **Build Tool**: PostCSS + Tailwind v4 CLI

## 📖 Usage
1. **Presets**: Use 'Quick Start' to establish a baseline.
2. **Refine**: Customize via the Styling, Typography, Layout, and Animation builders.
3. **Preview**: Watch the 'Live Canvas' for real-time visual feedback.
4. **Generate**: Produce your professional AI prompt and copy it with one click.

---

*Built for precision. Empowering the next generation of AI-driven design workflows.*

