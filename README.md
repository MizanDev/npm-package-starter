<p align="center">
  <a href="https://twitter.com/mizandev">
    <img alt="Create with Mizan" src="https://raw.githubusercontent.com/MizanDev/assets/main/images/icons/favicon/favicon-96x96.png" />
  </a>
</p>
<h1 align="center">
  @mizandev/gatsby-mport
</h1>

<p align="center">
  <a href="https://github.com/MizanDev/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@mizandev/gatsby-mport is released under the MIT license." />
  </a>
</p>

Playful and Colorful One-Page portfolio featuring Parallax effects and animations. Especially designers and/or photographers will love this theme! Built with [MDX](https://mdxjs.com/) and [Theme UI](https://theme-ui.com/).

## Features

- Theme UI-based theming
- react-spring parallax effect
- CSS Animations on Shapes
- Light/Dark mode

## Installation

### Install as a starter

This will generate a new site (with the folder name "mport") that pre-configures use of the theme including example content and additional plugins.

```sh
gatsby new mport MizanDev/gatsby-mport
```

[**View the starter's code**](https://github.com/MizanDev/gatsby-mport)

## Usage

### Theme options

| Key        | Default Value | Description                                                                                             |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| `basePath` | `/`           | Root url for the theme                                                                                  |
| `mdx`      | `true`        | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass false to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@MizanDev/gatsby-mport`,
      options: {
        // basePath defaults to `/`
        basePath: `/sideproject`,
      },
    },
  ],
};
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Mizan M`,
    // Default title of the page
    siteTitleAlt: `Web & App Dev`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Amazing Web & App creation with React, Angular, Laravel or WordPress`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://mizan.dev`,
    // Used for SEO
    siteDescription: `Hi, I'm Mizan. I make aesthetic web & app experience for companies of all sizes`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/static/images/banner_512x512.png`,
    // Twitter Handle
    author: `@mizandev`,
  },
};
```

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/gatsby-mport` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Editing the content

The content of the page is managed by `.mdx` files inside the theme's `sections` folder. You can edit the files by shadowing them in your site.

These files are available: `intro.mdx`, `projects.mdx`, `about.mdx`, `contact.mdx`

mdx`:

```md
# Hi, I'm Jane Doe

I'm creating noice web experiences for the next generation of consumer-facing companies
```

> The other headings should be `<h2>` headings!

You also have access to the `<ProjectCard />` component/shortcode which is used in the `projects.mdx` section. The component takes the props `title` (string), `link` (string), `bg` (string) and `children` (React.ReactNode).