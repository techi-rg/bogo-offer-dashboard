BOGO Offer Dashboard

A clean and lightweight dashboard web app to manage and display BOGO (“Buy One Get One”) promotional offers.

📋 Features

Simple, single-page HTML/JS/CSS implementation — zero build or backend required (just open index.html).

Maintains a list of active BOGO offers, with UI to view, add, edit and remove offers (via script.js).

Clean, responsive UI styling in style.css — optimized for both desktop and mobile.

Easily extensible: you can plug in a backend or expand to multi-page later.

🛠️ Usage

Clone or download the repository:

git clone https://github.com/techi-rg/bogo-offer-dashboard.git


Open index.html in your browser.

Use the UI to add new offers (hardcoded author or user), enter caption details, save, edit or delete as needed.

If you’d like to connect to a backend API or database, update script.js accordingly.

🧠 Structure
├── index.html       ← Main HTML file  
├── style.css        ← Dashboard styling (clean UI, responsive design)  
└── script.js        ← Core JS logic: array handling, DOM manipulation  

🎨 Design & UI Principles

Flat, minimalist design — focus on content, not decor.

Responsive layout: works well on large screens and mobile devices.

Clear typography and spacing to make data easily readable.

Consistent color palette: pick one accent colour, neutral grays for background and text for good contrast.

✅ Why This Project is Well-Structured

Single place for UI/logic (HTML + CSS + JS) keeps things simple and maintainable.

CSS and JS separated from HTML (no inline styling or scripts) for clarity and scalability.

Easy to fork and build upon — the structure allows for easy insertion of real data sources or frameworks later.

The UI design is clean and intuitive, so users can pick it up quickly without needing complex onboarding.

🚀 Next Steps / Improvements

Add persistent storage (e.g., localStorage, or connect to a backend API) so offers persist across sessions.

Introduce authentication/authorisation if multiple users need to manage offers.

Use a framework (React, Vue, Svelte) if you plan to expand the UI complexity or add many more views.

Add filtering, sorting, search functionality for large numbers of offers.

Style enhancements: theme toggling (light/dark mode), export/import of offers data, animations.

Add unit tests and end-to-end UI tests for robustness.
