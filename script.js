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

const visualStyles = {
    glassmorphism: "Ensure a Glassmorphism aesthetic. Use translucent backgrounds with backdrop-filter blur to create depth and hierarchy. Maintain a clean, premium look with subtle white borders and soft shadows.",
    clean: "Focus on a Clean and Minimalist design. Use ample white space, clear typography, and a restrained color palette to maximize content readability and reduce cognitive load.",
    flat: "Apply Flat Design principles. Use solid, vibrant colors without gradients or shadows. Focus on crisp edges and two-dimensional elements for a modern, fast-loading interface.",
    outline: "Use an Outline design style. Transparent backgrounds with visible borders. Focus on crisp lines and structural hierarchy to create a modern, airy interface.",
    material: "Follow Material Design guidelines. Use elevation (shadows) to convey hierarchy and depth. Implement ripple effects for interactions and stick to standard grid layouts.",
    brutalist: "Use a Brutalist design style. Employ bold, raw, and geometric elements. Use high-contrast borders, monospaced fonts, and non-traditional layouts to create a striking, artistic impact.",
    neumorphism: "Implement Neumorphism (Soft UI). Create elements that appear to be extruded from the background using soft, multiple shadows (light and dark) to create a tactile, plastic-like feel."
};

const themes = {
    dark: "Use a Dark Theme. The background should be a deep neutral (e.g., #111827 or #000000) with lighter gray surface layers. Ensure text has high contrast (light gray/white) for readability.",
    light: "Use a Light Theme. The background should be white or very light gray (#F9FAFB). Use dark gray text for optimal readability and contrast.",
    hybrid: "Implement an Adaptive Theme that supports both Light and Dark modes based on user system preference (`prefers-color-scheme`). Ensure all colors and borders satisfy contrast ratios in both modes."
};

const typographyConfig = {
    families: {
        sans: "Inter",
        serif: "Playfair Display",
        mono: "JetBrains Mono",
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
};

const fontPairings = {
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
        specificRequirements: "Ensure the design is professional, accessible with WCAG AA compliance, and follows current UI/UX best practices with proper contrast ratios and responsive behavior. Include subtle micro-interactions and smooth transitions between states."
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
        specificRequirements: "Ensure the design prioritizes content readability with excellent typography hierarchy, generous white space, and WCAG AAA contrast compliance. Focus on clean lines, ample spacing, and distraction-free reading experience with subtle interactive elements. Use a max-width of 680px for text containers to improve readability."
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
        specificRequirements: "Create a modern SaaS application with glassmorphism design using an adaptive theme that responds to system preferences. Ensure the design is professional, accessible with WCAG AA compliance, and follows current UI/UX best practices with proper contrast ratios and responsive behavior. Include subtle micro-interactions and smooth transitions between states. Use vibrant blue (#3B82F6) for interactive elements."
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
        specificRequirements: "Design a mobile-first app interface with iOS-style design using rounded corners. Ensure the design feels native with proper spacing, readable typography, and accessible color contrast ratios above 4.5:1. Include loading states, error handling, and success feedback with appropriate semantic colors. Use large touch targets (44px minimum) and thumb-friendly navigation."
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
        specificRequirements: "Ensure the design is memorable and artistic while maintaining basic accessibility standards. Include bold typography, asymmetrical layouts, and striking visual elements that showcase creative work effectively. Use dramatic extra-large shadows for maximum visual impact and artistic flair."
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
        specificRequirements: "Design a platform with neumorphic design using soft, extruded plastic-like appearance for a tactile, engaging feel. Ensure the design appeals to audiences with high contrast for visibility, customizable themes, and engaging visual feedback. Include animated elements, achievement displays, and community features that enhance the experience."
    }
};

// Layout & Animation (General Best Practices to append)
const layoutGuide = "Layout: Adopt a mobile-first approach. Start with single-column layouts for mobile (<640px) and expand to multi-column grids for tablet (768px) and desktop (1024px+). Use consistent spacing (multiples of 4px) and ensure touch targets are at least 44px.";
const animationGuide = "Animation: Implement subtle micro-interactions. Use 'transform' and 'opacity' for distinct hover states (e.g., scale 1.05x). Add staggered entrance animations for lists and cards using ease-out timing.";

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPresetPicker(); // Initialize project type presets
    initLayoutBuilder(); // Initialize new layout prompt builder
    initColorPicker();
    initCustomSelectors(); // Initialize custom card selectors
    initCollapsibles(); // Initialize collapsible sections
    initAnimations(); // Initialize staggered animations

    document.getElementById('regenerate-btn').addEventListener('click', generatePrompt);
    document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

    // Real-time Preview Listeners (Standard inputs)
    const inputs = document.querySelectorAll('select, input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    // Initial Trigger
    updatePreview();
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
                opt.classList.remove('border-gray-200', 'bg-white', 'hover:border-pink-500/50');
                opt.classList.add('border-pink-500', 'bg-pink-50', 'shadow-sm');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-gray-100', 'text-gray-500');
                    iconWrapper.classList.add('bg-pink-100', 'text-pink-600');
                }
                if (label) {
                    label.classList.remove('text-gray-700');
                    label.classList.add('text-pink-600');
                }
            } else {
                opt.classList.remove('border-pink-500', 'bg-pink-50', 'shadow-sm');
                opt.classList.add('border-gray-200', 'bg-white', 'hover:border-pink-500/50');

                if (iconWrapper) {
                    iconWrapper.classList.remove('bg-pink-100', 'text-pink-600');
                    iconWrapper.classList.add('bg-gray-100', 'text-gray-500');
                }
                if (label) {
                    label.classList.remove('text-pink-600');
                    label.classList.add('text-gray-700');
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
                    c.classList.remove('border-pink-500', 'bg-pink-50', 'shadow-md', 'ring-2', 'ring-pink-500/30');
                    c.classList.add('border-gray-200', 'bg-white', 'shadow-sm');
                    const nameEl = c.querySelector('.preset-name');
                    const tagEl = c.querySelector('.preset-tag');
                    const descEl = c.querySelector('.preset-desc');
                    if (nameEl) nameEl.classList.replace('text-pink-600', 'text-gray-900');
                    if (tagEl) { tagEl.classList.replace('bg-pink-100', 'bg-gray-100'); tagEl.classList.replace('text-pink-600', 'text-gray-500'); }
                    if (descEl) descEl.classList.replace('text-pink-500', 'text-gray-500');
                    const icon = c.querySelector('.preset-icon');
                    if (icon) { icon.classList.replace('bg-pink-100', 'bg-gray-100'); icon.classList.replace('text-pink-600', 'text-gray-600'); }
                });

                // Set active state
                card.classList.remove('border-gray-200', 'bg-white', 'shadow-sm');
                card.classList.add('border-pink-500', 'bg-pink-50', 'shadow-md', 'ring-2', 'ring-pink-500/30');
                const nameEl = card.querySelector('.preset-name');
                const tagEl = card.querySelector('.preset-tag');
                const descEl = card.querySelector('.preset-desc');
                if (nameEl) nameEl.classList.replace('text-gray-900', 'text-pink-600');
                if (tagEl) { tagEl.classList.replace('bg-gray-100', 'bg-pink-100'); tagEl.classList.replace('text-gray-500', 'text-pink-600'); }
                if (descEl) descEl.classList.replace('text-gray-500', 'text-pink-500');
                const icon = card.querySelector('.preset-icon');
                if (icon) { icon.classList.replace('bg-gray-100', 'bg-pink-100'); icon.classList.replace('text-gray-600', 'text-pink-600'); }
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

            // Update Visuals (Simple toggling for now, assuming HTML sets initial state correctly)
            const siblings = container.querySelectorAll('.option-card');
            siblings.forEach(sib => {
                // Reset standard borders/bg
                sib.classList.remove('border-pink-500', 'bg-pink-50', 'shadow-md');
                sib.classList.add('border-gray-200', 'hover:border-pink-500/50', 'bg-white', 'shadow-sm');
                sib.classList.remove('bg-pink-500/10'); // Cleanup just in case

                // Reset standard text colors
                const texts = sib.querySelectorAll('span');
                texts.forEach(t => t.classList.remove('text-pink-600', 'font-semibold'));
                texts.forEach(t => t.classList.add('text-gray-600', 'group-hover:text-gray-900'));

                // Reset icon colors
                const icon = sib.querySelector('.rounded-full');
                if (icon) {
                    icon.classList.remove('bg-pink-100', 'text-pink-600');
                    icon.classList.add('bg-gray-100', 'text-gray-600', 'group-hover:text-gray-900');
                }

                // Handle big letter weights (special case)
                const bigLetter = sib.querySelector('.text-lg');
                if (bigLetter) {
                    bigLetter.classList.remove('text-pink-600');
                    bigLetter.classList.add('text-gray-400');
                }
            });

            // Set Active State
            card.classList.remove('border-gray-200', 'hover:border-pink-500/50', 'bg-white', 'shadow-sm');
            card.classList.add('border-pink-500', 'bg-pink-50', 'shadow-md');

            const texts = card.querySelectorAll('span');
            texts.forEach(t => {
                t.classList.remove('text-gray-600', 'group-hover:text-gray-900');
                t.classList.add('text-pink-600', 'font-semibold');
            });

            const icon = card.querySelector('.rounded-full');
            if (icon) {
                icon.classList.remove('bg-gray-100', 'text-gray-600', 'group-hover:text-gray-900');
                icon.classList.add('bg-pink-100', 'text-pink-600');
            }

            const bigLetter = card.querySelector('.text-lg');
            if (bigLetter) {
                bigLetter.classList.remove('text-gray-400');
                bigLetter.classList.add('text-pink-600');
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
    const groups = document.querySelectorAll('[data-group]');
    groups.forEach(group => {
        const cards = group.querySelectorAll('.option-card');
        cards.forEach((card, index) => {
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

    // Elements
    const container = document.getElementById('preview-container');
    const heading = document.getElementById('preview-heading');
    const subheading = document.getElementById('preview-subheading');
    const body = document.getElementById('preview-body');
    const btn = document.getElementById('preview-button');
    const tag = document.getElementById('preview-tag');

    // Apply Typography
    const fontStack = cssMapping.fonts[familyKey];
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

    btn.style.backgroundColor = accentColor;
}

function generatePrompt() {
    // General Settings
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
    const device = document.getElementById('device-opt')?.value || 'desktop';
    const palette = document.getElementById('color-palette')?.value || 'modern';

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

    // Construct Typography Section
    // Construct Typography Section
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

    const prompt = `
> Create a modern and professional user interface design.

**Visual Style & Theme**
${styleDesc}
${themeDesc}
Primary Accent Color: ${colorName} (${colorHex}).
Color Palette Style: ${palette}.
Shadow Depth: ${shadow}.
Target Device: ${device}.

**Typography & Layout**
${typeDesc}
${layoutDesc}${layoutGuide}

**Animation & Interaction**
${animationGuide}

**Specific Requirements**
${customReqs ? customReqs : "ensure the design is polished, accessible (WCAG AA), and follows modern UI/UX best practices."}
`;

    const output = document.getElementById('prompt-output');
    output.textContent = prompt.trim();

    document.getElementById('empty-state').style.display = 'none';

    // Animate output
    output.classList.remove('animate-fade-in');
    void output.offsetWidth; // trigger reflow
    output.classList.add('animate-fade-in');
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
    setupToggle('toggle-preview', 'content-preview', 'icon-preview');
}
