---
title: "Content Collections"
author: "M"
description: "I finished the tutorial and made the switch to using a content collection."
cover: "../img/000084780005.jpg"
coverAlt: "people walking, photo taken from above"
pubDate: 2024-08-28
featured: "no"
tags: ["astro", "blogging", "collections"]
---
After a successfully finishing the tutorial i decided to also make the switch to content collections. A collection is now used for the blogposts. The blog collection and the schema is defined in content.config.ts. The schema defines what is expected in each blogposts frontmatter. The collection can be accessed via the getCollection function imported from "astro:content". According to the astro docs they "are the best way to manage sets of content in any Astro project."