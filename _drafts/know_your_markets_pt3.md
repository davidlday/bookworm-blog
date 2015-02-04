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
