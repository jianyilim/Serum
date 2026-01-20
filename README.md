# 🧪 Serum | AI UI Prompt Generator

Serum is a sophisticated tool designed to help designers and developers generate highly detailed, professional-grade UI design prompts for AI tools (like Midjourney, v0, Bolt, or ChatGPT). It allows for granular control over typography, visual aesthetics, and theme preferences, providing a real-time "Live Canvas" preview of the design system.

![Serum UI Concept](https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

-   **🔠 Rich Typography Builder**: Granular control over typeface families (Sans, Serif, Mono, Display, Grotesque), font sizes, weights, and letter-spacing.
-   **🎨 Aesthetic Selection**: Choose from modern design styles like Glassmorphism, Clean/Minimalist, Brutalist, and Neumorphism.
-   **🌓 Theme Management**: Toggle between Light, Dark, and Adaptive themes with dynamic color adjustments.
-   **👁️ Live Canvas**: A simulated browser view that updates in real-time as you tweak your design system configuration.
-   **⚡ Prompt Generation**: One-click generation of a comprehensive design directive that follows professional UI/UX best practices (60-30-10 rule, accessibility).
-   **📦 Tailwind v4 & PostCSS**: Uses the latest Tailwind CSS v4 build process for optimized, minified styles.

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (for Tailwind CSS build process)
-   Any modern web browser

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
   npx @tailwindcss/cli -i ./input.css -o ./output.css --minify
   ```

4. Open `index.html` in your browser.

## 🛠️ Tech Stack

-   **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS v4
-   **Icons**: [Lucide Icons](https://lucide.dev/)
-   **Fonts**: Google Fonts (Inter, Bricolage Grotesque, etc.)
-   **Build Tool**: CSS-First Tailwind CLI

## 📖 Usage

1.  **Configure**: Use the left sidebar to select your preferred aesthetics and typography.
2.  **Preview**: Observe the "Live Canvas" on the right to see how your choices affect heading hierarchy and body readability.
3.  **Generate**: Click the **Generate** button to produce the design prompt.
4.  **Copy**: Click **Copy Prompt** and paste it into your favorite AI design assistant.

---

*Built with precision for the next generation of AI-driven design workflows.*
