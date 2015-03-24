---
layout: post
title: Updated Tools
comments: true
noToc: true
---

I've spent the past month making updates to the experimental tools and cleaning up the site in general. I've decluttered the menu by consolidating the informational pages. I've also added a change log page to start tracking changes I've rolled out over time. See the [Change Log](/changelog/) for details.

In general, I've been focused on making the [analyzer](/tools/analyze/) produce something meaningful by giving context to the metrics. The idea is to see how similar in style a piece is to those published by the magazines.

Basically it shows how far the stats on a piece deviate from those of the magazines. The summary gauges are an average of the deviation for all metrics of a magazine. If the marker falls in the green (right), statistically speaking the piece falls in line with a significantly large portion of the stories published in that magazine. Markers in the yellow (middle) mean a smaller portion of statistically similar stories exist in that magazine, but still some. And markers in the red (left) mean no stories (or almost no stories) are statistically similar for that magazine. You can also see how the piece ranks on each metric per magazine. The detail gauges for each magazine have green in the middle because a score could be above or below the statistical mean, but other than that, the colors mean the same as the summary gauges.

The analyzer also does a search on all indexed stories to come up with a list of similar works. This is unrelated to the metrics, is a function of the search engine, and uses what it thinks are interesting terms. It will always come back with an answer, and gives more of an idea of stories using similar words. You can use it to get an idea of where a story might fit in terms of subject. It also shows how many stories in the top 100 come from each magazine to give a relative ranking of magazines, again just to get an idea of if a story is a better fit at some magazines than others.

I've also updated the [Story Search](/tools/storysearch/) to do some typeahead when entering terms and to also bring back a short list of similar stories (using the same method in the analyzer) for each story in the result set. It's purely for research and exploration. Want to see who's writing about [Smurfs](/tools/storysearch/?q=smurf)? How about stories involving [Twitter](/tools/storysearch/?q=twitter)?

Finally, I've made some improvements to the [Statistics](/tools/statistics/) page but shortening load time and having the search engine do a lot of the calculations. I also changed to a prettier, easier to work with charting library. And I've added a link to download all the data I have.

{% include bwdownload.html %}

Enjoy!

D.