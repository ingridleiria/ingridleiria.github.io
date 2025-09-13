# Ingrid Leiria's Website

This repository hosts the source for the personal website of Ingrid Rafaele Rodrigues Leiria.

## Installation

The site is built with [Jekyll](https://jekyllrb.com/). To work on it locally you will need:

- Ruby and Bundler
- Node.js and npm

Install dependencies:

```bash
bundle install
npm install
```

## Running the site locally

Start a local server with live reload:

```bash
npm start
```

Visit `http://localhost:4000` in your browser.

## Building the site

Create a production build:

```bash
npm run build
```

The generated site will be in the `_site` directory.

## Contributing new process pages

1. Create a Markdown file in the `process` directory (create the folder if it does not yet exist).
2. Add the following front matter at the top of the file:

```markdown
---
layout: page
title: My Process Title
---
```

3. Write the content of your process page below the front matter.
4. Update navigation or links in `_config.yml` as needed.
5. Commit your changes and open a pull request.
