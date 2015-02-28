/**
* Common Bookworm JavaScript
*/

// Defaults
var bwconfig = {
    // Date display options
    date_options: {
        year: "numeric",
        month: "long",
        day: "numeric"
    },
    // Controls what metrics are displayed.
    display_results: [
        'syllable_count',
        'word_count',
        'sentence_count',
        'avg_syllables_per_word',
        'avg_words_per_sentence',
        'dialogue_word_percentage',
        'pov',
        'coleman_liau_index',
        'automated_readability_index',
        'flesch_kincaid_grade_level',
        'smog_index',
        'flesch_reading_ease',
        'gunning_fog_index',
        'rix',
        'lix',
    ],
    // URLs
    urls: {
        // search script
        search: 'http://bookworm.davidlday.com/public/scripts/storysearch.py',
        // MoreLikeThis script
        mlt: 'http://bookworm.davidlday.com/public/scripts/storieslikethis.py',
        // Analyzer script
        analyzer: 'http://bookworm.davidlday.com/public/scripts/analyze.py',
    },
    // MoreLikeThis
    mlt: {
        fl: 'text',
        minwl: 3,
        maxqt: 50,
        rows: 20,
    },
    // Controls Google Charts Histograms
    histogram_settings: {
        legend:    {
            position: 'none'},
        enableInteractivity: true,
        chartArea: {
            width: '80%',
            height: '80%',
        },
        vAxis: {
            gridlines: {
                count: -1,
            },
        },
    },
};

// Solr Functions
// General Search
function solrSearch(params, successCallback, errorCallback) {
    $.ajax({type: "GET",
        url: bwconfig.urls.search,
        data: params,
        crossDomain: true,
        dataType: 'json',
        success: function(data) {
            successCallback(data)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            errorCallback(thrownError);
        },
    });
}

// Convenience Search
function solrSearchText(txt, start, rows, successCallback, errorCallback) {
    var params = {
        q: txt,
        wt: 'json',
        fl: 'magazine,title,url,id,author,pub_date,score,' + display_results.join(),
        mlt: true,
        'mlt.fl': bwconfig.mlt.fl,
        'mlt.count': bwconfig.mlt.rows,
        rows: rows,
        start: start,
    };
    solrSearch(params, successCallback, errorCallback);
}

// General MoreLikeThis
function solrMoreLikeThis(params, successCallback, errorCallback) {
    $.ajax({type: "POST",
        url: bwconfig.urls.mlt,
        crossDomain: true,
        data: params,
        dataType: 'json',
        success: function(data) {
            successCallback(data.response.docs)
        },
        error: function (xhr, ajaxOptions, thrownError) {
            errorCallback(thrownError);
        },
    });
}

// Convenience MoreLikeThis
function solrMoreLikeThisText(txt, successCallback, errorCallback) {
    var params = {
        'stream.body': txt,
        rows: bwconfig.mlt.rows,
        'mlt.match.include': false,
        fl: '*,score',
        'mlt.interestingTerms': 'details',
        'mlt.fl': bwconfig.mlt.fl,
        'mlt.minwl': bwconfig.mlt.minwl,
        'mlt.maxqt': bwconfig.mlt.maxqt,
    };
    solrMoreLikeThis(params, successCallback, errorCallback);
}

// Analyze Text using Bookworm Utility Script
function analyzeText(txt, successCallback, errorCallback) {
    var post_data = {'text': txt};
    $.ajax({
        type: "POST",
        url: bwconfig.urls.analyzer,
        crossDomain: true,
        data: post_data,
        dataType: 'json',
        success: function(data) {
            successCallback(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            errorCallback(thrownError);
        },
    });
}

// Add stories to mlt table body
function populateMltTableBody(mltTableBody, docs) {
    $.each(docs, function(index, doc) {
        var published_date = new Date(doc.pub_date);
        $(mltTableBody).append(
            "<tr id=\"mlt-" + index + "\">" +
            "<td><a href=\"" +doc.url + "\" target=\"story\">" + doc.title + "</a></td>" +
            "<td>" + doc.author.join() + "</td>" +
            "<td>" + doc.magazine + "</td>" +
            "<td>" + published_date.toLocaleDateString('en-us', bwconfig.date_options) + "</td>" +
            "</tr>"
        );
    });
}

// Add metrics to analysis table body
function populateAnalysisTableBody(analysisTableBody, display_metrics, data) {
    // Add results to summary table
    $.each(display_metrics, function(index, metric) {
        var formatted_value = data[metric];
        if (!isNaN(data[metric])) {
            var value = Number(data[metric]);
            if (Number.isInteger(value)) {
                formatted_value = value;
            } else {
                formatted_value = Number(value).toFixed(4);
            }
        }
        $(analysisTableBody).append(
            "<tr id=\"" + metric + "\">" +
            "<td>" + bookworm_labels[metric] + "</td>" +
            "<td class=\"text-right\">" + formatted_value + "</td>" +
            "</tr>"
        );
    });
}

// Cribbed from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    var def = (def != null) ? def : "";
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Constants and Configs
// Labels for Metrics
var bookworm_labels = {
    url: "Story URL",
    magazine: "Magazine",
    automated_readability_index: "Readability: Automated Readability Index",
    avg_syllables_per_word: "Avg. Syllables per Word",
    avg_words_per_sentence: "Avg. Words per Sentence",
    coleman_liau_index: "Readability: Coleman Liau Index",
    dialogue_syllable_percentage: "Percent Dialogue (Syllables)",
    dialogue_word_percentage: "Percent Dialogue (Words)",
    dialogue_syllable_count: "Dialogue Syllable Count",
    dialogue_unique_word_count: "Dialogue Unique Word Count",
    dialogue_word_count: "Dialogue Word Count",
    flesch_kincaid_grade_level: "Readability: Flesch Kincaid Grade Level",
    flesch_reading_ease: "Readability: Flesch Reading Ease",
    gunning_fog_index: "Readability: Gunning Fox Index",
    lix: "Readability: LIX",
    narrative_syllable_count: "Narrative Syllable Count",
    narrative_word_count: "Narrative Word Count",
    rix: "Readability: RIX",
    sentence_count: "Sentence Count",
    smog_index: "Readability: SMOG Index",
    syllable_count: "Syllable Count",
    unique_word_count: "Unique Word Count",
    word_count: "Word Count",
    pov: "Point of View",
};

// Histogram Specific Options
var histogram_settings = {
    word_count: {
        title: bookworm_labels.word_count,
        histogram: {
            bucketSize: 500
        },
    },
    avg_words_per_sentence: {
        title: bookworm_labels.avg_words_per_sentence,
        histogram: {
            bucketSize: 5
        },
    },
    dialogue_word_percentage: {
        title: bookworm_labels.dialogue_word_percentage,
        histogram: {
            bucketSize: 5
        },
    },
    automated_readability_index: {
        title: bookworm_labels.automated_readability_index,
        histogram: {
            bucketSize: 0.5
        },
    },
    coleman_liau_index: {
        title: bookworm_labels.coleman_liau_index,
        histogram: {
            bucketSize: 0.5
        },
    },
    flesch_kincaid_grade_level: {
        title: bookworm_labels.flesch_kincaid_grade_level,
        histogram: {
            bucketSize: 0.5
        },
    },
    flesch_reading_ease: {
        title: bookworm_labels.flesch_reading_ease,
        histogram: {
            bucketSize: 0.5
        },
    },
    gunning_fog_index: {
        title: bookworm_labels.gunning_fog_index,
        histogram: {
            bucketSize: 1.0
        },
    },
    lix: {
        title: bookworm_labels.lix,
        histogram: {
            bucketSize: 0.5
        },
    },
    rix: {
        title: bookworm_labels.rix,
        histogram: {
            bucketSize: 0.5
        },
    },
    smog_index: {
        title: bookworm_labels.smog_index,
        histogram: {
            bucketSize: 0.5
        },
    },
};

// Merge Default Histogram Options into Specific Options
for (var attr in bwconfig.histogram_settings) {
    for (var setting in histogram_settings) {
        if (!histogram_settings[setting][attr]) {
            histogram_settings[setting][attr] = bwconfig.histogram_settings[attr];
        }
    }
}
