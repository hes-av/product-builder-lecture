# Project Blueprint - Micro-LED & Lotto 추천기

## Overview
A web application introducing Micro-LED technology and providing a Lotto number generator with duplicate prevention.

## Current Features
- Micro-LED technology introduction section.
- Lotto number generator (1 game / 5 games).
- Duplicate combination prevention in a single session.
- Visual representation of lotto balls with color coding based on number ranges.
- Responsive design for mobile devices.
- Dark Mode / Light Mode toggle with local storage persistence.
- **Google AdSense Integration:** Added site connection meta tag, AdSense script, and `ads.txt` for monetization.

## Planned Changes
- Implement theme switching functionality. (Completed)
- Define CSS variables for themes (backgrounds, text colors, card colors). (Completed)
- Add a theme toggle button in the header. (Completed)
- Persist theme preference in `localStorage`. (Completed)
- Refactor inline styles and scripts into `style.css` and `main.js`. (Completed)
- **AdSense Setup:** Complete the site verification and ad unit placement as needed.

## Implementation Steps
1. **Refactor Code:** Move CSS and JS from `index.html` to their respective files. (Done)
2. **Define Theme Variables:** Set up root CSS variables for light and dark modes. (Done)
3. **Add Toggle UI:** Insert a theme switch button in the `index.html` header. (Done)
4. **Implement Logic:** Write the JavaScript to handle theme switching and persistence. (Done)
5. **Google AdSense:** 
    - Created `ads.txt` with publisher information.
    - Added `<meta name="google-adsense-account">` to `index.html`.
    - Added AdSense client script to `index.html`.
6. **Verify & Deploy:** Test the changes and push to the GitHub repository.
