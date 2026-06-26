---
name: Abel WebService Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#585f6c'
  on-secondary: '#ffffff'
  secondary-container: '#dce2f3'
  on-secondary-container: '#5e6572'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dce2f3'
  secondary-fixed-dim: '#c0c7d6'
  on-secondary-fixed: '#151c27'
  on-secondary-fixed-variant: '#404754'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-v-desktop: 120px
  section-v-mobile: 80px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is anchored in **Surgical Minimalism**. It evokes an emotional response of absolute precision, high-tier craft, and unshakeable reliability. It is designed for a premium digital agency that prioritizes clarity over decoration.

The visual style is a hybrid of **Modern Corporate** and **Editorial Minimalism**. It borrows the spaciousness of high-end editorial layouts and the technical rigor of developer-centric tools. Key characteristics include:
- **Aggressive Whitespace:** Large breathability between sections to focus attention on single ideas.
- **High Contrast:** Sharp transitions between pure whites and deep blacks to establish a clear hierarchy.
- **Precision Detailing:** Using hairline strokes (1px) and rigid alignment rather than decorative shadows or gradients.
- **Functional Elegance:** Every element must serve a purpose; if a border or a label doesn't improve clarity, it is removed.

## Colors

The palette is strictly monochromatic and functional, designed to let the content and typography lead the visual experience.

- **Primary (#0A0A0A):** Reserved for high-impact elements like headings, primary call-to-action backgrounds, and active states. It provides the "weight" in the design.
- **Secondary (#6B7280):** Used exclusively for body copy and secondary metadata. This ensures a softer reading experience that doesn't compete with headings.
- **Tertiary (#F5F5F5):** A subtle background "wash" used to differentiate sections or define container areas without introducing a new hue.
- **Neutral (#FFFFFF):** The foundation. Use pure white for the primary canvas to maximize the sense of space and cleanliness.
- **Borders (#E5E7EB):** A light, crisp grey for structural lines, ensuring containers are defined with "ghost-like" subtlety.

## Typography

Typography is the primary visual driver of this design system. We use **Geist** for its technical, geometric precision in headings and **Inter** for its unparalleled legibility in long-form body text.

- **Display & Headings:** Should be set with tight letter-spacing to create a "locked" and authoritative look. Use `display-lg` for hero sections to make a bold, editorial statement.
- **Body Text:** Set at 18px (`body-lg`) with a generous 1.7 line-height. This ensures maximum readability and reinforces the premium, relaxed feel of the layout.
- **Labels:** Use `label-caps` for small descriptors above headings or for navigation items. The increased letter-spacing provides a sophisticated, "utility" aesthetic.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop, centered on the viewport. The layout philosophy is "Information First," using massive vertical gaps to isolate content modules.

- **Desktop Layout:** 12 columns with 32px gutters. Large 120px vertical padding between sections creates an "art gallery" effect where each piece of content is viewed in isolation.
- **Mobile Layout:** 4 columns with 24px side margins. Vertical padding reduces to 80px to maintain momentum while scrolling on smaller screens.
- **Alignment:** All elements should snap to the grid. Avoid centering text in long-form sections; left-alignment is preferred to maintain a strong vertical axis.

## Elevation & Depth

This design system rejects traditional shadows and blurs in favor of **Tonal Layering** and **Low-contrast Outlines**.

- **Flat Hierarchy:** Depth is communicated through color contrast (white on light gray) rather than shadows.
- **Strokes over Shadows:** If a card or container requires separation, use a 1px solid border in `#E5E7EB`. 
- **Active States:** Instead of "lifting" an object with a shadow when hovered, change the background color or the border weight slightly. 
- **Z-Index:** Modals and overlays should use a pure white background with a crisp 1px border. If a backdrop is needed, use a solid 40% opacity black without blur to maintain the "raw" aesthetic.

## Shapes

The shape language is **Soft (0.25rem)**. While the design is rigid and grid-based, a very slight corner radius prevents the UI from feeling aggressive or dated.

- **Buttons & Inputs:** Use a 4px (0.25rem) radius.
- **Cards & Large Containers:** Use 8px (0.5rem) to provide a subtle distinction from smaller components.
- **Media:** Images and video players should also follow the 8px radius to maintain consistency across all visual assets.

## Components

Components are characterized by high-contrast and a "utility-first" appearance.

- **Primary Buttons:** Pure black background (#0A0A0A) with white text. No icons unless they indicate a specific action (e.g., an arrow for "Next"). Padding should be generous: 12px 24px.
- **Secondary Buttons:** 1px border (#E5E7EB) with black text. No background color.
- **Inputs:** 1px border (#E5E7EB) with a 4px radius. Focus state should strictly be a 1px border of #0A0A0A—never use glow or outer shadows.
- **Cards:** White background, 1px border, 8px radius. Use for grouping related information like service offerings or blog previews.
- **Chips/Tags:** Small, Geist-font labels with a `#F5F5F5` background and no border. Used for categories or metadata.
- **Lists:** Clean, horizontal rules (1px `#E5E7EB`) between items. Increase vertical padding between list items to 24px to maintain the "editorial" breathability.