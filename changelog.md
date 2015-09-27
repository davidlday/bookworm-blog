---
layout: page
title: Change Log
noToc: true
---

## 2015-09-27

* Updated [analyzer](/tools/analyze/):
 * Removed Similar Story matching. So far I haven't been able to make it return much of anything reasonable. Needs signification work.
 * Simplified interface, using tabs instead of putting everything one one page.
 * Added facility to load text from .doc, .docx, .rtf, and .txt files.
* Expanded list of POV indicators for completeness.
* Updated algorithm for estimating point of view (POV) using the following logic:
 * If any 1st person indicators are present, then estimate 1st.
 * If no 1st person indicators are present but any 2nd person indicators are, then estimate 2nd.
 * If no 1st and no 2nd person indicators are present but any 3rd person indicators are, then estimate 3rd.
 * If no 1st, 2nd, or 3rd person indicators are present, then estimate unknown.
* Fixed stacking bars on the [statistics](/tools/statistics/)  page to actually stack.
* Enhanced search code, but I haven't yet added the form fields needed to take advantage of them.

## 2015-03-24

* Updated [statistics](/tools/statistics/) to use new chart library and pull summarized data from Solr instead of computing histograms in the browser.
* Updated [analyzer](/tools/analyze/) to include Market Gauge, Magazines with Stories in the Top Similar Stories ([k-nearest neighbor](http://opensourceconnections.com/blog/2013/09/30/easy-k-nn-document-classification-with-solr-and-python/)), and Top 100 Similar Stories.
* Updated [search](/tools/storysearch) to include type-ahead search based on search engine terms, as well as a pane showing raw statistics for each story.
* Added a link to download raw data in CSV. Updated the original Blog posts and added to link to the analyzer and statistics pages.
* Consolidated pages to reduce menu size and keep down the clutter.
* Added this page to track changes.