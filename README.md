# My CS50 Final Project – Astro Blog
#### Video Demo:  https://youtu.be/Blu3kD41Oqo
#### Description: Blog built with Astro web framework featuring tags, an archive, an rss feed and basic search functionality

## Introduction
The purpose of this final project to me was to learn and build something that i want to use in the future. So basically i wanted to learn astro to build websites and i’m thinking about starting a blog in the future. Astro is a web framework based on javascript for building content-driven websites. It’s introduction tutorial is how to build a blog, so I started buiilding a blog using astro following the astro tutorial.

I built this blog from scratch with [astro](https://astro.build/) web framework following the [introduction tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and improving upon it, applying my own styling and adding more functionality following the docs \(and with some help of Claude AI\). See Astro Docs on how to set up. I also used Claude in situations where i didn't understand why something wasn't working to help me fix it, for finding fitting colors and such or to explain concepts to me and help me understand them. I used Visual Studio Code and node.js locally on my Mac. I tried Claude Code with VSCode extension a little bit to see how it works. I learned Astro, some Javascript/Typescript, Fuse.js, more CSS, how to use vscode/github/netflify and even more while doing this project.

The page is deployed via netlify [here](https://deluxe-frangipane-d091d8.netlify.app/) so i also learned how to do this with a github project.

Regarding Github:
I think i made a mistake setting up vscode because it didn't use the mwansich account but another github account that's also mine. It happened because i already had github desktop installed from earlier where i had to change the settings to use the correct account. I only found out later how to do this. So now my other account is the main contributor. I later changed the account in the settings of both machines.

As bascially a static website builder, astro has to build (npm run build) the actual contents of the page which than can be uploaded to a webserver. So most of the code in the astro project is being run at build time to generate the website. The ``dist`` folder that contains the built website is not included here. Netlify runs the build itself to deploy the site.

## Project Structure
- ``public/``contains favicon, robots.txt and stylesheet/png for rss feed (stylesheet from https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl was recommended by astro docs)
- ``src/assets``contains two versions of the astro logo for dark- and lightmode (i changed the dardmode logo myself to be white)
- ``src/blog`` contains all the blogposts as markdown files with astro-specific frontmatter defined in content.config.ts
- ``src/components`` contains several so called components, basic building blocks of any Astro project, used throughout the whole website, for example a header, a footer or one that produces thumbnails to individual blog posts
- ``src/img`` contains images used throughout the whole website
- ``src/layouts`` contains the main layouts ``BaseLayout.astro``and ``MarkdownPostLayout.astro``. They are basically templates for all the other pages and for the individual blog posts
- ``src/pages`` contains all the actual pages of the website. ``/archive``, ``/posts`` and ``/tags`` are folders because they contain astro files that generate several pages from the blog collection
- ``src/scripts`` contains a script for the hamburger menu from the tutorial and for the search functionality
- ``src/styles`` contains the ``global.css`` file used for styling the page
- the ``src/content.config.ts`` is used to define a collection \(the blog\) and a schema for that collection
- the rest are astro configuration files for packages, typescript, sitemap etc., a Claude configuration file and the readme file

## favicon, robots.txt and rss folder/png in public folder
I let claude generate the svg to have a custom favicon. The robots.txt, for now, just contains disallow for all user-agents to prevent any bot from accessing the page. The rss logo and stylesheet are used for the rss feed. All these files have to be in the public folder because they're not processed by astro at built time but need to be like this in the actual built webpage

## Pages
All the folders and files in this folder are responsible for handling routing, data loading, and overall page layout for every page of the website.
### index.astro
The landing page ``index.html`` or ``index.astro`` features a greeting from the astro tutorial and some introductory text. On every refresh a random greeting from a selection of possible words is displayed (this was part of the tutorial).
I added a featured post \(or posts\) section. If there's more than one featured post it will say "Featured Posts", if there's only one it will say "Featured Post". It automatically displays posts that have "featured: yes" in the frontmatter of their .md files. Expected frontmatter attributes are defined in ``content.config.ts``.

### blog.astro
The blog page. Shows the most recent posts from the collection sorted by date. Right now this is set to three so it only shows the three most recent posts. It also diplays a search bar to search all existing blog posts and a link to the archive page.

### about.astro
The about page. It presents some facts about me, a fake ai generated picture from [thispersondoesnotexist.com](thispersondoesnotexist.com) and some more information. It makes use of astros ability to define and use variables and functions inside the code. This was to learn that functionality.

### search.astro
On the search page I implemented a search function following [this tutorial](https://youtu.be/XnV_2MWqAhQ?feature=shared) using [fuse.js](https://www.fusejs.io/) to search the blog. It's reachable by inputting a search term in the search bar on the blog or archive pages. It is written in the typscript file ``/scripts/search.ts``. Title, date, tags, slug and description of every blog posts are searchable. I used fuse.js weighted search and configured the fuse instance \(line 74-102\) so that it searches all the given data and looks for an exact match. It needs input of at least two characters to do anything. I found this to make the most sense after trying out different options. Title, description, slug, tags and date of the posts are searched. The body of the blogpost is not searchable right now but could be added. I thought it's not needed. The searchable data can be seen at ``site/search.json``, see search.json.js file. The search results update live as the user types in the search bar.

### pictures.astro
Just displays all pictures used as images for the blogposts that are stored in the blog collection. First two pictures are eagerly loaded, the following pictures are lazy loaded. All are processed at build time using astro picture processing. This is used all over the website, where possible.

### archive/
The archive folder contains a \[page\].astro file. This file makes use of astros paginate function to dynamically generate pages for a certain number of archived blogposts. For testing purposes it's two blog posts per page. At the top the page display the years that the archived blogposts are from. It features next and previous buttons at the bottom of the page. It uses the Blogpost and the Searchbar component.

### posts/
The posts folder contains a \[...slug\].astro file that generates a static path and individual pages for each md file, hence each blog post, in ``/src/blog`` \(all posts in the blog collection\) using astros render function.

### tags/
The tags folder contains an index page that shows an index of all tags used in the blog collection and a \[tag\].astro file that generates static paths and pages for all tags, each containing all posts with that tag using the Blogpost component to display them.

### rss.xml.js
This file creates an RSS feed at ``site/rss.xml``. It uses [sanitize-html](https://www.npmjs.com/package/sanitize-html) and [markdown-it](https://github.com/markdown-it/markdown-it) to render the markdown body of the .md files as html with astros rss helper. The file is styled using a third party xsl file in public folder.

## Pictures
Images can be stored in the ``/public`` folder but Astro also is able to process and optimize images stored in the ``src``folder with the built-in ``<Image />`` component. Since i wanted to use images from the ``src/img`` folder in my blog posts i had to implement the image helper according to the [docs](https://docs.astro.build/en/guides/images/#images-in-content-collections). The used pictures are analogue photographies i took myself btw.

## Components
Astro makes use of so called components that are the basic building blocks of any Astro project.

### BlogPost
- part of the Astro tutorial; changed to another structure also including image etc.
- takes variables url, title, date, image, alt, description and author via Astro.props and outputs a thumbnail for the respective post
- used on the blog and archive page, individual tag pages and the homepage

### Footer
Footer for the BaseLayout; part of the Astro tutorial. I added the Poststats component and the imprint. The script that uses the white or dark astro logo was generated by claude.ai.

### Greeting
A preact component to show different greetings on the main page to showcase how this works in astro; part of the Astro tutorial.

### Hamburger
A hamburger icon to replace the navbar on small screens; part of the Astro tutorial.

### Header
Header used in the BaseLayout; part of the Astro tutorial.

### morePosts
The morePosts component is used in the MarkdownPostLayout. It generates a div that shows more random posts from the collection. On bigger screens it shows 3 posts next to each other and on smaller screens it shows 4 posts, either two side by side or one after another. It gets all the posts from the blog collection while filtering out the current post the user is viewing and shuffles the array of posts around randomly, then slicing it to 4 posts. A loop makes four figures as thumbnails that link to these posts. The 4th post gets an id that allows to give it display:none styling when on bigger screens, to achieve the above mentioned effect. This all happens on build time, so it's not dynamically changing the posts on refresh on the actual website.

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
The blogposts are .md files that consist of a frontmatter and the main content of the blogpost. The file name will be the so called slug how it appears in the URL.

## Styles
### global.css
The main css file. I did my own custom styling of all the blog elements for light and darkmode. 

## Scripts
### menu.js
The toggle script for the hamburger menu button; part of the Astro tutorial.
### search.ts
The script for the search page. (see search section above)

## CLAUDE.md
Configuration file for claude code, automatically generated

## Sitemap
I integrated a sitemap according to the astro docs, see https://docs.astro.build/en/guides/integrations-guide/sitemap/
It's generated at build ``site/sitemap-index.xml``, see for example https://deluxe-frangipane-d091d8.netlify.app/sitemap-0.xml