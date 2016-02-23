# tiny-button

This is a small project to compare performance of different component frameworks.


# Instruction

Install package dependencies
`npm install`

Reference to the library in your demo html
`<script src="../node_modules/jquery/dist/jquery.min.js"></script>`

To have a fair measurement, use provided resource files in `default` folder
- `tiny-button.css`: style for the button, including animated spin.
- `tiny-button.js`: js actions for the button, including template for it.
- `index.html`: example demo page template.


# Measure performance

We use 2 ways to measure to mae sure it's fair:
- The time since html is loaded until the component is usable (js handlers are binded).
- Loading time of the page.
http://stackoverflow.com/questions/14341156/calculating-page-load-time-in-javascript
