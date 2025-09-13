# My CS50 Final Project – Astro Blog
#### Video Demo:  <URL HERE>
#### Description:

## Introduction
I built this blog from scratch with [astro](https://astro.build/) following the [introduction tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and improving upon it, applying my own styling and adding more functionality following the docs \(and with some help of Claude AI\). I also used Claude in situations where i didnt understand why something wasnt working and for help finding fitting colors and such or to explain concepts to me and help me understand.

The page is deployed via netlify [here](https://deluxe-frangipane-d091d8.netlify.app/).



## Project Structure
- ``src/blog`` contains all the blogposts as markdown files
- ``src/components`` contains several components, basic building blocks of any Astro project, used throughout the whole website
- ``src/img`` contains all images used throughout the whole website
- ``src/layouts`` contains the main layouts ``BaseLayout.astro``and ``MarkdownPostLayout.astro``. They are basically templates for all the other pages and for the Blog-Posts
- ``src/pages`` contains all the actual pages of the website. ``/archive``, ``/posts`` and ``/tags`` are folders because they contain astro files that generate several pages from the blog collection
- ``src/scripts`` contains a script for the hamburger menu from the tutorial
- ``src/styles`` contains the ``global.css`` file used for styling the page
- the ``content.config.ts`` is used to define a collection \(the blog\) and a schema for the collection

## index.html
The landing page ``index.html`` or ``index.astro`` features a greeting from the astro tutorial and some introductory text \(the same as above\).
I added a featured posts \(or posts\) section. If there's more than one featured post it will say "Featured Posts", if there's only one it will say "Featured Post". It automatically displays posts that have "featured: yes" in their frontmatter.

