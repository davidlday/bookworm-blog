---
layout: post
title: Know Your Markets - Part 1
comments: true
excerpt: Ever wondered if you could use a computer to analyze a metric shit-ton of short stories at once and come away with something meaningful? I did. Here's what happened.
---
This is the first in a series of posts on using text analytics to understand the short story market in SF/F/H.

* [Part 1](/2015/01/19/know-your-markets-pt1/) covers the market as a whole.
* [Part 2](/2015/01/24/know-your-markets-pt2/) breaks down the market by the magazines I was able to sample.
* Part 3 (coming soon) looks at what's missing, what's likely wrong, and what comes next for this experiment.
* Raw Data (also coming soon) for those who want to run their own analysis.

---

Ever wondered if you could use a computer to analyze a metric shit-ton of short stories at once and come away with something meaningful?

I did.

So I whipped up some scripts, dusted off some of my analytical skills, and set off on an experiment to see what I could find out.

Here's what happened.

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 654px; height: 745px;'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Samples&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='745' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Samples' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Samples&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Bookworm-SFFHProShortStoryMarketAnalyisis/Samples' target='_blank'>Learn About Tableau</a></div></div>

I analyzed roughly 3,000 stories, all publicly available on their respective websites at the time of analysis (December 2014). These magazines represent, for the most part, a good set of professional short story markets in Science Fiction, Fantasy, and Horror. Here's a list of links to the magazines. You should check them out, perhaps buy an issue:

* [Apex Magazine](http://www.apex-magazine.com/)
* [Beneath Ceaseless Skies](http://www.beneath-ceaseless-skies.com/)
* [Buzzy Mag](http://buzzymag.com/)
* [Clarkesworld](http://clarkesworldmagazine.com/)
* [Daily Science Fiction](http://dailysciencefiction.com/)
* [Lightspeed Magazine](http://www.lightspeedmagazine.com/)
* [Nightmare Magazine](http://www.nightmare-magazine.com/)
* [Shimmer](http://www.shimmerzine.com/)
* [Strange Horizons](http://www.strangehorizons.com/)
* [Tor.com](http://www.tor.com/stories/prose)

How'd I pick these? I'm familiar with them in one way or another. Some I've submitted stories to while others I simply enjoy. Oh, and they had stories available publicly on their websites. Did I mention that? Anyhow, I believe they're all well respected, and while I don't think they all pay pro rates, they're close. Basically, a story placed in any of these is worth reading and probably earned the writer a pro credit.

I started out exploring...

# Readability

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 654px; height: 1095px;'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Readability&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='1095' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Readability' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Readability&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Bookworm-SFFHProShortStoryMarketAnalyisis/Readability' target='_blank'>Learn About Tableau</a></div></div>

Readability is typically used to measure the complexity of a document. There are several measures, most of which try to align to a U.S. grade level. You can find a list of links to the various measure represented here on the [Measuring Fiction](/metrics/) page.

For my purpose, I'm not particularly interested in grade level, nor do I believe the measures provide any value judgement in this context. A story with a [Coleman-Liau Index](http://en.wikipedia.org/wiki/Coleman-Liau_Index) of 7 is neither better nor worse than one with an index of 4.

What I do believe, however, is that the readership of these magazines have preferences, and those preferences include a tolerance for a range of complexity. And all five of the readability measures demonstrate that this preference likely exists. Overall, we see a nice peak in all five graphs. For instance, the Coleman-Liau histogram shows that the bulk of stories analyzed fall between 5 and 9, meaning if you story isn't in this range, then statistically speaking you're less likely to make a sale to any of these magazines.

Next I moved on to...

## Point of View

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 654px; height: 745px;'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;PointofView&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='745' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Bookworm-SFFHProShortStoryMarketAnalyisis&#47;PointofView' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;PointofView&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Bookworm-SFFHProShortStoryMarketAnalyisis/PointofView' target='_blank'>Learn About Tableau</a></div></div>

I originally thought point of view would be difficult to figure out, but I wound up finding a pretty simple formula that seems to work. I stripped out all the dialogue then counted POV indicators (First: I, we; Second: you; Third: he, she, it, they). Whichever had the most won. It's a rough estimate, but in my spot checking I found it to be accurate.

There's a clear preference overall for stories told in the third person POV, nearly double that of first person, and a very low number of stories told in second. Second person can be used effectively, and if you look at the underlying data you can find links to the stories analyzed. But your chances of selling a story written in third person are higher. Much higher.

Since I had to strip out dialogue to analyze this, my next natural target was...

## Dialogue

How much is too much? There seems to be a real answer.

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 654px; height: 745px;'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Dialogue&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='745' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Dialogue' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;Dialogue&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Bookworm-SFFHProShortStoryMarketAnalyisis/Dialogue' target='_blank'>Learn About Tableau</a></div></div>

This was an interesting byproduct of trying to figure out POV. I was able to see how much of a story was spent in dialogue, dialogue being anything between double quotes. Not 100% accurate, and it doesn't account for dialogue written in non-standard ways or quoted words that aren't dialogue, but it's good enough for a discussion.

It looks like 25% is the tipping point. Beyond that is likely too much unless the overabundance of dialogue directly contributes to the artistic aspects of the story. Some examples:

* [Writing on the Wall](http://dailysciencefiction.com/science-fiction/robots-and-computers/vaughan-stanger/writing-on-the-wall) by Vaughn Stanger
* [Crisis on Titan](http://dailysciencefiction.com/science-fiction/future-societies/powers-smith/crisis-on-titan) by Powers-Smith

By the way, I measured this in both words and syllables because I was curious if there would be any difference. Not really. At least not here.

But I also wondered about words and syllables, and the things they construct. So, what about...

## Word and Sentence Length

<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 654px; height: 745px;'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;WordsSentenceLength&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='745' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Bookworm-SFFHProShortStoryMarketAnalyisis&#47;WordsSentenceLength' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;publicrevizit.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Bookworm-SFFHProShortStoryMarketAnalyisis&#47;WordsSentenceLength&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='showVizHome' value='no' /></object></div><div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Bookworm-SFFHProShortStoryMarketAnalyisis/WordsSentenceLength' target='_blank'>Learn About Tableau</a></div></div>

We all know about word count, but I wondered whether there were boundaries for length of word and length of sentence. There do seem to be patterns, but I'm not sure how relevant those patterns are to these specific magazines. Comparing these to some other set of documents, say stories in a completely different genre, might show some significance.

# Conclusions

Overall, these magazines seem to show preferences for readability, point of view, amount of dialogue, and length of words and sentences. Further, these are all things a writer can measure and adapt to. Readability is a little tough, but just being aware of it can help a writer adjust.

Don't get me wrong. I don't think adjusting to meet these preferences will make a sale. If you can't produce the art, the craft won't mean shit, but the same goes the other way around.

In Part 2, I'll look at individual magazines to see if there are any variations between them.

In Part 3, I'll discuss what's missing, what's likely wrong, and where I might go from here.
