# My CS50 Final Project – Astro Blog
#### Video Demo:  <URL HERE>
#### Description:

## Introduction
I built this blog from scratch with [astro](https://astro.build/) following the [introduction tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and improving upon it, applying my own styling and adding more functionality following the docs \(and with some help of Claude AI\). I also used Claude in situations where i didnt understand why something wasnt working and for help finding fitting colors and such or to explain concepts to me and help me understand.

The page is deployed via netlify [here](https://deluxe-frangipane-d091d8.netlify.app/).

I think i made a mistake setting up vscode because it didnt use the mwansich but another github account that's also mine. It happened because i had github desktop where i had to change the settings. I only found out later how to do this. So now my other account is the main contributor.. i used this as an oppurtunity though to get used to github and started to collaborate with myself on the repository from another pc. I can show proof i own that account too in my video, i hope.

## Project Structure
- ``src/blog`` contains all the blogposts as markdown files
- ``src/components`` contains several components, basic building blocks of any Astro project, used throughout the whole website
- ``src/img`` contains all images used throughout the whole website
- ``src/layouts`` contains the main layouts ``BaseLayout.astro``and ``MarkdownPostLayout.astro``. They are basically templates for all the other pages and for the Blog-Posts
- ``src/pages`` contains all the actual pages of the website. ``/archive``, ``/posts`` and ``/tags`` are folders because they contain astro files that generate several pages from the blog collection
- ``src/scripts`` contains a script for the hamburger menu from the tutorial
- ``src/styles`` contains the ``global.css`` file used for styling the page
- the ``content.config.ts`` is used to define a collection \(the blog\) and a schema for the collection

## Pages
### index.astro
The landing page ``index.html`` or ``index.astro`` features a greeting from the astro tutorial and some introductory text \(the same as above\).
I added a featured posts \(or posts\) section. If there's more than one featured post it will say "Featured Posts", if there's only one it will say "Featured Post". It automatically displays posts that have "featured: yes" in their frontmatter. Frontmatter attributes are defined in ``content.config.ts``

### blog.astro
the blog page

### about.astro
the about page

## archive/
The archive folder contains a \[page\].astro file. This file makes use of astros paginate function to dynamically generate pages for a certain number of archived blogposts. For testing purposes it's one blog post per page.

## posts/
The posts folder contains a \[...slug\].astro file that generates a static path and individual pages for each md file in ``/src/blog`` \(all posts in the blog collection\) using astros render function.

## tags/
The tags folder contains an index page that show an index of all tags used in the blog collection and a \[tag\].astro file that generates static paths and pages for all tags containing all posts with that tag.