Project Overview: MusicFest, a music festival website for MusicFest 2025. Pages include a home called (`index.html`), `lineup.html` with interactive hover artists, `schedule.html` (event table), and `tickets.html` (client-side validation).

Tech: HTML, CSS, JavaScript. Directly opened in a browser.

Features
- Interactive line-up: Hover over artist images to show captions; hovering Drake and other artists triggers audio with smooth fade in/out (implemented in `audio.js` and inline scripts in `lineup.html`).
- Dropdown menu: Small top-right menu (image icon) toggles a dropdown, controlled by a small JS toggle and styled in `styles.css`.
- Tickets form: validation and feedback handled by `tickets.js`.
- Schedule table: `schedule.html` contains a light responsive table styled in `styles.css`.

Key files
- `index.html` - Home page
- `lineup.html` - Artist grid, audio behavior
- `schedule.html`- Event schedule table.
- `tickets.html` - Ticket form.
- `styles.css` - Global styles, positioning, hover rules, `.dot-menu` styling.
- `audio.js` - audio management when hovering over a picture
- `tickets.js` - Ticket form validation logic.
- `audios/` and `pictures/` - Media assets used by pages.

How to view
1. Open `index.html` directly in a browser: double-click or use your editor's Live Server extension.
2. For audio hover to work, interact with the page first by clicking. The browser blocks autoplay until user interaction.