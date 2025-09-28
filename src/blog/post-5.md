---
title: "Using the image helper function"
author: "M"
description: "This post is using a local image from the /src folder for the first time."
cover: "../img/000994400010.jpg"
coverAlt: "man sitting between a lot of bicycles, his back turned to the camera"
pubDate: 2025-08-31
featured: "yes"
tags: ["astro", "nightshift", "images"]
---
# Accomplishments
Posts should now be in the correct order on the ``/blog`` page because of a newly added sort function. And this post is using a local image from the ``/src`` folder for the first time. As now do all the other posts. 

# Problems
I tried to do this late in the evening and it took me while, turning the short session into a nightshift. I gave up and went to sleep. The next day i realized the image helper function i implemented worked perfectly fine but the site wouldn't build because i did not pass the alt variable correctly to the BlogPost component that's used for rendering Blogposts. After fixing that, everything worked.

# Outcome
I now know how to use images stored in ``src`` in a collection with astros image helper function.  