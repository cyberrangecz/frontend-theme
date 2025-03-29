# CyberRangeᶜᶻ Platform Theme

This project unifies theme, styles, fonts, icons, and other assets for CyberRangeᶜᶻ Platform.

## Util styles cheatsheet

### Color variables

| Variable name               | options                                                          | description                                    |
|-----------------------------|------------------------------------------------------------------|------------------------------------------------|
| `--primary-<shade>`         | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Primary color shades                           |
| `--secondary-<shade>`       | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Secondary color shades                         |
| `--tertiary-<shade>`        | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Tertiary color shades                          |
| `--neutral-<shade>`         | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Neutral color shades                           |
| `--neutral-variant-<shade>` | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Neutral variant color shades                   |
| `--error-<shade>`           | `0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100` | Error color shades                             |
| `--primary`                 |                                                                  | Primary color, equivalent to `--primary-40`    |
| `--background`              |                                                                  | Background color, equivalent to `--neutral-98` |

### Color classes

| Class name              | options                                                  | description                                                                  |
|-------------------------|----------------------------------------------------------|------------------------------------------------------------------------------|
| `bg-<shade>`            | `any valid shade`                                        | Set background color to shade of primary                                     |
| `fg-<shade>`            | `any valid shade`                                        | Set foreground color to shade of primary                                     |
| `bg-<prefix>-<shade>`   | `any prefix (primary, secondary,..) and any valid shade` | Set background color to shade of prefix                                      |
| `fg-<prefix>-<shade>`   | `any prefix (primary, secondary,..) and any valid shade` | Set foreground color to shade of prefix                                      |
| `bg-<shade>-f`          | `any valid shade`                                        | Set background color to shade of primary with !important to override Angular |
| `fg-<shade>-f`          | `any valid shade`                                        | Set foreground color to shade of primary with !important to override Angular |
| `bg-<prefix>-<shade>-f` | `any prefix (primary, secondary,..) and any valid shade` | Set background color to shade of prefix with !important to override Angular  |
| `fg-<prefix>-<shade>-f` | `any prefix (primary, secondary,..) and any valid shade` | Set foreground color to shade of prefix with !important to override Angular  |
| `bg-primary`            |                                                          | Set background color to default primary shade, equivalent to `bg-primary-40` |
| `fg-primary-f`          |                                                          | Set foreground color to default primary shade, with !imporant attribute      |
| `bg-neutral`            |                                                          | Set background color to default neutral shade, equivalent to `bg-neutral-98` |
| `fg-neutral-f`          |                                                          | Set foreground color to default neutral shade, with !imporant attribute      |


### Flexbox

| Class name                  | description                   |
|-----------------------------|-------------------------------|
| `vertical-flex / --vflex`   | Colunn flexbox                |
| `horizontal-flex / --hflex` | Row flexbox                   |
| `jc-fs`                     | Justify content flex-start    |
| `jc-fe`                     | Justify content flex-end      |
| `jc-c`                      | Justify content center        |
| `jc-sb`                     | Justify content space-between |
| `jc-sa`                     | Justify content space-around  |
| `ai-fs`                     | Align items flex-start        |
| `ai-fe`                     | Align items flex-end          |
| `ai-c`                      | Align items center            |
| `ai-s`                      | Align items stretch           |
| `ai-b`                      | Align items baseline          |


### Size

| Class name    | options                         | description           |
|---------------|---------------------------------|-----------------------|
| `wh-100`      |                                 | Width and height 100% |
| `w-<percent>` | 10, 20, 25, 30,..., 90, 100     | Width percentage      |
| `h-<percent>` | 10, 20, 25, 30,..., 90, 100     | Height percentage     |
| `w-<size>rem` | 0.25, 0.5, 0.75, 1, .., 3.75, 4 | Width in rem          |
| `mv-1920`     |                                 | Maximum width 1920px  |
| `mv-1280`     |                                 | Maximum width 1280px  |


### Spacing

| Class name      | options                         | description              |
|-----------------|---------------------------------|--------------------------|
| `g-<size>rem`   | 0.25, 0.5, 0.75, 1, .., 3.75, 4 | Gap in rem               |
| `m-<size>rem`   | 0.25, 0.5, 0.75, 1, .., 3.75, 4 | Margin in rem            |
| `p-<size>rem`   | 0.25, 0.5, 0.75, 1, .., 3.75, 4 | Padding in rem           |
| `p-<size>rem-t` | 10, 20, 25, 30,..., 90, 100     | Padding in rem at top    |
| `p-<size>rem-b` | 10, 20, 25, 30,..., 90, 100     | Padding in rem at bottom |
| `p-<size>rem-l` | 10, 20, 25, 30,..., 90, 100     | Padding in rem at left   |
| `p-<size>rem-r` | 10, 20, 25, 30,..., 90, 100     | Padding in rem at right  |
| `m-<size>rem-t` | 10, 20, 25, 30,..., 90, 100     | Margin in rem at top     |
| `m-<size>rem-b` | 10, 20, 25, 30,..., 90, 100     | Margin in rem at bottom  |
| `m-<size>rem-l` | 10, 20, 25, 30,..., 90, 100     | Margin in rem at left    |
| `m-<size>rem-r` | 10, 20, 25, 30,..., 90, 100     | Margin in rem at right   |

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
2. Import `"@crczp/theme/theming/apply-all.scss"` in your global `styles.scss` or `"node_modules/@crczp/theme/theming/apply-all.scss"` in your `angular.json`, under the `styles` array.

- This will apply the theme and styles to your project automatically.

In case you want more fine-grained control over styles applied, you can use individual styles from `/theming/styles`.

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
