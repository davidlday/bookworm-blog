---
layout: post
title: Know Your Markets - Part 3
comments: true
excerpt: So what does all of this analysis really mean? What's missing? Are there any wrong assumptions? And what comes next for this experiment?
---

What else can we measure:

* Are there words only found in stories that are accepted or stories that are rejected?
* Passive Voice
* Sentences per paragraph?
* Sections? Probably meaningless.
* Parts of speech - adjectives, adverbs, nouns, etc.
* Word Frequency / Word Cloud

What's Wrong:

Readability measures have a stigma around them. In all the articles I've read where a writer has gone through a similar investigation, the logic seems to go like this:
1. A sample of commercial fiction has an average Flesch-Kincaid Grade Level of 4-ish.
2. The New York Times and most major news publications have similar scores.
3. Most Americans read at a 4th grade level.
4. Therefore, those writers of commercial fiction are specifically targeting their writing at 4th graders.
5. I should target writing at a 4th grade level.

[Here's](http://mabfan.livejournal.com/105017.html) a prime example. From the post, toward the end:

> Finally, on the Flesch-Kincaid Grade Level scale, the range was 2.68 to 6.3, with an average grade level of 4.4.
> In other words, he found that the bestselling writers were aiming their prose, prose that is read by a majority of adult readers in the country, at a fourth grade level.

I think this is a big leap. The assumption is that the writer is intentionally crafting their work for a specific grade level, which also assumes that the Flesch-Kincaid Grade Level scale (or any of the readability scores that spit out a grade level) are accurate. They're not. Not by a long shot.

On [Lit2Go], a free online collection of stories and poems in Mp3 (audiobook) format associated with the University of South Florida, we find this in the FAQ section:

> While Flesch-Kincaid may be a useful tool for comparing the complexity of different passages, whether or not a given passage is appropriate for a given reader depends on several other factors, including: background knowledge of the reader, reader interest in the subject matter, text genre, and the level of support provided during reading.

What [List2Go](http://etc.usf.edu/lit2go/welcome/faq/) is saying is that while Flesch-Kincaid purports to tell us what grade level a reader must be at to comprehend a text, it isn't accurate, and appropriateness of the text relies on a much broader context.



* There's a stigma to using readability scores.
  * Almost always discussed without specific context or extremely [small sample or ambiguous size](http://mabfan.livejournal.com/105017.html)
  * Metrics were developed decades ago (cite dates for each test). Language and educational requirements have changed, but have the formulae kept up?
  * [List2Go](http://etc.usf.edu/lit2go/welcome/faq/) quote: While Flesch-Kincaid may be a useful tool for comparing the complexity of different passages, whether or not a given passage is appropriate for a given reader depends on several other factors, including: background knowledge of the reader, reader interest in the subject matter, text genre, and the level of support provided during reading.
  * Readability tests are useful for comparison, but whether they accurately represent "grade levels" is questionable, and in the context of this study - irrelevant.
* The Coleman Liau Index formula I used _may_ be wrong:
Mine from []()
score = (5.89*(self.analyzedVars['char_cnt']/self.analyzedVars['word_cnt']))-(30*(self.analyzedVars['sentence_cnt']/self.analyzedVars['word_cnt']))-15.8
Alternative from []()
return (5.879851 * characters / words - 29.587280 * sentences / words - 15.800804)


What's Missing:

* It only accounts for survivors. Talk about survivorship bias.


What's Next:

* Can we learn anything from Fan Fiction? Since I don't have access to a slush pile, I though it might be the next best thing. FanFiction.net
