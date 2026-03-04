# Project Blueprint - Micro-LED & Lotto 추천기

## Overview
A web application introducing Micro-LED technology and providing a Lotto number generator with duplicate prevention, along with an AI Animal Face Test. The site is optimized for Google AdSense with high-quality content and essential legal pages.

## Current Features
- **Rich Content:**
    - "Deep Dive into Micro-LED Technology" article.
    - "Smart Lotto Generator" with algorithm explanation.
    - "How AI Works" educational section in the Animal Face Test.
- **Tools:**
    - Lotto number generator (1 game / 5 games) with duplicate prevention.
    - AI Animal Face Test using Google Teachable Machine.
- **UI/UX:**
    - Responsive design for mobile and desktop.
    - Dark Mode / Light Mode toggle with local storage persistence.
    - Improved typography for long-form content.
- **Monetization & Analytics & Compliance:**
    - Google AdSense integration (Meta tag, Script, ads.txt).
    - **Google Analytics 4 (GA4) integration** (G-B8SJL64YMD tracking tag).
    - **Microsoft Clarity integration** (vqf2g45jto tracking script).
    - **Privacy Policy** (`privacy.html`) and **Terms of Service** (`terms.html`) pages included.
    - Contact form integration.

## Change Log (AdSense & Analytics Optimization)
- **Analytics:** Added Google Analytics (gtag.js) and **Microsoft Clarity** to all HTML pages for comprehensive traffic and behavior monitoring.
- **Content Expansion:** Added substantial text content to `index.html` and `animal-test.html` to meet AdSense "Valuable Inventory" standards.
- **Legal Pages:** Created `privacy.html` and `terms.html` and linked them in the footer.
- **Styling:** Added `article` styling in `style.css` for better readability of text sections.
- **SEO:** Added meta descriptions to pages.

## Implementation Steps
1. **Refactor Code:** Move CSS and JS from `index.html` to their respective files. (Completed)
2. **Define Theme Variables:** Set up root CSS variables for light and dark modes. (Completed)
3. **Add Toggle UI:** Insert a theme switch button in the `index.html` header. (Completed)
4. **Implement Logic:** Write the JavaScript to handle theme switching and persistence. (Completed)
5. **Google AdSense Setup:**
    - Created `ads.txt` with publisher information.
    - Added `<meta name="google-adsense-account">` to `index.html`.
    - Added AdSense client script.
    - **New:** Created Privacy Policy and Terms of Service pages.
    - **New:** Expanded content depth for Micro-LED and AI sections.

## Future Plans
- Add more educational articles about probability and AI.
- Implement social sharing features.
