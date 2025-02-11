# CyberRangeᶜᶻ Platform Theme

This project unifies theme, styles, fonts, icons, and other assets for CyberRangeᶜᶻ Platform.

## Usage

To use the theme in your project follow these steps:

1. Run `npm install @cyberrangecz-platform/theme`
2. Import `"@cyberrangecz-platform/theme/theming/apply-theme.scss"` either in your global `styles.scss` or in your `angular.json` file, under the `styles` array.

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

Assets are available in `"@cyberrangecz-platform/theme/assets`.

In case you want more fine-grained control, you can use individual files from the theme package:

```
projects/frontend-theme/theming/
├── apply-theme.scss                -> imports all theme files
├── definitions
│    ├── theme-definition.scss      -> contains $theme and $typography-theme variables
│    └── variables.scss             -> upon import, defines all theme variables 
└── styles
    ├── auth-provider.scss          -> login related styles
    ├── document.scss               -> styles for main document (html, body)
    ├── markdown.scss               -> styles for markdown and sentinel-markdown
    ├── misc.scss                   -> various small tweaks
    ├── panels.scss                 -> styles for various cards and panels
    ├── resizer.scss                -> styles for corner resizer for resizable elements
    ├── scrollbar.scss              -> styles for custom scrollbars
    └── styles.scss                 -> imports all styles files
```

## Prerequisites for development

- Node.js >=18.19.1
- Access to Sentinel repository

You need to set up the @sentinel scope to point to that registry. You can do this by
adding following lines to your .npmrc file:

```
@sentinel:registry=https://gitlab.ics.muni.cz/api/v4/projects/2396/packages/npm/
//gitlab.ics.muni.cz/api/v4/projects/2396/packages/npm/:_authToken=<YOUR_AUTH_TOKEN>
```

where `<YOUR_AUTH_TOKEN>` is a Gitlab access token with `read_registry` scope and `api` score of a user with access
to [Sentinel package repository](https://gitlab.ics.muni.cz/sentinel/sentinel-artifact-repository)

## Demo app

To run the demo app, simply install the dependencies with `npm install` and run the app using `npm start`. The app will be available at `http://localhost:4200`.
