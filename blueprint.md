# Project Blueprint - Micro-LED & Lotto 추천기

## Overview
A web application introducing Micro-LED technology and providing a Lotto number generator with duplicate prevention.

## Current Features
- Micro-LED technology introduction section.
- Lotto number generator (1 game / 5 games).
- Duplicate combination prevention in a single session.
- Visual representation of lotto balls with color coding based on number ranges.
- Responsive design for mobile devices.

## Planned Changes: Dark Mode & Light Mode
- Implement theme switching functionality.
- Define CSS variables for themes (backgrounds, text colors, card colors).
- Add a theme toggle button in the header.
- Persist theme preference in `localStorage`.
- Refactor inline styles and scripts into `style.css` and `main.js`.

## Implementation Steps
1. **Refactor Code:** Move CSS and JS from `index.html` to their respective files.
2. **Define Theme Variables:** Set up root CSS variables for light and dark modes.
3. **Add Toggle UI:** Insert a theme switch button in the `index.html` header.
4. **Implement Logic:** Write the JavaScript to handle theme switching and persistence.
5. **Verify & Deploy:** Test the changes and push to the GitHub repository.
