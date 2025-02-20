# CyberRangeᶜᶻ Platform Theme

This project unifies theme, styles, fonts, icons, and other assets for CyberRangeᶜᶻ Platform.

## Usage

### Assets

Assets are available for import at `"@crczp/theme/assets`.

To use the assets in your app, include them in your build under desired output path:
```json
"options": {
    "assets": [
        {
            "glob": "**/*",
            "input": "node_modules/@crczp/theme/assets",
            "output": "assets/"
        }
    ]
}
```

Afterward assets can then be accessed like this:
```html
<img src="/assets/logo/logo.svg" alt="CyberRangeᶜᶻ Platform logo">
```

### Components

Components are available for import at `"@crczp/theme/components`. They are standalone and require the theme variables to be accessible.

### Styles and theme

1. Run `npm install @crczp/theme`
2. Import `"@crczp/theme/theming/apply-all.scss"` either in your global `styles.scss` or in your `angular.json` file, under the `styles` array.

- This will apply the theme and styles to your project automatically.
- Variables for theme colors will be automatically available in your project. Format is `--<color>-<shade>`. For example, `--primary-50` will give you the primary color with shade 50.
- All color types are:
    - `primary`
    - `secondary`
    - `tertiary`
    - `neutral`
    - `neutral-variant`
    - `error`
- Available shades are: `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100`

In case you want more fine-grained control over styles applied, you can use individual styles from `/theming/styles`.


