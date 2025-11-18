# Icons Folder (Optional)

This folder is for any custom icons or graphics you want to use.

## Default Icons:

The website uses **Font Awesome** for icons by default, so you don't need to add icon files unless you want custom graphics.

## Font Awesome Icons Used:

- Navigation: `fa-bars`, `fa-times`
- Contact: `fa-paper-plane`, `fa-phone-square-alt`
- Social: `fa-linkedin`, `fa-github`, `fa-twitter`
- Services: `fa-code`, `fa-cube`, `fa-brain`
- Portfolio: `fa-external-link-alt`
- Footer: `fa-heart`

## Custom Icons (Optional):

If you want to use custom icons:

1. Save your icon files here (PNG, SVG recommended)
2. Update the HTML to reference your custom icons
3. Example:
   ```html
   <img src="assets/icons/custom-icon.svg" alt="Custom Icon">
   ```

## Custom Favicon:

To add a custom favicon (the icon in the browser tab):

1. Create a favicon (16x16 or 32x32 pixels)
2. Save as `favicon.ico` or `favicon.png`
3. Place in the root folder (not in this folder)
4. Add to `index.html` in the `<head>` section:
   ```html
   <link rel="icon" type="image/png" href="favicon.png">
   ```

## Free Icon Resources:

- [Font Awesome](https://fontawesome.com) - Already included
- [Flaticon](https://flaticon.com) - Free icon sets
- [Icons8](https://icons8.com) - Large collection
- [Heroicons](https://heroicons.com) - Beautiful SVG icons
- [Favicon Generator](https://favicon.io) - Create favicons easily
