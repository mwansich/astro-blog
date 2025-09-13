---
title: "My Fith Blog Post"
author: "M"
description: "This post will show up on its own too!"
cover: "../img/backyard.jpg"
coverAlt: "test"
pubDate: 2025-08-31
featured: "yes"
tags: ["astro", "nightshift"]
---
# Accomplishments
This post should now show up with my other blog posts, because i'm not using `import.meta.glob()` any longer but a collection instead. Also posts should now be in the correct order on ``/blog`` because of a newly added sort function. And this post is using a local image from the ``/src`` folder for the first time. As now do all the other posts. 

# Problems
I tried to do this late in the evening and it took me while, turning the short session into a nightshift. I gave up and went to sleep. The next day i realized the image helper function i implemented worked perfectly fine but the site wouldn't build because i did not pass the alt variable correctly to the BlogPost component that's used for rendering Blogposts. After fixing that, everything worked.