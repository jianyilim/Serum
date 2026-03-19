// Serum Logic

// Color Palette Data (from styling.md)
const colors = [
    { name: 'Blue', hex: '#3B82F6', tailwind: 'blue' },
    { name: 'Red', hex: '#EF4444', tailwind: 'red' },
    { name: 'Green', hex: '#22C55E', tailwind: 'green' },
    { name: 'Yellow', hex: '#EAB308', tailwind: 'yellow' },
    { name: 'Purple', hex: '#A855F7', tailwind: 'purple' },
    { name: 'Pink', hex: '#EC4899', tailwind: 'pink' },
    { name: 'Indigo', hex: '#6366F1', tailwind: 'indigo' },
    { name: 'Gray', hex: '#6B7280', tailwind: 'gray' },
    { name: 'Orange', hex: '#F97316', tailwind: 'orange' },
    { name: 'Teal', hex: '#14B8A6', tailwind: 'teal' },
    { name: 'Cyan', hex: '#06B6D4', tailwind: 'cyan' },
    { name: 'Emerald', hex: '#10B981', tailwind: 'emerald' },
    { name: 'Lime', hex: '#84CC16', tailwind: 'lime' },
    { name: 'Amber', hex: '#F59E0B', tailwind: 'amber' },
    { name: 'Rose', hex: '#F43F5E', tailwind: 'rose' },
    { name: 'Violet', hex: '#8B5CF6', tailwind: 'violet' },
    { name: 'Fuchsia', hex: '#D946EF', tailwind: 'fuchsia' },
    { name: 'Sky', hex: '#0EA5E9', tailwind: 'sky' },
    { name: 'Slate', hex: '#64748B', tailwind: 'slate' },
    { name: 'Zinc', hex: '#71717A', tailwind: 'zinc' },
];

const palettes = {
    modern: {
        name: "Modern",
        colors: ["#3B82F6", "#F3F4F6", "#1F2937"],
        desc: "Blue, Gray, Dark",
        prompt: "Use the modern palette for a clean, professional appearance with supporting colors of gray-100, gray-800, and blue-600."
    },
    vibrant: {
        name: "Vibrant",
        colors: ["#F472B6", "#FACC15", "#60A5FA"],
        desc: "Pink, Yellow, Blue",
        prompt: "Use the vibrant palette for creative energy with supporting colors including purple-500, pink-400, yellow-400, and green-400."
    },
    earth: {
        name: "Earth",
        colors: ["#D97706", "#F97316", "#15803D"],
        desc: "Amber, Orange, Green",
        prompt: "Use the earth palette for warmth and natural feel with supporting colors including amber-600, orange-500, and green-700."
    },
    monochrome: {
        name: "Monochrome",
        colors: ["#111827", "#6B7280", "#D1D5DB"],
        desc: "Black, Gray, Light Gray",
        prompt: "Use the monochrome palette for elegant simplicity with supporting colors of gray-900, gray-700, gray-500, and gray-300."
    },
    nature: {
        name: "Nature",
        colors: ["#166534", "#A16207", "#FEF3C7"],
        desc: "Forest Green, Wood, Cream",
        prompt: "Use the nature palette for an organic, grounded feel with supporting colors including forest green, wood brown, and soft cream."
    },
    ocean: {
        name: "Ocean",
        colors: ["#0E7490", "#06B6D4", "#E0F2FE"],
        desc: "Deep Teal, Cyan, Light Blue",
        prompt: "Use the ocean palette for a calming, aquatic atmosphere with supporting colors including deep teal, bright cyan, and light blue."
    },
    sunset: {
        name: "Sunset",
        colors: ["#7C3AED", "#DB2777", "#F97316"],
        desc: "Violet, Pink, Orange",
        prompt: "Use the sunset palette for a warm, dramatic effect with supporting colors including violet, vibrant pink, and orange."
    },
    pastel: {
        name: "Pastel",
        colors: ["#F9A8D4", "#FDE047", "#A5F3FC"],
        desc: "Soft Pink, Yellow, Mint",
        prompt: "Use the pastel palette for a soft, playful aesthetic with supporting colors including soft pink, light yellow, and mint green."
    },
    technical: {
        name: "Technical",
        colors: ["#10B981", "#0F172A", "#334155"],
        desc: "Emerald, Dark, Slate",
        prompt: "Use the technical palette for a high-precision look with supporting colors including emerald-500, slate-900, and slate-700."
    }
};

const visualStyles = {
    glassmorphism: "Ensure a Glassmorphism aesthetic. Use translucent backgrounds with backdrop-filter blur to create depth and hierarchy. Maintain a clean, premium look with subtle white borders and soft shadows.",
    clean: "Focus on a Clean and Minimalist design. Use ample white space, clear typography, and a restrained color palette to maximize content readability and reduce cognitive load.",
    flat: "Apply Flat Design principles. Use solid, vibrant colors without gradients or shadows. Focus on crisp edges and two-dimensional elements for a modern, fast-loading interface.",
    outline: "Use an Outline design style. Transparent backgrounds with visible borders. Focus on crisp lines and structural hierarchy to create a modern, airy interface.",
    material: "Follow Material Design guidelines. Use elevation (shadows) to convey hierarchy and depth. Implement ripple effects for interactions and stick to standard grid layouts.",
    brutalist: "Use a Brutalist design style. Employ bold, raw, and geometric elements. Use high-contrast borders, monospaced fonts, and non-traditional layouts to create a striking, artistic impact.",
    neumorphism: "Implement Neumorphism (Soft UI). Create elements that appear to be extruded from the background using soft, multiple shadows (light and dark) to create a tactile, plastic-like feel.",
    claymorphism: "Apply Claymorphism (Clay UI). Create a friendly, 3D extruded look using inflated rounded shapes, soft inner shadows, and vibrant pastel colors. Elements should look tactile and squishy.",
    technical: "Adopt a Technical / Developer-focused aesthetic. Use monospace fonts, dark terminals, code blocks, and high-contrast accent colors (like neon green or cyan). Emphasize data density and precision."
};

const themes = {
    dark: "Use a Dark Theme. The background should be a deep neutral (e.g., #111827 or #000000) with lighter gray surface layers. Ensure text has high contrast (light gray/white) for readability.",
    light: "Use a Light Theme. The background should be white or very light gray (#F9FAFB). Use dark gray text for optimal readability and contrast.",
    hybrid: "Implement an Adaptive Theme that supports both Light and Dark modes based on user system preference (`prefers-color-scheme`). Ensure all colors and borders satisfy contrast ratios in both modes."
};

const typographyConfig = {
    families: {
        sans: "Sans-serif (Suggest one of: Inter, Geist, Manrope, Plus Jakarta Sans)",
        serif: "Serif (Suggest one of: Merriweather, IBM Plex Serif, Libre Baskerville)",
        mono: "Monospace (Suggest one of: Geist Mono, IBM Plex Mono, JetBrains Mono)",
        display: "Oswald",
        grotesque: "Bricolage Grotesque"
    },
    sizes: {
        heading: { small: "20-32px", medium: "32-40px", large: "60-80px" },
        subheading: { small: "16-20px", medium: "24-32px", large: "36-48px" },
        body: { small: "12-14px", medium: "14-16px", large: "20-24px" }
    },
    // Letter spacing recommendations based on family/size
    spacing: {
        heading: "-0.02em",
        body: "0em",
        caps: "0.05em"
    }
};;

const fontPairings = {
    none: {
        name: "None",
        fonts: "Single Typeface",
        prompt: ""
    },
    classic: {
        name: "Serif + Sans-Serif",
        fonts: "Playfair Display + Inter",
        prompt: "### Font Pairing: Classic\n- **Headings**: **Playfair Display** (Serif). Use for a dramatic, elegant contrast.\n- **Body**: **Inter** (Sans-Serif). Clean readability.\n- **Usage**: Set headings to large sizes (e.g., 64px) for high contrast against 16px body text."
    },
    modern: {
        name: "Sans-Serif + Sans-Serif",
        fonts: "Bricolage Grotesque + Inter",
        prompt: "### Font Pairing: Modern\n- **Headings**: **Bricolage Grotesque** (Grotesque Sans). Distinctive personality, use 600+ weight.\n- **Body**: **Inter** (Sans). Cohesive modern look.\n- **Usage**: Rely on weight contrast rather than font style contrast."
    },
    editorial: {
        name: "Serif + Serif",
        fonts: "Merriweather + IBM Plex Serif",
        prompt: "### Font Pairing: Editorial\n- **Headings**: **Merriweather** (Serif). Sophisticated and scholarly.\n- **Body**: **IBM Plex Serif** (Serif). Great for longform content readability.\n- **Usage**: Create a refined, blog-like or academic layout."
    }
};

// Project Type Presets - auto-configures both typography and styling
const projectPresets = {
    business: {
        name: "Modern Business",
        icon: "briefcase",
        tagline: "Professional & Clean",
        description: "Inter-based typography with clean modern feel.",
        headingFont: "Inter Bold",
        bodyFont: "Inter Regular",
        // Styling Settings
        style: "clean",
        theme: "light",
        color: "#3B82F6",
        palette: "modern",
        shadow: "large",
        shadow: "large",
        device: "desktop",
        layout: { type: 'responsive', purpose: 'website', features: ['navigation', 'hero', 'footer'] },
        // Typography Settings
        fontPairing: "none",
        typeFamily: "sans",
        sizeHeading: "large",
        sizeSubheading: "medium",
        sizeBody: "medium",
        weightHeading: "700",
        weightSubheading: "600",
        weightBody: "400",
        spacingHeading: "-0.02em",
        spacingBody: "0em",
        spacingCaps: "0.02em",
        // Specific Requirements
        specificRequirements: "Ensure the design is professional, accessible with WCAG AA compliance, and follows current UI/UX best practices with proper contrast ratios and responsive behavior. Include subtle micro-interactions and smooth transitions between states.",
        // Animation Settings
        animation: { intensity: 'subtle', card: '', button: '', entrance: 'fade-up', easing: 'ease-out', duration: 'normal' }
    },
    editorial: {
        name: "Editorial Blog",
        icon: "book-open",
        tagline: "Elegant & Readable",
        description: "Playfair + Merriweather for longform content.",
        headingFont: "Playfair Display",
        bodyFont: "Merriweather",
        // Styling Settings
        style: "clean",
        theme: "light",
        color: "#6B7280",
        palette: "monochrome",
        shadow: "small",
        shadow: "small",
        device: "desktop",
        shadow: "small",
        layout: { type: 'list', purpose: 'article', features: ['navigation', 'sidebar', 'footer'] },
        // Typography Settings
        fontPairing: "classic",
        typeFamily: "serif",
        sizeHeading: "large",
        sizeSubheading: "large",
        sizeBody: "large",
        weightHeading: "700",
        weightSubheading: "600",
        weightBody: "400",
        spacingHeading: "-0.02em",
        spacingBody: "0em",
        spacingCaps: "0.05em",
        // Specific Requirements
        specificRequirements: "Ensure the design prioritizes content readability with excellent typography hierarchy, generous white space, and WCAG AAA contrast compliance. Focus on clean lines, ample spacing, and distraction-free reading experience with subtle interactive elements. Use a max-width of 680px for text containers to improve readability.",
        // Animation Settings
        animation: { intensity: 'minimal', card: '', button: '', entrance: 'none', easing: 'ease-in-out', duration: 'normal' }
    },
    saas: {
        name: "Tech Startup / SaaS",
        icon: "rocket",
        tagline: "Bold & Dynamic",
        description: "Bricolage Grotesque + Inter for modern SaaS.",
        headingFont: "Bricolage Grotesque",
        bodyFont: "Inter",
        // Styling Settings
        style: "glassmorphism",
        theme: "auto",
        color: "#3B82F6",
        palette: "modern",
        shadow: "large",
        shadow: "large",
        device: "desktop",
        shadow: "large",
        device: "desktop",
        layout: { type: 'dashboard', purpose: 'dashboard', features: ['sidebar', 'navigation', 'cards'] },
        // Typography Settings
        fontPairing: "modern",
        typeFamily: "grotesque",
        sizeHeading: "large",
        sizeSubheading: "medium",
        sizeBody: "medium",
        weightHeading: "700",
        weightSubheading: "600",
        weightBody: "400",
        spacingHeading: "-0.05em",
        spacingBody: "0em",
        spacingCaps: "0.02em",
        // Specific Requirements
        specificRequirements: "Create a modern SaaS application with glassmorphism design using an adaptive theme that responds to system preferences. Ensure the design is professional, accessible with WCAG AA compliance, and follows current UI/UX best practices with proper contrast ratios and responsive behavior. Include subtle micro-interactions and smooth transitions between states. Use vibrant blue (#3B82F6) for interactive elements.",
        // Animation Settings
        animation: { intensity: 'subtle', card: 'staggered', button: 'scale-color', entrance: 'fade-up', easing: 'spring', duration: 'normal' }
    },
    ecommerce: {
        name: "E-commerce Store",
        icon: "shopping-bag",
        tagline: "Clean & Accessible",
        description: "Plus Jakarta Sans for product-focused layouts.",
        headingFont: "Plus Jakarta Sans",
        bodyFont: "Plus Jakarta Sans",
        // Styling Settings
        style: "flat",
        theme: "light",
        color: "#10B981",
        palette: "earth",
        shadow: "medium",
        shadow: "medium",
        device: "mobile",
        shadow: "medium",
        device: "mobile",
        layout: { type: 'grid', purpose: 'product', features: ['navigation', 'gallery', 'tabs', 'cards'] },
        // Typography Settings
        fontPairing: "none",
        typeFamily: "sans",
        sizeHeading: "medium",
        sizeSubheading: "small",
        sizeBody: "medium",
        weightHeading: "700",
        weightSubheading: "600",
        weightBody: "400",
        spacingHeading: "0em",
        spacingBody: "0em",
        spacingCaps: "0.02em",
        // Specific Requirements
        specificRequirements: "Design a mobile-first app interface with iOS-style design using rounded corners. Ensure the design feels native with proper spacing, readable typography, and accessible color contrast ratios above 4.5:1. Include loading states, error handling, and success feedback with appropriate semantic colors. Use large touch targets (44px minimum) and thumb-friendly navigation.",
        // Animation Settings
        animation: { intensity: 'subtle', card: 'hover-scale', button: 'ripple', entrance: 'slide-in', easing: 'ease-out', duration: 'fast' }
    },
    portfolio: {
        name: "Creative Portfolio",
        icon: "palette",
        tagline: "Artistic & Bold",
        description: "Brutalist design with dramatic typography.",
        headingFont: "Oswald",
        bodyFont: "Inter",
        // Styling Settings
        style: "brutalist",
        theme: "dark",
        color: "#8B5CF6",
        palette: "vibrant",
        shadow: "2xl",
        shadow: "2xl",
        device: "desktop",
        shadow: "2xl",
        device: "desktop",
        layout: { type: 'bento', purpose: 'portfolio', features: ['gallery', 'animations'] },
        // Typography Settings
        fontPairing: "none",
        typeFamily: "display",
        sizeHeading: "large",
        sizeSubheading: "medium",
        sizeBody: "medium",
        weightHeading: "700",
        weightSubheading: "500",
        weightBody: "400",
        spacingHeading: "-0.02em",
        spacingBody: "0.01em",
        spacingCaps: "0.1em",
        // Specific Requirements
        specificRequirements: "Ensure the design is memorable and artistic while maintaining basic accessibility standards. Include bold typography, asymmetrical layouts, and striking visual elements that showcase creative work effectively. Use dramatic extra-large shadows for maximum visual impact and artistic flair.",
        // Animation Settings
        animation: { intensity: 'expressive', card: 'tilt', button: 'pulse', entrance: 'fade-up', easing: 'spring', duration: 'slow' }
    },
    gaming: {
        name: "Gaming Community",
        icon: "gamepad-2",
        tagline: "Energetic & Immersive",
        description: "Neumorphic design with vibrant accents.",
        headingFont: "Oswald",
        bodyFont: "Inter",
        // Styling Settings
        style: "neumorphism",
        theme: "dark",
        color: "#F97316",
        palette: "vibrant",
        shadow: "small",
        shadow: "small",
        device: "desktop",
        layout: { type: 'custom', purpose: 'website', features: ['animations', 'hero'] },
        // Typography Settings
        fontPairing: "none",
        typeFamily: "display",
        sizeHeading: "large",
        sizeSubheading: "medium",
        sizeBody: "medium",
        weightHeading: "700",
        weightSubheading: "600",
        weightBody: "400",
        spacingHeading: "0em",
        spacingBody: "0em",
        spacingCaps: "0.05em",
        // Specific Requirements
        specificRequirements: "Design a platform with neumorphic design using soft, extruded plastic-like appearance for a tactile, engaging feel. Ensure the design appeals to audiences with high contrast for visibility, customizable themes, and engaging visual feedback. Include animated elements, achievement displays, and community features that enhance the experience.",
        // Animation Settings
        animation: { intensity: 'expressive', card: 'staggered', button: 'ripple', entrance: 'slide-in', easing: 'spring', duration: 'normal' }
    }
};

// Layout & Animation (General Best Practices to append)
const layoutGuide = "Layout: Adopt a mobile-first approach. Start with single-column layouts for mobile (<640px) and expand to multi-column grids for tablet (768px) and desktop (1024px+). Use consistent spacing (multiples of 4px) and ensure touch targets are at least 44px.";

// Animation Builder Options (Comprehensive based on ui-guide)
const animationBuilderOptions = {
    intensity: {
        minimal: {
            name: "Minimal",
            prompt: "Use minimal animations. Keep motion subtle and restrained - only essential feedback animations. Prefer opacity transitions over movement. Respect users who prefer reduced motion."
        },
        subtle: {
            name: "Subtle",
            prompt: "Use subtle, refined micro-interactions. Animations should enhance without distracting. Use smooth transitions (200-300ms) with ease-out timing for natural feel. Include hover states and focus indicators."
        },
        expressive: {
            name: "Expressive",
            prompt: "Use expressive, dynamic animations. Include dramatic entrance effects, playful hover states, and creative transitions. Longer durations (400-600ms) acceptable for impact. Use spring-based easing for organic movement."
        }
    },
    cardAnimations: {
        "hover-scale": {
            name: "Hover Scale",
            prompt: "Add a hover effect to cards that scales them to 1.05x size with a subtle shadow increase. Use a smooth 300ms transition with ease-out timing. Shadow should deepen on hover (e.g., shadow-lg to shadow-xl)."
        },
        tilt: {
            name: "3D Tilt",
            prompt: "Create a 3D tilt effect for cards that responds to cursor position. Maximum rotation of 10 degrees on both axes. Add a subtle shadow that shifts with the tilt angle. Include perspective parent container."
        },
        staggered: {
            name: "Staggered Entrance",
            prompt: "Implement a staggered entrance animation for cards. Each card fades in (opacity 0→1) and moves up (translateY 20px→0) with a 100ms delay between each card. Use ease-out timing function."
        },
        flip: {
            name: "Flip Card",
            prompt: "Create flip cards that rotate 180 degrees on Y-axis on hover to reveal back-side content. Use backface-visibility: hidden and transform-style: preserve-3d. Smooth 600ms transition."
        }
    },
    buttonAnimations: {
        "scale-color": {
            name: "Scale & Color",
            prompt: "Create buttons that scale to 1.05x and shift to a lighter/darker shade on hover (e.g., blue-500 to blue-600). Include a slight translateY(-2px) lift effect. Use 250ms transition duration."
        },
        ripple: {
            name: "Ripple",
            prompt: "Add a Material Design-inspired ripple effect. On click, a circular gradient expands from the click point outward with a subtle fade-out. Use radial-gradient and scale transform."
        },
        "icon-slide": {
            name: "Icon Slide",
            prompt: "Create buttons where text slides left and an arrow icon appears from the right on hover. Use overflow: hidden and transform: translateX() for smooth slide. 300ms transition."
        },
        pulse: {
            name: "Pulse",
            prompt: "Add a pulsing glow effect around CTA buttons. Use box-shadow with keyframe animation that expands (scale 1→1.2) and fades (opacity 1→0) repeatedly. Draw attention to important actions."
        }
    },
    entranceAnimations: {
        none: {
            name: "None",
            prompt: "No page entrance animations. Content appears immediately on load for fastest perceived performance."
        },
        "fade-up": {
            name: "Fade Up",
            prompt: "Elements fade in while moving up on page load. Start with opacity: 0 and translateY(20px), animate to opacity: 1 and translateY(0). Stagger children with 50-100ms delays. Use ease-out timing."
        },
        "slide-in": {
            name: "Slide In",
            prompt: "Elements slide in from the sides on page load. Use translateX(-100px) or translateX(100px) as starting position. Alternate slide direction for visual interest. 400-600ms duration."
        }
    },
    easing: {
        linear: {
            name: "Linear",
            css: "linear",
            prompt: "Use linear timing function for constant speed animations. Best for looping animations or progress indicators."
        },
        "ease-out": {
            name: "Ease Out",
            css: "ease-out",
            prompt: "Use ease-out timing (cubic-bezier(0, 0, 0.58, 1)). Animations start fast and slow down at the end. Best for elements entering the view - feels natural and quick."
        },
        "ease-in-out": {
            name: "Ease In-Out",
            css: "ease-in-out",
            prompt: "Use ease-in-out timing (cubic-bezier(0.42, 0, 0.58, 1)). Smooth acceleration and deceleration. Best for elements moving on-screen or state transitions."
        },
        spring: {
            name: "Spring",
            css: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            prompt: "Use spring-based easing (cubic-bezier(0.34, 1.56, 0.64, 1)). Creates an elastic overshoot effect. Best for playful interfaces and attention-grabbing interactions."
        }
    },
    duration: {
        fast: {
            name: "Fast",
            range: "150-200ms",
            prompt: "Use fast durations (150-200ms). Best for micro-interactions, button hovers, and tooltip appearances. Feels snappy and responsive."
        },
        normal: {
            name: "Normal",
            range: "250-350ms",
            prompt: "Use standard durations (250-350ms). Balanced speed for most UI animations. Good for card hovers, dropdown menus, and modal appearances."
        },
        slow: {
            name: "Slow",
            range: "400-600ms",
            prompt: "Use slower durations (400-600ms). Best for page transitions, dramatic emphasis, and complex multi-step animations. Feel deliberate and cinematic."
        }
    }
};

// Fallback simple animation guide for when no specific selections are made
const animationGuide = "Animation: Implement subtle micro-interactions. Use 'transform' and 'opacity' for distinct hover states (e.g., scale 1.05x). Add staggered entrance animations for lists and cards using ease-out timing.";

const professionalRules = `
**Professional UI/UX Standards (Critical)**
- **Icons**: Use SVG icons (e.g., Lucide, Heroicons) with consistent 24x24 sizing (w-6 h-6). **NEVER use emojis as icons**.
- **Interaction Design**: 
  - Add \`cursor-pointer\` to ALL clickable elements (cards, list items, buttons).
  - Use \`transition-all duration-200\` for smooth state changes.
  - Ensure hover states (scale, color) do NOT cause layout shifts.
- **Visual Polish**:
  - Use specific brand colors (e.g., \`bg-blue-600\`) rather than raw hex values where possible.
  - Light Mode: Use \`slate-900\` for headings, \`slate-600\` for body. Avoid pure black.
  - Dark Mode: Use \`slate-900\` or \`zinc-950\` backgrounds. Text should be \`slate-200\` (not pure white) for less eye strain.
  - Glassmorphism: In light mode, use \`bg-white/80\` or higher opacity to ensure text legibility.
- **Layout & Spacing**:
  - Use \`max-w-7xl\` or \`container mx-auto\` for consistent page width.
  - Ensure floating elements (navbars) have proper spacing from edges (\`top-4 left-4 right-4\`).
`;

// Layout Builder Options
const layoutBuilderOptions = {
    types: {
        responsive: "Create a fully responsive layout that adapts fluidly to all screen sizes. Use a mobile-first approach, starting with a single-column layout for small screens (<640px) and expanding to complex multi-column grids for tablets (768px+) and desktops (1024px+).",
        list: "Design a clean list-based layout focused on vertical scanning. Present content in consistent rows or cards, optimized for readability and quick comparisons. Ensure clear separation between items using borders or whitespace.",
        grid: "Implement a structured grid layout. Content should be organized in a modular grid system (e.g., 12-column) allowing for flexible arrangement of cards or media elements. Maintain consistent gutters and alignment.",
        bento: "Create a 'Bento Box' style layout. Use a grid of modular, varying-sized container boxes (rectangular and square) to present different types of content in a unified, visually interesting way. Use rounded corners and consistent gaps.",
        custom: "Design a unique, custom layout structure that breaks away from standard patterns. Focus on creative placement of elements, asymmetry, or overlapping layers to create a distinct visual identity."
    },
    purposes: {
        website: "Structure the design as a complete website page. Include a header, navigation, main hero section, content features, and a footer.",
        product: "Focus the layout on showcasing a product. Highlight product imagery (gallery), key features, pricing, and a prominent call-to-action.",
        dashboard: "Organize the layout as a functional dashboard. distinct areas for navigation (sidebar/topbar), data visualization (charts/stats), and activity feeds.",
        article: "Optimize the layout for long-form reading. Prioritize typography, line length (60-75 chars), and comfortable whitespace. Minimize distractions.",
        portfolio: "Showcase creative work visually. Prioritize large media/project thumbnails and minimal text. Allow the work to stand out.",
        mobile: "Design specifically for a mobile app screen context. layout logic should fit within a compact vertical viewport, utilizing standard mobile navigation patterns (tab bar, bottom sheet)."
    },
    features: {
        navigation: "Include a clear, responsive navigation menu (hamburger on mobile).",
        hero: "Add a prominent Hero section at the top with headline, subheadline, and primary visual.",
        cards: "Use card-based components to group related content chunks.",
        footer: "Include a comprehensive footer area with links, copyright, and social icons.",
        sidebar: "Implement a sidebar element (collapsible on mobile) for navigation or filters.",
        tabs: "Use tabbed interfaces to organize content without leaving the context.",
        gallery: "Integrate an image gallery or carousel component.",
        forms: "Include input forms (e.g., newsletter, contact, search) with proper validation states.",
        animations: "Integrate subtle micro-interactions and entrance animations for a dynamic feel."
    }
};

// Map config keys to actual CSS values
const cssMapping = {
    fonts: {
        sans: "'Inter', sans-serif",
        serif: "'Playfair Display', serif",
        mono: "'JetBrains Mono', monospace",
        display: "'Oswald', sans-serif",
        grotesque: "'Bricolage Grotesque', sans-serif"
    },
    sizes: {
        heading: { small: "24px", medium: "36px", large: "64px" },
        subheading: { small: "18px", medium: "24px", large: "36px" },
        body: { small: "13px", medium: "15px", large: "18px" }
    }
};

// Content for Preview (Dynamic updating based on Purpose)
const previewContent = {
    website: {
        tag: "New Feature",
        heading: "Making the world a better place through design.",
        subheading: "Create stunning interfaces with AI-powered prompts.",
        body: "Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.",
        button: "GET STARTED"
    },
    product: {
        tag: "New Release",
        heading: "The Future of Productivity is Here.",
        subheading: "Experience the ultimate workflow tool designed for professionals.",
        body: "Boost your team's efficiency with our intuitive platform. Seamlessly integrate with your favorite tools and automate repetitive tasks. Join thousands of teams who have already transformed their workflow.",
        button: "PRE-ORDER NOW"
    },
    dashboard: {
        tag: "Analytics",
        heading: "Monthly Performance Overview",
        subheading: "Track your key metrics in real-time.",
        body: "Your user engagement has increased by 12% this week. Review the detailed breakdown below to see what's driving growth across your primary acquisition channels. Data is refreshed every 15 minutes.",
        button: "VIEW REPORT"
    },
    article: {
        tag: "Design",
        heading: "The Principles of Modern UI Design",
        subheading: "How usage of whitespace creates clarity.",
        body: "In this article, we explore the fundamental concepts of whitespace, contrast, and typography hierarchy that define modern digital products. Learn how to guide user attention effectively using negative space and visual weight.",
        button: "READ MORE"
    },
    portfolio: {
        tag: "Case Study",
        heading: "Reimagining the Digital Experience",
        subheading: "A deep dive into the Serum Project.",
        body: "Explore how we transformed a simple prompt generator into a full-fledged design system builder using modern web technologies. We faced significant challenges in state management and solved them with innovative patterns.",
        button: "VIEW PROJECT"
    },
    mobile: {
        tag: "Onboarding",
        heading: "Welcome to Serum",
        subheading: "Your personal AI design assistant.",
        body: "Swipe through to see how Serum can help you generate beautiful UI prompts in seconds. Let's get started with a quick tour of the features.",
        button: "CONTINUE"
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPresetPicker(); // Initialize project type presets
    initLayoutBuilder(); // Initialize new layout prompt builder
    initAnimationBuilder(); // Initialize animation builder
    initColorPicker();
    initCustomSelectors(); // Initialize custom card selectors
    initCollapsibles(); // Initialize collapsible sections
    initAnimations(); // Initialize staggered animations
    initAppTheme(); // Initialize app-wide dark mode toggle
    initSidebarCollapse(); // Initialize sidebar collapse toggle

    document.getElementById('regenerate-btn').addEventListener('click', generatePrompt);
    document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

    // Real-time Preview Listeners (Standard inputs)
    const inputs = document.querySelectorAll('select, input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Initial Trigger
    updatePreview();

    // Stitch UI Wiring
    const toggleStitch = document.getElementById('toggle-stitch');
    const contentStitch = document.getElementById('content-stitch');
    const iconStitch = document.getElementById('icon-stitch');
    const stitchEnabled = document.getElementById('stitch-enabled');
    const stitchApiKey = document.getElementById('stitch-api-key');

    // Load persisted API key
    if (localStorage.getItem('stitch-api-key')) {
        stitchApiKey.value = localStorage.getItem('stitch-api-key');
    }

    // Persist API key on change
    stitchApiKey.addEventListener('input', (e) => {
        localStorage.setItem('stitch-api-key', e.target.value);
    });

    toggleStitch.addEventListener('click', () => {
        const isHidden = contentStitch.classList.contains('hidden');
        contentStitch.classList.toggle('hidden');
        iconStitch.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(-90deg)';
    });

    // Stitch Tab Switching
    const stitchTabs = document.querySelectorAll('#stitch-tabs button');
    stitchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            // Update buttons
            stitchTabs.forEach(t => {
                t.classList.remove('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm');
                t.classList.add('text-gray-500', 'dark:text-gray-400', 'hover:text-gray-700', 'dark:hover:text-gray-200');
            });
            tab.classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white', 'shadow-sm');
            tab.classList.remove('text-gray-500', 'dark:text-gray-400', 'hover:text-gray-700', 'dark:hover:text-gray-200');

            // Update content
            document.getElementById('stitch-preview-tab').classList.toggle('hidden', target !== 'preview');
            document.getElementById('stitch-code-tab').classList.toggle('hidden', target !== 'code');
        });
    });

    // Code Copy
    document.getElementById('stitch-copy-code').addEventListener('click', () => {
        const code = document.getElementById('stitch-code-output').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = document.getElementById('stitch-copy-code');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-green-500"></i><span class="text-[10px] font-bold uppercase tracking-wider text-green-500">Copied!</span>';
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = originalText;
                lucide.createIcons();
            }, 2000);
        });
    });

    // Retry Button
    document.getElementById('stitch-retry-btn').addEventListener('click', generatePrompt);
});

// Initialize Layout Prompt Builder (New)
// Initialize Layout Prompt Builder (New)
function initLayoutBuilder() {
    const typeOptions = document.querySelectorAll('.layout-option[data-type="type"]');
    const purposeOptions = document.querySelectorAll('.layout-option[data-type="purpose"]');
    const featureOptions = document.querySelectorAll('.layout-option[data-type="feature"]');

    const typeInput = document.getElementById('layout-type');
    const purposeInput = document.getElementById('layout-purpose');
    const featuresInput = document.getElementById('layout-features');

    // Type Selection
    typeOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            typeInput.value = opt.dataset.value;
            updateLayoutBuilderVisuals();
        });
    });

    // Purpose Selection
    purposeOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            purposeInput.value = opt.dataset.value;
            updateLayoutBuilderVisuals();
        });
    });

    // Features Selection (Multi)
    featureOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const val = opt.dataset.value;
            let current = featuresInput.value ? featuresInput.value.split(',') : [];

            if (current.includes(val)) {
                current = current.filter(f => f !== val);
            } else {
                current.push(val);
            }

            featuresInput.value = current.join(',');
            updateLayoutBuilderVisuals();
        });
    });

    // Initial State Update
    updateLayoutBuilderVisuals();
}

function updateLayoutBuilderVisuals() {
    const typeOptions = document.querySelectorAll('.layout-option[data-type="type"]');
    const purposeOptions = document.querySelectorAll('.layout-option[data-type="purpose"]');
    const featureOptions = document.querySelectorAll('.layout-option[data-type="feature"]');

    const typeVal = document.getElementById('layout-type').value;
    const purposeVal = document.getElementById('layout-purpose').value;
    const featuresVal = document.getElementById('layout-features').value ? document.getElementById('layout-features').value.split(',') : [];

    // Helper to update visual state
    const update = (options, selectedValue, isMulti = false) => {
        options.forEach(opt => {
            const val = opt.dataset.value;
            const isSelected = isMulti
                ? (selectedValue.includes(val))
                : (val === selectedValue);

            const iconWrapper = opt.querySelector('.rounded-full');
            const label = opt.querySelector('span');

            if (isSelected) {
                opt.classList.remove('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'hover:border-pink-500/50');
                opt.classList.add('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-sm');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                    iconWrapper.classList.add('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                }
                if (label) {
                    label.classList.remove('text-gray-700', 'dark:text-gray-400');
                    label.classList.add('text-pink-600', 'dark:text-pink-400');
                }
            } else {
                opt.classList.remove('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-sm');
                opt.classList.add('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'hover:border-pink-500/50');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                    iconWrapper.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                }
                if (label) {
                    label.classList.remove('text-pink-600', 'dark:text-pink-400');
                    label.classList.add('text-gray-700', 'dark:text-gray-400');
                }
            }
        });
    };

    update(typeOptions, typeVal);
    update(purposeOptions, purposeVal);
    update(featureOptions, featuresVal, true);
}

function getLayoutPrompt() {
    const type = document.getElementById('layout-type').value;
    const purpose = document.getElementById('layout-purpose').value;
    const features = document.getElementById('layout-features').value ? document.getElementById('layout-features').value.split(',') : [];

    let prompt = `Layout Strategy:\n`;

    if (layoutBuilderOptions.types[type]) {
        prompt += `${layoutBuilderOptions.types[type]}\n`;
    }

    if (layoutBuilderOptions.purposes[purpose]) {
        prompt += `\nContent Purpose:\n${layoutBuilderOptions.purposes[purpose]}\n`;
    }

    if (features.length > 0) {
        prompt += `\nKey Features to Implement:\n`;
        features.forEach(f => {
            if (layoutBuilderOptions.features[f]) {
                prompt += `- ${layoutBuilderOptions.features[f]}\n`;
            }
        });
    }

    return prompt.trim();
}

// Initialize Animation Builder
function initAnimationBuilder() {
    const intensityOptions = document.querySelectorAll('.animation-option[data-type="intensity"]');
    const cardOptions = document.querySelectorAll('.animation-option[data-type="card"]');
    const buttonOptions = document.querySelectorAll('.animation-option[data-type="button"]');
    const entranceOptions = document.querySelectorAll('.animation-option[data-type="entrance"]');
    const easingOptions = document.querySelectorAll('.animation-option[data-type="easing"]');
    const durationOptions = document.querySelectorAll('.animation-option[data-type="duration"]');

    const intensityInput = document.getElementById('animation-intensity');
    const cardInput = document.getElementById('animation-card');
    const buttonInput = document.getElementById('animation-button');
    const entranceInput = document.getElementById('animation-entrance');
    const easingInput = document.getElementById('animation-easing');
    const durationInput = document.getElementById('animation-duration');

    // Single-select handlers
    const setupSingleSelect = (options, input) => {
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                input.value = opt.dataset.value;
                updateAnimationBuilderVisuals();
            });
        });
    };

    // Multi-select handlers (for card and button - can select multiple)
    const setupMultiSelect = (options, input) => {
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                const val = opt.dataset.value;
                let current = input.value ? input.value.split(',') : [];

                if (current.includes(val)) {
                    current = current.filter(f => f !== val);
                } else {
                    current.push(val);
                }

                input.value = current.join(',');
                updateAnimationBuilderVisuals();
            });
        });
    };

    setupSingleSelect(intensityOptions, intensityInput);
    setupMultiSelect(cardOptions, cardInput);
    setupMultiSelect(buttonOptions, buttonInput);
    setupSingleSelect(entranceOptions, entranceInput);
    setupSingleSelect(easingOptions, easingInput);
    setupSingleSelect(durationOptions, durationInput);

    // Initial State Update
    updateAnimationBuilderVisuals();
}

function updateAnimationBuilderVisuals() {
    const intensityOptions = document.querySelectorAll('.animation-option[data-type="intensity"]');
    const cardOptions = document.querySelectorAll('.animation-option[data-type="card"]');
    const buttonOptions = document.querySelectorAll('.animation-option[data-type="button"]');
    const entranceOptions = document.querySelectorAll('.animation-option[data-type="entrance"]');
    const easingOptions = document.querySelectorAll('.animation-option[data-type="easing"]');
    const durationOptions = document.querySelectorAll('.animation-option[data-type="duration"]');

    const intensityVal = document.getElementById('animation-intensity')?.value || '';
    const cardVal = document.getElementById('animation-card')?.value ? document.getElementById('animation-card').value.split(',') : [];
    const buttonVal = document.getElementById('animation-button')?.value ? document.getElementById('animation-button').value.split(',') : [];
    const entranceVal = document.getElementById('animation-entrance')?.value || '';
    const easingVal = document.getElementById('animation-easing')?.value || '';
    const durationVal = document.getElementById('animation-duration')?.value || '';

    // Helper to update visual state
    const update = (options, selectedValue, isMulti = false) => {
        options.forEach(opt => {
            const val = opt.dataset.value;
            const isSelected = isMulti
                ? (selectedValue.includes(val))
                : (val === selectedValue);

            const iconWrapper = opt.querySelector('.rounded-full');
            const label = opt.querySelector('span');

            if (isSelected) {
                opt.classList.remove('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'hover:border-pink-500/50');
                opt.classList.add('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-sm');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                    iconWrapper.classList.add('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                }
                if (label) {
                    label.classList.remove('text-gray-700', 'dark:text-gray-400');
                    label.classList.add('text-pink-600', 'dark:text-pink-400');
                }
            } else {
                opt.classList.remove('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-sm');
                opt.classList.add('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'hover:border-pink-500/50');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                    iconWrapper.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                }
                if (label) {
                    label.classList.remove('text-pink-600', 'dark:text-pink-400');
                    label.classList.add('text-gray-700', 'dark:text-gray-400');
                }
            }
        });
    };

    update(intensityOptions, intensityVal);
    update(cardOptions, cardVal, true);
    update(buttonOptions, buttonVal, true);
    update(entranceOptions, entranceVal);
    update(easingOptions, easingVal);
    update(durationOptions, durationVal);
}

function getAnimationPrompt() {
    const intensity = document.getElementById('animation-intensity')?.value || 'subtle';
    const cardAnimations = document.getElementById('animation-card')?.value ? document.getElementById('animation-card').value.split(',').filter(Boolean) : [];
    const buttonAnimations = document.getElementById('animation-button')?.value ? document.getElementById('animation-button').value.split(',').filter(Boolean) : [];
    const entrance = document.getElementById('animation-entrance')?.value || 'fade-up';
    const easing = document.getElementById('animation-easing')?.value || 'ease-out';
    const duration = document.getElementById('animation-duration')?.value || 'normal';

    let prompt = `### Animation & Motion Design\n\n`;

    // Intensity
    if (animationBuilderOptions.intensity[intensity]) {
        prompt += `**Overall Animation Style:**\n${animationBuilderOptions.intensity[intensity].prompt}\n\n`;
    }

    // Card Animations
    if (cardAnimations.length > 0) {
        prompt += `**Card Animations:**\n`;
        cardAnimations.forEach(anim => {
            if (animationBuilderOptions.cardAnimations[anim]) {
                prompt += `- ${animationBuilderOptions.cardAnimations[anim].name}: ${animationBuilderOptions.cardAnimations[anim].prompt}\n`;
            }
        });
        prompt += `\n`;
    }

    // Button Animations
    if (buttonAnimations.length > 0) {
        prompt += `**Button Animations:**\n`;
        buttonAnimations.forEach(anim => {
            if (animationBuilderOptions.buttonAnimations[anim]) {
                prompt += `- ${animationBuilderOptions.buttonAnimations[anim].name}: ${animationBuilderOptions.buttonAnimations[anim].prompt}\n`;
            }
        });
        prompt += `\n`;
    }

    // Entrance Animations
    if (entrance !== 'none' && animationBuilderOptions.entranceAnimations[entrance]) {
        prompt += `**Page Entrance Animation:**\n${animationBuilderOptions.entranceAnimations[entrance].prompt}\n\n`;
    }

    // Timing
    prompt += `**Animation Timing:**\n`;
    if (animationBuilderOptions.easing[easing]) {
        prompt += `- Easing: ${animationBuilderOptions.easing[easing].prompt}\n`;
    }
    if (animationBuilderOptions.duration[duration]) {
        prompt += `- Duration: ${animationBuilderOptions.duration[duration].prompt}\n`;
    }

    // Performance best practices
    prompt += `\n**Performance Best Practices:**\n`;
    prompt += `- Animate only \`transform\` and \`opacity\` whenever possible.\n`;
    prompt += `- Avoid animating \`width\`, \`height\`, \`margin\`, or \`padding\` as they cause layout reflows.\n`;
    prompt += `- Use \`will-change\` sparingly for complex animations.\n`;
    prompt += `- Respect \`prefers-reduced-motion\` media query for accessibility.\n`;

    return prompt.trim();
}

// Initialize Project Preset Picker
function initPresetPicker() {
    const presetCards = document.querySelectorAll('.preset-card');
    presetCards.forEach(card => {
        card.addEventListener('click', () => {
            const presetKey = card.dataset.preset;
            if (presetKey && projectPresets[presetKey]) {
                applyPreset(presetKey);

                // Update visual state for preset cards
                presetCards.forEach(c => {
                    // Reset to inactive state (Dark Mode Support)
                    c.classList.remove('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-md', 'ring-2', 'ring-pink-500/30');
                    c.classList.add('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'shadow-sm');

                    const nameEl = c.querySelector('.preset-name');
                    const tagEl = c.querySelector('.preset-tag');
                    const descEl = c.querySelector('.preset-desc');
                    const icon = c.querySelector('.preset-icon');

                    if (nameEl) {
                        nameEl.classList.remove('text-pink-600', 'dark:text-pink-400');
                        nameEl.classList.add('text-gray-900', 'dark:text-gray-200');
                    }
                    if (tagEl) {
                        tagEl.classList.remove('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                        tagEl.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                    }
                    if (descEl) {
                        descEl.classList.remove('text-pink-500', 'dark:text-pink-400');
                        descEl.classList.add('text-gray-500', 'dark:text-gray-400');
                    }
                    if (icon) {
                        icon.classList.remove('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                        icon.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400');
                    }
                });

                // Set active state (Dark Mode Support)
                card.classList.remove('border-gray-200', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800', 'shadow-sm');
                card.classList.add('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-md', 'ring-2', 'ring-pink-500/30');

                const nameEl = card.querySelector('.preset-name');
                const tagEl = card.querySelector('.preset-tag');
                const descEl = card.querySelector('.preset-desc');
                const icon = card.querySelector('.preset-icon');

                if (nameEl) {
                    nameEl.classList.remove('text-gray-900', 'dark:text-gray-200');
                    nameEl.classList.add('text-pink-600', 'dark:text-pink-400');
                }
                if (tagEl) {
                    tagEl.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-500', 'dark:text-gray-400');
                    tagEl.classList.add('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                }
                if (descEl) {
                    descEl.classList.remove('text-gray-500', 'dark:text-gray-400');
                    descEl.classList.add('text-pink-500', 'dark:text-pink-400');
                }
                if (icon) {
                    icon.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400');
                    icon.classList.add('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                }
            }
        });
    });
}

// Apply a preset to all form fields
function applyPreset(presetKey) {
    const preset = projectPresets[presetKey];
    if (!preset) return;

    // Helper to update a field and trigger visual update
    const updateField = (fieldId, value) => {
        const input = document.getElementById(fieldId);
        if (input) {
            input.value = value;
            // Trigger click on the corresponding option card
            const group = document.querySelector(`[data-group="${fieldId}"]`);
            if (group) {
                const card = group.querySelector(`[data-value="${value}"]`);
                if (card) card.click();
            }
        }
    };

    // List of classes for normal vs active color buttons
    const activeClasses = ['border-gray-900', 'dark:border-white', 'shadow-lg', 'ring-2', 'ring-offset-2', 'ring-gray-400', 'dark:ring-gray-600', 'scale-110'];
    const normalClasses = ['border-gray-300', 'dark:border-neutral-600'];

    // Helper to update color picker
    const updateColor = (hex) => {
        const colorInput = document.getElementById('selected-color');
        if (colorInput) {
            colorInput.value = hex;
            const colorPicker = document.getElementById('color-picker');
            if (colorPicker) {
                const buttons = colorPicker.querySelectorAll('button');
                buttons.forEach(btn => {
                    // Reset all buttons
                    btn.classList.remove(...activeClasses);
                    btn.classList.add(...normalClasses);

                    // Match by data-color attribute
                    if (btn.dataset.color && btn.dataset.color.toUpperCase() === hex.toUpperCase()) {
                        btn.classList.remove(...normalClasses);
                        btn.classList.add(...activeClasses);
                    }
                });
            }
        }
    };

    // Apply Styling Settings
    updateField('visual-style', preset.style);
    updateField('theme-pref', preset.theme);
    updateColor(preset.color);
    updateField('color-palette', preset.palette);
    updateField('shadow-depth', preset.shadow);
    updateField('device-opt', preset.device);
    // updateField('selected-layout', preset.layout); <-- No longer simple field

    // Apply Layout Builder Settings
    if (preset.layout) {
        const typeInput = document.getElementById('layout-type');
        const purposeInput = document.getElementById('layout-purpose');
        const featuresInput = document.getElementById('layout-features');

        if (typeInput && preset.layout.type) typeInput.value = preset.layout.type;
        if (purposeInput && preset.layout.purpose) purposeInput.value = preset.layout.purpose;
        if (featuresInput && preset.layout.features) featuresInput.value = preset.layout.features.join(',');

        // Retrigger visuals
        // Retrigger visuals
        updateLayoutBuilderVisuals();
    }

    // Apply Typography Settings
    updateField('font-pairing', preset.fontPairing);
    updateField('type-family', preset.typeFamily);
    updateField('size-heading', preset.sizeHeading);
    updateField('size-subheading', preset.sizeSubheading);
    updateField('size-body', preset.sizeBody);
    updateField('weight-heading', preset.weightHeading);
    updateField('weight-subheading', preset.weightSubheading);
    updateField('weight-body', preset.weightBody);
    updateField('spacing-heading', preset.spacingHeading);
    updateField('spacing-body', preset.spacingBody);
    updateField('spacing-caps', preset.spacingCaps);

    // Apply Specific Requirements
    const customReqs = document.getElementById('custom-reqs');
    if (customReqs && preset.specificRequirements) {
        customReqs.value = preset.specificRequirements;
    }

    // Apply Animation Builder Settings
    if (preset.animation) {
        const intensityInput = document.getElementById('animation-intensity');
        const cardInput = document.getElementById('animation-card');
        const buttonInput = document.getElementById('animation-button');
        const entranceInput = document.getElementById('animation-entrance');
        const easingInput = document.getElementById('animation-easing');
        const durationInput = document.getElementById('animation-duration');

        if (intensityInput) intensityInput.value = preset.animation.intensity;
        if (cardInput) cardInput.value = preset.animation.card;
        if (buttonInput) buttonInput.value = preset.animation.button;
        if (entranceInput) entranceInput.value = preset.animation.entrance;
        if (easingInput) easingInput.value = preset.animation.easing;
        if (durationInput) durationInput.value = preset.animation.duration;

        updateAnimationBuilderVisuals();
    }

    // Update preview
    updatePreview();
}

// Helper function to convert RGB to Hex
function rgbToHex(rgb) {
    if (rgb.startsWith('#')) return rgb;
    const result = rgb.match(/\d+/g);
    if (!result || result.length < 3) return '#000000';
    return '#' + result.slice(0, 3).map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

function initCustomSelectors() {
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const container = card.closest('[data-group]');
            if (!container) return;

            const groupName = container.dataset.group;
            const input = document.getElementById(groupName);
            const value = card.dataset.value;

            // Update hidden input
            if (input) {
                input.value = value;
                updatePreview();
            }

            // Update Visuals
            const siblings = container.querySelectorAll('.option-card');
            siblings.forEach(sib => {
                // Reset standard borders/bg
                sib.classList.remove('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-md');
                sib.classList.add('border-gray-200', 'dark:border-gray-700', 'hover:border-pink-500/50', 'bg-white', 'dark:bg-gray-800', 'shadow-sm');
                sib.classList.remove('bg-pink-500/10'); // Cleanup just in case

                // Reset standard text colors
                const texts = sib.querySelectorAll('span');
                texts.forEach(t => {
                    t.classList.remove('text-pink-600', 'dark:text-pink-400', 'font-semibold');
                    t.classList.add('text-gray-600', 'dark:text-gray-400', 'group-hover:text-gray-900', 'dark:group-hover:text-gray-200');
                });

                // Reset icon colors
                const icon = sib.querySelector('.rounded-full');
                if (icon) {
                    icon.classList.remove('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
                    icon.classList.add('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400', 'group-hover:text-gray-900', 'dark:group-hover:text-gray-200');
                }

                // Handle big letter weights (special case)
                const bigLetter = sib.querySelector('.text-lg');
                if (bigLetter) {
                    bigLetter.classList.remove('text-pink-600', 'dark:text-pink-400');
                    bigLetter.classList.add('text-gray-600', 'dark:text-gray-400');
                }
            });

            // Set Active State
            card.classList.remove('border-gray-200', 'dark:border-gray-700', 'hover:border-pink-500/50', 'bg-white', 'dark:bg-gray-800', 'shadow-sm');
            card.classList.add('border-pink-500', 'bg-pink-50', 'dark:bg-pink-900/20', 'shadow-md');

            const texts = card.querySelectorAll('span');
            texts.forEach(t => {
                t.classList.remove('text-gray-600', 'dark:text-gray-400', 'group-hover:text-gray-900', 'dark:group-hover:text-gray-200');
                t.classList.add('text-pink-600', 'dark:text-pink-400', 'font-semibold');
            });

            const icon = card.querySelector('.rounded-full');
            if (icon) {
                icon.classList.remove('bg-gray-100', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-400', 'group-hover:text-gray-900', 'dark:group-hover:text-gray-200');
                icon.classList.add('bg-pink-100', 'dark:bg-pink-900/40', 'text-pink-600', 'dark:text-pink-400');
            }

            const bigLetter = card.querySelector('.text-lg');
            if (bigLetter) {
                bigLetter.classList.remove('text-gray-600', 'dark:text-gray-400');
                bigLetter.classList.add('text-pink-600', 'dark:text-pink-400');
            }
        });
    });
}

function initColorPicker() {
    // Colors are statically defined in HTML, but we need to handle selection state
    const container = document.getElementById('color-picker');
    const buttons = container.querySelectorAll('button');
    const hiddenInput = document.getElementById('selected-color');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const activeClasses = ['border-gray-900', 'dark:border-white', 'shadow-lg', 'ring-2', 'ring-offset-2', 'ring-gray-400', 'dark:ring-gray-600', 'scale-110'];
            const normalClasses = ['border-gray-300', 'dark:border-neutral-600'];

            // Remove active state from all
            buttons.forEach(b => {
                b.classList.remove(...activeClasses);
                b.classList.add(...normalClasses);
            });

            // Add active state to clicked
            btn.classList.remove(...normalClasses);
            btn.classList.add(...activeClasses);
        });
    });
}

function initAnimations() {
    // Standard option groups + layout/animation builder groups
    const groups = document.querySelectorAll('[data-group], [id$="-options"]');
    groups.forEach(group => {
        const cards = group.querySelectorAll('.option-card, .animation-option, .layout-option, .preset-card');
        cards.forEach((card, index) => {
            // Reset state if needed
            card.classList.remove('opacity-0', 'animate-fade-in');

            // Staggered Fade In
            card.classList.add('opacity-0', 'animate-fade-in');

            // Calculate delay (0, 75, 150... capped)
            let delay = 0;
            if (index === 1) delay = 75;
            else if (index === 2) delay = 150;
            else if (index > 2) delay = 200;

            if (delay > 0) {
                card.classList.add(`delay-${delay}`);
            } else {
                card.classList.add('delay-0');
            }

            // Interactive Hover States
            card.classList.add('transition-all', 'duration-300', 'ease-out', 'hover:scale-105', 'active:scale-95');
        });
    });
}

function updatePreview() {
    // Get Typography Values
    const familyKey = document.getElementById('type-family').value;

    const sizeHeadKey = document.getElementById('size-heading').value;
    const sizeSubKey = document.getElementById('size-subheading').value;
    const sizeBodyKey = document.getElementById('size-body').value;

    const wgtHead = document.getElementById('weight-heading').value;
    const wgtSub = document.getElementById('weight-subheading').value;
    const wgtBody = document.getElementById('weight-body').value;

    const spcHead = document.getElementById('spacing-heading').value;
    const spcBody = document.getElementById('spacing-body').value;
    const spcCaps = document.getElementById('spacing-caps').value;

    const theme = document.getElementById('theme-pref').value;
    const accentColor = document.getElementById('selected-color').value;
    const paletteKey = document.getElementById('color-palette')?.value || 'modern';

    // Elements
    const container = document.getElementById('preview-container');
    const heading = document.getElementById('preview-heading');
    const subheading = document.getElementById('preview-subheading');
    const body = document.getElementById('preview-body');
    const btn = document.getElementById('preview-button');
    const tag = document.getElementById('preview-tag');

    // Apply Typography
    // Map family key to a real preview font if it's one of the categorized strings
    let fontStack = cssMapping.fonts[familyKey];
    if (!fontStack) {
        // Fallback or specific preview mapping for categories
        if (familyKey === 'sans') fontStack = "'Inter', sans-serif";
        else if (familyKey === 'serif') fontStack = "'Merriweather', serif";
        else if (familyKey === 'mono') fontStack = "'JetBrains Mono', monospace";
        else fontStack = "sans-serif";
    }

    container.style.fontFamily = fontStack;

    if (tag) {
        tag.style.fontFamily = fontStack;
        tag.style.letterSpacing = spcCaps;
    }

    heading.style.fontSize = cssMapping.sizes.heading[sizeHeadKey];
    heading.style.fontWeight = wgtHead;
    heading.style.letterSpacing = spcHead;

    subheading.style.fontSize = cssMapping.sizes.subheading[sizeSubKey];
    subheading.style.fontWeight = wgtSub;

    body.style.fontSize = cssMapping.sizes.body[sizeBodyKey];
    body.style.fontWeight = wgtBody;
    body.style.letterSpacing = spcBody;

    btn.style.letterSpacing = spcCaps;
    btn.style.fontWeight = 600; // default for buttons usually
    btn.style.fontSize = cssMapping.sizes.body[sizeBodyKey]; // Match body size for button usually

    // Apply Theme & Colors
    if (theme === 'dark') {
        container.classList.remove('bg-white', 'text-gray-900');
        container.classList.add('bg-gray-900', 'text-white');

        subheading.classList.remove('text-gray-600');
        subheading.classList.add('text-gray-400');

        body.classList.remove('text-gray-700');
        body.classList.add('text-gray-300');

        if (tag) {
            tag.classList.remove('bg-gray-100', 'text-gray-800');
            tag.classList.add('bg-gray-800', 'text-gray-200');
        }
    } else {
        container.classList.remove('bg-gray-900', 'text-white');
        container.classList.add('bg-white', 'text-gray-900');

        subheading.classList.remove('text-gray-400');
        subheading.classList.add('text-gray-600');

        body.classList.remove('text-gray-300');
        body.classList.add('text-gray-700');

        if (tag) {
            tag.classList.remove('bg-gray-800', 'text-gray-200');
            tag.classList.add('bg-gray-100', 'text-gray-800');
        }
    }

    // Apply Palette Colors to Tag (Visual Feedback)
    if (tag && palettes[paletteKey]) {
        const pColors = palettes[paletteKey].colors;

        // 1. apply colors to the Tag
        tag.style.backgroundColor = pColors[1];
        tag.style.color = pColors[2];

        // 2. Apply primary color to the Button (Overriding manual accent if palette is active context)
        // We will assume the palette's primary color is the intended accent
        btn.style.backgroundColor = pColors[0];

        // 3. Apply a subtle gradient to the container background
        const hexToRgba = (hex, alpha) => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        const bgGradient = `linear-gradient(135deg, ${hexToRgba(pColors[0], 0.05)} 0%, ${hexToRgba(pColors[1], 0.1)} 100%)`;
        container.style.backgroundImage = bgGradient;

        container.style.borderColor = hexToRgba(pColors[0], 0.3);
        container.style.borderWidth = '1px';
        container.style.borderStyle = 'solid';

    } else {
        // Reset manual accent
        btn.style.backgroundColor = accentColor;
        container.style.backgroundImage = 'none';
        container.style.borderWidth = '0px';
    }

    // Apply Content Updates based on Purpose (Real-time content preview)
    const purposeVal = document.getElementById('layout-purpose')?.value || 'website';
    const contentData = previewContent[purposeVal] || previewContent.website;
    const userReq = document.getElementById('user-requirement')?.value.trim();

    if (heading) heading.textContent = userReq ? userReq : contentData.heading;
    if (subheading) subheading.textContent = contentData.subheading;
    if (body) body.textContent = contentData.body;
    if (btn) btn.textContent = contentData.button;
    if (tag) tag.textContent = contentData.tag;
}

function generatePrompt() {
    // General Settings
    const userRequirement = document.getElementById('user-requirement').value.trim();
    const style = document.getElementById('visual-style').value;
    const theme = document.getElementById('theme-pref').value;
    const colorHex = document.getElementById('selected-color').value;
    const colorName = colors.find(c => c.hex === colorHex)?.name || 'Custom';
    const customReqs = document.getElementById('custom-reqs').value;

    // Typography Settings
    const familyKey = document.getElementById('type-family').value;
    const sizeHeadingKey = document.getElementById('size-heading').value;
    const sizeSubKey = document.getElementById('size-subheading').value;
    const sizeBodyKey = document.getElementById('size-body').value;

    const wgtHeading = document.getElementById('weight-heading').value;
    const wgtSub = document.getElementById('weight-subheading').value;
    const wgtBody = document.getElementById('weight-body').value;

    const spcHeading = document.getElementById('spacing-heading').value;
    const spcBody = document.getElementById('spacing-body').value;
    const spcCaps = document.getElementById('spacing-caps').value;

    // Styling Builder Settings
    const shadow = document.getElementById('shadow-depth')?.value || 'none';
    const paletteKey = document.getElementById('color-palette')?.value || 'modern';
    const device = document.getElementById('device-opt')?.value || 'desktop';

    // Resolve Palette Details
    const paletteData = palettes[paletteKey];
    let paletteDesc = paletteKey;

    if (paletteData) {
        if (paletteData.prompt) {
            paletteDesc = paletteData.prompt;
        } else {
            paletteDesc = `${paletteData.name} (${paletteData.desc}) - Colors: [${paletteData.colors.join(', ')}]`;
        }
    }

    const fontFamily = typographyConfig.families[familyKey];
    const sizeHeading = typographyConfig.sizes.heading[sizeHeadingKey];
    const sizeSub = typographyConfig.sizes.subheading[sizeSubKey];
    const sizeBody = typographyConfig.sizes.body[sizeBodyKey];

    const styleDesc = visualStyles[style] || style;
    const themeDesc = themes[theme] || theme;

    // Layout Section (From Builder)
    const layoutPrompt = getLayoutPrompt();
    let layoutDesc = "";
    if (layoutPrompt) {
        layoutDesc = `\n**Layout & Structure**\n${layoutPrompt}\n`;
    }

    let typeDesc = "";
    const pairingKey = document.getElementById('font-pairing').value;
    if (pairingKey && fontPairings[pairingKey] && pairingKey !== 'none') {
        typeDesc += `${fontPairings[pairingKey].prompt}\n\n### Additional Typography Details\n`;
    }

    typeDesc += `Typography: Use **${fontFamily}** as the primary typeface (unless overridden by pairing).
• **Headings**: ${sizeHeading}, font-weight: ${wgtHeading}, letter-spacing: ${spcHeading}
• **Subheadings**: ${sizeSub}, font-weight: ${wgtSub}
• **Body text**: ${sizeBody}, font-weight: ${wgtBody}, line-height: 1.5, letter-spacing: ${spcBody}
• **Buttons & Labels (Caps)**: letter-spacing: ${spcCaps}
• Ensure proper contrast and hierarchy between text elements.`;

    // Animation Section (From Builder)
    const animationPrompt = getAnimationPrompt();

    const prompt = `
> ${userRequirement ? userRequirement : "Create a modern and professional user interface design."}

**Visual Style & Theme**
${styleDesc}
${themeDesc}
Primary Accent Color: ${colorName} (${colorHex}).
Color Palette: ${paletteDesc}
Shadow Depth: ${shadow}.
Target Device: ${device}.

**Typography & Layout**
${typeDesc}
${layoutDesc}${layoutGuide}

${animationPrompt}

**Specific Requirements**
${customReqs ? customReqs : "Ensure the design is polished, accessible (WCAG AA), and follows modern UI/UX best practices."}

${professionalRules}
`;

    const output = document.getElementById('prompt-output');
    output.textContent = prompt.trim();

    document.getElementById('empty-state').style.display = 'none';

    // Animate output
    output.classList.remove('animate-fade-in');
    void output.offsetWidth; // trigger reflow
    output.classList.add('animate-fade-in');

    // Trigger Stitch if enabled
    if (document.getElementById('stitch-enabled').checked) {
        executeStitchGeneration(prompt.trim());
    }
}

function copyToClipboard() {
    const output = document.getElementById('prompt-output');
    const text = output.textContent;

    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-green-400"></i> Copied!`;
        lucide.createIcons();

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            lucide.createIcons();
        }, 2000);
    });
}

function initCollapsibles() {
    const setupToggle = (toggleId, contentId, iconId) => {
        const toggle = document.getElementById(toggleId);
        const content = document.getElementById(contentId);
        const icon = document.getElementById(iconId);

        if (!toggle || !content) return;

        toggle.addEventListener('click', () => {
            const isHidden = content.classList.contains('hidden');

            if (isHidden) {
                // Expand
                content.classList.remove('hidden');
                // Optional: add animation class if needed
                if (icon) icon.style.transform = 'rotate(0deg)';
                toggle.setAttribute('aria-expanded', 'true');
            } else {
                // Collapse
                content.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(-90deg)';
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    };

    setupToggle('toggle-presets', 'content-presets', 'icon-presets');
    setupToggle('toggle-layout-builder', 'content-layout-builder', 'icon-layout-builder');
    setupToggle('toggle-styling', 'content-styling', 'icon-styling');
    setupToggle('toggle-typography', 'content-typography', 'icon-typography');
    setupToggle('toggle-animation', 'content-animation', 'icon-animation');
    setupToggle('toggle-preview', 'content-preview', 'icon-preview');
}

function initSidebarCollapse() {
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const expandBtn = document.getElementById('sidebar-expand-btn');

    function collapse() {
        sidebar.style.width = '0';
        sidebar.style.minWidth = '0';
        sidebar.style.overflow = 'hidden';
        sidebar.style.borderRight = 'none';
        expandBtn.classList.remove('hidden');
        lucide.createIcons();
    }

    function expand() {
        sidebar.style.width = '';
        sidebar.style.minWidth = '';
        sidebar.style.overflow = '';
        sidebar.style.borderRight = '';
        expandBtn.classList.add('hidden');
        lucide.createIcons();
    }

    if (collapseBtn) collapseBtn.addEventListener('click', collapse);
    if (expandBtn) expandBtn.addEventListener('click', expand);
}

function initAppTheme() {
    const toggleBtn = document.getElementById('app-theme-toggle');
    const html = document.documentElement;

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('serum-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('serum-theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('serum-theme', 'dark');
            }
        });
    }
}
// End of file

/**
 * StitchClient - Comprehensive API interface for Stitch UI Generation
 */
class StitchClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.endpoint = "https://stitchapi.affra.com.my/mcp";
    }

    async _rpc(method, params = {}) {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': this.apiKey
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: Date.now(),
                method,
                params
            })
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
        return data.result;
    }

    // MCP helper to call specific tools via tools/call
    async _callTool(toolName, toolArgs = {}) {
        const result = await this._rpc("tools/call", {
            name: toolName,
            arguments: toolArgs
        });

        // MCP tools/call returns { content: [{ type: 'text', text: '...' }] }
        if (result && result.content && result.content[0] && result.content[0].text) {
            try {
                // Return parsed JSON if possible, otherwise raw text
                return JSON.parse(result.content[0].text);
            } catch (e) {
                return result.content[0].text;
            }
        }

        // If it's already an error or doesn't match expected format
        if (result && result.isError) {
            throw new Error(result.content?.[0]?.text || "Tool execution failed");
        }

        return result;
    }

    async initialize() {
        return this._rpc("initialize", {
            capabilities: {},
            clientInfo: { name: "Serum", version: "1.2" },
            protocolVersion: "2024-11-05"
        });
    }

    async createProject(title = "Serum UI Generation") {
        return this._callTool("create_project", { title });
    }

    async generateScreen(projectId, prompt, deviceType = "DESKTOP", modelId = "GEMINI_3_FLASH") {
        return this._callTool("generate_screen_from_text", {
            projectId,
            prompt,
            deviceType,
            modelId
        });
    }

    async getScreen(projectId, screenId) {
        const name = `projects/${projectId}/screens/${screenId}`;
        return this._callTool("get_screen", {
            name,
            projectId,
            screenId
        });
    }
}

/**
 * Orchestrates the full Stitch generation sequence
 */
async function executeStitchGeneration(generatedPrompt) {
    const isEnabled = document.getElementById('stitch-enabled').checked;
    const apiKey = document.getElementById('stitch-api-key').value;
    const deviceType = document.getElementById('stitch-device').value;
    const modelId = document.getElementById('stitch-model').value;

    if (!isEnabled || !apiKey) return;

    // UI State: Reset and Show
    const resultsPanel = document.getElementById('stitch-results');
    const loadingOverlay = document.getElementById('stitch-loading');
    const statusText = document.getElementById('stitch-status');
    const errorState = document.getElementById('stitch-error');
    const errorMsg = document.getElementById('stitch-error-msg');
    const iframe = document.getElementById('stitch-iframe');
    const codeOutput = document.getElementById('stitch-code-output');
    const spinner = document.getElementById('stitch-loading-spinner');

    resultsPanel.classList.remove('hidden');
    loadingOverlay.classList.remove('hidden');
    errorState.classList.add('hidden');
    spinner.classList.remove('hidden');
    screenShotContainer.classList.add('hidden');

    // Scroll to results
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
        const client = new StitchClient(apiKey);

        statusText.textContent = "Connecting to Stitch...";
        await client.initialize();

        statusText.textContent = "Starting new UI project...";
        const projectRes = await client.createProject();
        const projectId = (projectRes.projectId || projectRes.name || "").split('/').pop();

        statusText.textContent = "Brewing your interface...";
        const genRes = await client.generateScreen(projectId, generatedPrompt, deviceType, modelId);

        // Extract screenId from outputComponents -> design -> screens
        let screenId = null;
        if (genRes.outputComponents?.[0]?.design?.screens?.[0]) {
            const screen = genRes.outputComponents[0].design.screens[0];
            screenId = screen.id || (screen.name ? screen.name.split('/').pop() : null);
        } else if (genRes.name) {
            screenId = genRes.name.split('/').pop();
        }

        if (!screenId) throw new Error("Could not retrieve Screen ID from generation.");

        statusText.textContent = "Finalizing artifacts...";

        const screenData = await client.getScreen(projectId, screenId);

        // Final screen details can come from the Tool output of generateScreen OR get_screen
        const finalScreen = screenData.htmlCode ? screenData : (genRes.outputComponents?.[0]?.design?.screens?.[0] || screenData);

        // Render Result: Preview
        if (finalScreen.htmlCode?.downloadUrl) {
            const proxiedUrl = finalScreen.htmlCode.downloadUrl.replace('https://contribution.usercontent.google.com', 'https://stitchapi.affra.com.my');
            const authUrl = proxiedUrl + (proxiedUrl.includes('?') ? '&' : '?') + "key=" + apiKey;
            // Load preview via iframe navigation (works without CORS)
            iframe.src = authUrl;

            // Try to fetch source for the code tab
            try {
                const htmlRes = await fetch(authUrl);
                if (!htmlRes.ok) {
                    throw new Error(`Status ${htmlRes.status}`);
                }
                const htmlContent = await htmlRes.text();
                codeOutput.textContent = htmlContent;
                // Also render via srcdoc for a self-contained preview
                iframe.srcdoc = htmlContent;
            } catch (e) {
                console.warn("Could not fetch code content for code tab:", e);
                // Leave iframe.src intact (preview still works), only update code tab
                codeOutput.textContent = "<!-- Code view unavailable. Preview is loaded in the Preview tab. -->";
            }
        } else if (finalScreen.htmlContent) {
            iframe.srcdoc = finalScreen.htmlContent;
            codeOutput.textContent = finalScreen.htmlContent;
        }

        // Complete
        loadingOverlay.classList.add('hidden');
        spinner.classList.add('hidden');
        lucide.createIcons();

    } catch (err) {
        console.error("Stitch Error:", err);
        loadingOverlay.classList.add('hidden');
        spinner.classList.add('hidden');
        errorState.classList.remove('hidden');
        errorMsg.textContent = err.message || "An unexpected error occurred.";
        lucide.createIcons();
    }
}
