---
layout: post
title: Know Your Markets - Part 3
comments: true
excerpt: So what does all of this analysis really mean? What's missing? Are there any wrong assumptions? And what comes next for this experiment?
---
This is the third and last post in a series on my initial experiment in using text analytics to understand the short story market in SF/F/H.

* [Part 1](/2015/01/19/know-your-markets-pt1/) covers the market as a whole.
* [Part 2](/2015/01/24/know-your-markets-pt2/) breaks down the market by the magazines I was able to sample.
* [Part 3](/2015/02/06/know-your-markets-pt3/) looks at what's missing, what's likely wrong, and what comes next for this experiment.
* [Raw Data](http://bookworm.davidlday.com/public/scripts/storysearch.py?q=*&wt=csv&rows=99999999) in CSV form for those who want to run their own analysis.

---

This is the last post for this initial experiment, but not the end by any means. I'm going to address some stuff around readability metrics, talk a little about some of the assumptions I made, and share on what comes next.

If you don't want to slog through all this dry crap, even though there are sock puppets involved, and just want to know what this is good for today, skip to the bit about the [Analyzer](#analyzer). I've created a page that let's you run a piece through using the same code I used so you can compare it to the stats from the analyzed magazines and perhaps get an idea of the chances that story would be accepted, assuming it meets genre and length requirements.

Perhaps (says the sock puppet).

To know why perhaps not, read the whole thing. I promise there are sock puppets. Really.

# The Trap of Readability Metrics

Readability measures have a stigma around them. In all the posts I've read where a writer has gone through a similar investigation, the logic seems to go like this:

1. A sample of commercial fiction has an average Flesch-Kincaid Grade Level of 4-ish.
2. The New York Times and most major news publications have similar scores.
3. Most Americans read at a 4th-grade level.
4. Therefore, those writers of commercial fiction are specifically targeting their writing at 4th graders.
5. I should target writing at a 4th-grade level.

[Here's](http://mabfan.livejournal.com/105017.html) a prime example. From the post, toward the end:

> Finally, on the Flesch-Kincaid Grade Level scale, the range was 2.68 to 6.3, with an average grade level of 4.4.
> In other words, he found that the bestselling writers were aiming their prose, prose that is read by a majority of adult readers in the country, at a fourth grade level.

I think this is a big leap. The assumption is that the writer is intentionally crafting their work for a specific grade level, which also assumes that the Flesch-Kincaid Grade Level scale (or any of the readability scores that spit out a grade level) is an accurate, universal measure of the education level needed to comprehend a piece of text. It's not. None of them are. Not by a long shot. Just ask any sock puppet.

On [Lit2Go](http://etc.usf.edu/lit2go/), a free online collection of stories and poems in MP3 format associated with the University of South Florida, we find this in the FAQ section:

> While Flesch-Kincaid may be a useful tool for comparing the complexity of different passages, whether or not a given passage is appropriate for a given reader depends on several other factors, including: background knowledge of the reader, reader interest in the subject matter, text genre, and the level of support provided during reading.

What [Lit2Go](http://etc.usf.edu/lit2go/welcome/faq/) is saying is that while Flesch-Kincaid purports to tell us what grade level a reader must be at to comprehend a text, it isn't accurate, and appropriateness of the text relies on a much broader context.

Then there's this post: ["Can You Trust Your Flesch-Kincaid Readability Scores?"](http://www.tomnunamaker.com/can-you-trust-your-flesch-kincaid-readability-scores/31124/). Basically the author ran the same article through a bunch of readability scoring tools and compared the results. Scores varied significantly. In fact, the grade level ranged from 4.3 to 14. You can't take scores from different scoring tools and trust the comparison, nor can you reliably say the grade level spit out by any particular score is, in fact, truly indicative of the actual grade level needed to comprehend a piece of text.

In short, these scores aren't generally useful for identifying a grade level. You can't trust them.

So I'm asking that we forgot completely that these scores somehow gauge the education level a reader needs to understand a story.

## What Are Readability Scores Good For?

I think I've demonstrated in my prior post that these measures are still useful *when used in context*. They aren't absolute scores, like grade level, but relative scores that give some insight into a reader's preference. In every magazine, and in every readability score used, there is a clear peak and a clear distribution. Further, those peaks and distributions are different across the magazines.

So readability scores can give insight into a reader's preference, but that preference isn't related to grade level, and the reader I measured isn't the collective readership of the magazines. The preference measured is that of the editorial staff. These stories were selected by a process that probably involved at least two readers: a slush reader who screens submission and an editor who picks from the stories that made it through the slush pile.

The editors of these magazines know their readership. Trust them. Sock puppets do.

I started slush reading two years ago. While I don't go to great lengths to keep which magazine I read for a secret, it's not important in this context. Just know that I've spent some time learning from the slush pile, and it's an invaluable experience. It's also a painful experience at times, both because I wind up reading stuff that's way off the mark, and because I'm learning about where I'm way off the mark in my own writing. But unless you spend time slush reading, the reality of what comes through the submission pipelines of these magazines is difficult to grasp.

We know things like spelling and grammar are fundamental, which is why I've completely ignored them in this experiment. Those are easy to measure and compare. Either a word is spelled right or it isn't. Grammar is a little looser, but still it's pretty much either right or wrong. A writer doesn't need to narrow the context down to know if spelling and grammar are a fit.

Style, on the other hand, is difficult to capture. Things like vocabulary and sentence construction aren't black and white, right or wrong, they're a matter of choice (on the writer's part) or preference (on the reader's part). Readability scores, along with things like point of view and amount of dialogue, are a start to measuring choice and preference. By measuring certain aspects of a story and comparing those results to the same measures of all stories selected for publication in a particular magazine, we can begin to estimate how likely it is that story is a fit. The closer the numbers line up, the more likely that story will be accepted.

It now becomes possible to estimate prior to submission which markets are most likely to consider publishing your work.

Except that's not quite right.

# Something Important is Missing

Sometimes it's just as important to know what someone doesn't like as it is to know what someone does like.

This experiment suffers from [survivorship bias](http://en.wikipedia.org/wiki/Survivorship_bias). It only considers those stories that made it through the submissions process.

One of the main reasons I became a slush reader, and continue to do so, is because I believe that only looking at success can lead to blindness and bad choices.

What I'm about to suggest might scare you. Please, remain calm. I'm not doing this, just speculating. I want a conversation to start around what writing communities (in this case, SF/F/H) can safely garner from the slush pile without having to actually be a slush reader. That's all. Let's talk, okay?

Consider for a moment running the same analysis on all of the stories submitted to any given magazine. What would we learn? I'm going to use sock puppets (okay, hand-drawn graphs) and a mock readability diagram to demonstrate some possibilities.

## Sock Puppet One: Twin Peaks

The bell curve for the slush pile is just a bigger version of the bell curve for the published stories. Sadly, we learn nothing.

![Sock Puppet 1: No difference between rejected and accepted.](/public/images/know_your_markets_pt3/sock_puppet_1.png)

In this scenario, the peak and distribution match up, it's just a difference in volume. In this case the probability of being accepted is equal across the board, and this becomes pretty much useless. Sad, but quite possible.

## Sock Puppet Two: Different Strokes

The bell curve for the published stories sits inside, but to one side, of the bell curve for the slush pile. Real possibility here.

![Sock Puppet 2: Accepted Stories are off to one side.](/public/images/know_your_markets_pt3/sock_puppet_2.png)

In this scenario, the peak and distribution are significantly different, but still well related. The slush pile would still look like a bell curve, and the published stories would be a small curve inside and off to the side. For any given line, we could estimate how likely acceptance is by calculating the percentage of stories in that slice that were accepted. Based on my slush experience, I think this is likely the case.

## Sock Puppet Three: Scared Straight

There is no curve to the slush pile, but a straight slope or straight line across. Still useful, but questionable.

![Sock Puppet 3: Straight as an arrow](/public/images/know_your_markets_pt3/sock_puppet_3.png)

Here we can still make some estimate on a story's chance of acceptance, but the straight line would make me question whether the measure is right. Seeing a nice bell curve for the published stories makes me believe there's likely also a curve for the stories that weren't accepted. Understanding why the distribution was so significantly different would be key to knowing if the results were useful.

## Sock Puppet Four: Slush Pile Gone Wild

The slush pile has no definitive shape. In some places we might be able to estimate a possibility, in others we might not.

![Sock Puppet 4: Crazy, crazy, slush.](/public/images/know_your_markets_pt3/sock_puppet_4.png)

In this case, the slush is all over the place. As with the straight line, whether or not this was really useful would need more investigation.

Whatever the case, I think analyzing a slush pile would be a next logical step. This isn't possible right now, and may not be any time soon. I've bounced the idea of using some of these metrics to prioritize the slush pile off of a couple people, and the response has been somewhat reserved, and reasonably so. Using statistical analysis to rank the value of a story in terms of language craft is a potentially controversial idea, but really, this is exactly what slush readers do. I would never in my life suggest that statistics be used to pass final judgement, regardless of how much I love idea of computer overlords with sock puppets, but I do think we can start to gain efficiencies in processing the slush pile and shorten response times.

As a writer, I like the idea of getting a response faster, and I like the idea of having some way of measuring my work against the body of work submitted to a magazine. As a slush reader, I like the idea of having a little inkling of what I'm getting into before I sit down to read a submission.

But I would also be concerned as a writer about who has access to the stats and how they're being used.

# So What's Next?

Since slush piles are off limits right now, I'll be working on a couple of other things using what I do have access to.

## Story Search

I'm close to having a search engine set up that'll let anyone search through the text of the stories I've analyzed. I'm being careful about how I do this, though, because I'm not going to show any part of any story on this site. Search results will provide title, author, stats, and a link to the story on the magazine's site. The engine I'm using has an option to index but not store the text, so it's not that difficult, but I'm being extra careful. As a writer, I want to make sure I'm respecting copyright, and generally, I just don't want to piss anyone off.

Once I have this sorted out, I'll also add a way to download the raw stats (not the text of the stories) in CSV format for anyone who wants to run their own analysis.

## Regular Updates

I'm also working on automating the charts so that I can run scans on a regular basis (probably once a month) and have a page or pages that give up-to-date stats on the magazines.

## Add More Magazines

I'll keep an eye out for more magazines to index and analyze. I'm open to suggestions, but they have to have a significant number of stories available publicly on their website. I'm focused on SF/F/H right now, but might consider expanding into other genres. Scraping stories was probably the most time consuming part of this process, so I won't make any promises on how quickly I'll add stuff, but I will keep at it.

## <a name="analyzer"></a>Analyzer

Recognizing that readability scoring across tools is inconsistent, I've put up a simple [Analyzer](/tools/analyze/) where anyone can come and run analysis on a piece using the same code I used in my analysis. Eventually I hope to marry this up with the live graphs to show where a story falls in comparison to the stories I've indexed. I'm still working out how best to visually show this, since I don't really like the idea of presenting numbers that imply grade levels and such.

# The End. Or is it?

That's it for this initial experiment. I have a shit ton of other things to work on so I have no idea when I'll post next. I'm definitely interested in hearing what people think about analyzing submissions, and I will respond to comments as appropriate, but no promises on anything else for now.

I'm off for a shot of Jaegermeister. With a sock puppet.









