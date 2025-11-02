# My CS50 Final Project – Astro Blog
#### Video Demo:  <URL HERE>
#### Description:

## Introduction
I built this blog from scratch with [astro](https://astro.build/) following the [introduction tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and improving upon it, applying my own styling and adding more functionality following the docs \(and with some help of Claude AI\). I also used Claude in situations where i didn't understand why something wasn't working, for finding fitting colors and such or to explain concepts to me and help me understand them. I tried Claude Code with VSCode extension to see how it works.

The page is deployed via netlify [here](https://deluxe-frangipane-d091d8.netlify.app/).

I think i made a mistake setting up vscode because it didn't use the mwansich account but another github account that's also mine. It happened because i already had github desktop installed from earlier where i had to change the settings. I only found out later how to do this. So now my other account is the main contributor.. i used this as an oppurtunity though to get used to github and started to collaborate with myself on the repository from another pc. I can show proof i own that account too in my video, i hope. I later changed the account in the settings of both machines.

## Project Structure
- ``public/``contains favicon and robots.txt
- ``src/blog`` contains all the blogposts as markdown files
- ``src/components`` contains several components, basic building blocks of any Astro project, used throughout the whole website
- ``src/img`` contains all images used throughout the whole website
- ``src/layouts`` contains the main layouts ``BaseLayout.astro``and ``MarkdownPostLayout.astro``. They are basically templates for all the other pages and for the Blog-Posts
- ``src/pages`` contains all the actual pages of the website. ``/archive``, ``/posts`` and ``/tags`` are folders because they contain astro files that generate several pages from the blog collection
- ``src/scripts`` contains a script for the hamburger menu from the tutorial and for the search functionality
- ``src/styles`` contains the ``global.css`` file used for styling the page
- the ``content.config.ts`` is used to define a collection \(the blog\) and a schema for that collection

## Pages
### index.astro
The landing page ``index.html`` or ``index.astro`` features a greeting from the astro tutorial and some introductory text \(the same as above\).
I added a featured post \(or posts\) section. If there's more than one featured post it will say "Featured Posts", if there's only one it will say "Featured Post". It automatically displays posts that have "featured: yes" in their frontmatter. Frontmatter attributes are defined in ``content.config.ts``.

### blog.astro
The blog page. Shows the most recent posts from the collection sorted by date. Right now it's set to three. Also diplays a search bar to search all blog posts and a link to the archive.

### about.astro
The about page. Show some facts about me, a fake ai generated picture from [thispersondoesnotexist.com](thispersondoesnotexist.com) and some more information.

### search.astro
Implemented a search function following [this tutorial](https://youtu.be/XnV_2MWqAhQ?feature=shared) using [fuse.js](https://www.fusejs.io/) to search the blog. It is written in the typscript file /scripts/search.ts

### pictures.astro
Just displays all pictures used as images for the blogposts that are stored in the blog collection.

## archive/
The archive folder contains a \[page\].astro file. This file makes use of astros paginate function to dynamically generate pages for a certain number of archived blogposts. For testing purposes it's one blog post per page.

## posts/
The posts folder contains a \[...slug\].astro file that generates a static path and individual pages for each md file in ``/src/blog`` \(all posts in the blog collection\) using astros render function.

## tags/
The tags folder contains an index page that show an index of all tags used in the blog collection and a \[tag\].astro file that generates static paths and pages for all tags containing all posts with that tag.

## Pictures
Images can be stored in the ``/public`` folder but Astro also is able to process and optimize images stored in the ``src``folder with the built-in ``<Image />`` component. Since i wanted to use images from the ``src/img`` folder in my blog posts i had to implement the image helper according to the [docs](https://docs.astro.build/en/guides/images/#images-in-content-collections). The used pictures are analogue photographies i took myself btw.

## Components
Astro makes use of so called components that are the basic building blocks of any Astro project.

### BlogPost
- part of the Astro tutorial; changed to another structure also including image etc.
- takes variables url, title, date, image, alt, description and author via Astro.props and outputs a thumbnail for the respective post

### Footer
Footer for the BaseLayout; part of the Astro tutorial. I added the Poststats component and the imprint. The script that uses the white or dark astro logo was generated by claude.ai.

### Greeting
A preact component to show different greetings on the main page to showcase how this works in astro; part of the Astro tutorial.

### Hamburger
A hamburger icon to replace the navbar on small screens; part of the Astro tutorial.

### Header
Header used in the BaseLayout; part of the Astro tutorial.

### morePosts
The morePosts component is used in the MarkdownPostLayout. It generates a div that shows more random posts from the collection. On bigger screens it shows 3 posts next to each other and on smaller screens it shows 4 posts, either two side by side or one after another. It gets all the posts from the blog collection while filtering out the current post the user is viewing and shuffles the array of posts around randomly, then slicing it to 4 posts. A loop makes four figures as thumbnails that link to these posts. The 4th post gets an id that allows to give it display:none styling when on bigger screens, to achieve the above mentioned effect.

### Navigation
The links/routes that appear in the header; part of the Astro tutorial.

### PostStats
Displays the total number of blog posts and unique tags; was made via prompt to Claude Code.

### SearchBar
The SearchBar component implements a searchbar with javascript that uses [DOMpurify](https://www.npmjs.com/package/dompurify) to sanitize the input and sends the query to the /search route. It's used on the Blog and Archive page.

### Social
Used to generate links to social sites; part of the Astro tutorial; changed to also take top level domain as variable.

### ThemeIcon
An icon for light/dark theme toggle with javascript to switch themes by adding or removing a .dark class; part of the Astro tutorial.

## Posts
The posts are .md files that consist of a frontmatter and the main content of the blogpost. The file name will be the so called slug how it appears in the URL.

## Styles
### global.css
The main css file.

## Scripts
### menu.js
The toggle script for the hamburger menu button; part of the Astro tutorial.
### search.ts
The script for the search page.