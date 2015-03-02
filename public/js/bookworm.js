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
    // Full list of metrics
    metrics: {
        automated_readability_index: {
            label: "Readability: Automated Readability Index",
            multivalue: false,
            binsize: 0.5,
        },
        avg_syllables_per_word: {
            label: "Avg. Syllables per Word",
            multivalue: false,
            binsize: 1.0,
        },
        avg_words_per_sentence: {
            label: "Avg. Words per Sentence",
            multivalue: false,
            binsize: 1.0,
        },
        coleman_liau_index: {
            label: "Readability: Coleman Liau Index",
            multivalue: false,
            binsize: 0.5,
        },
        dialogue_syllable_percentage: {
            label: "Percent Dialogue (Syllables)",
            multivalue: false,
            binsize: 5.0,
        },
        dialogue_word_percentage: {
            label: "Percent Dialogue (Words)",
            multivalue: false,
            binsize: 5.0,
        },
        dialogue_syllable_count: {
            label: "Dialogue Syllable Count",
            multivalue: false,
            binsize: 500,
        },
        dialogue_unique_word_count: {
            label: "Dialogue Unique Word Count",
            multivalue: false,
            binsize: 1.0,
        },
        dialogue_word_count: {
            label: "Dialogue Word Count",
            multivalue: false,
            binsize: 500,
        },
        flesch_kincaid_grade_level: {
            label: "Readability: Flesch Kincaid Grade Level",
            multivalue: false,
            binsize: 0.5,
        },
        flesch_reading_ease: {
            label: "Readability: Flesch Reading Ease",
            multivalue: false,
            binsize: 0.5,
        },
        gunning_fog_index: {
            label: "Readability: Gunning Fox Index",
            multivalue: false,
            binsize: 0.5,
        },
        lix: {
            label: "Readability: LIX",
            multivalue: false,
            binsize: 0.5,
        },
        narrative_syllable_count: {
            label: "Narrative Syllable Count",
            multivalue: false,
            binsize: 500,
        },
        narrative_word_count: {
            label: "Narrative Word Count",
            multivalue: false,
            binsize: 500,
        },
        rix: {
            label: "Readability: RIX",
            multivalue: false,
            binsize: 0.5,
        },
        sentence_count: {
            label: "Sentence Count",
            multivalue: false,
            binsize: 10,
        },
        smog_index: {
            label: "Readability: SMOG Index",
            multivalue: false,
            binsize: 0.5,
        },
        syllable_count: {
            label: "Syllable Count",
            multivalue: false,
            binsize: 500,
        },
        unique_word_count: {
            label: "Unique Word Count",
            multivalue: false,
            binsize: 1.0,
        },
        word_count: {
            label: "Word Count",
            multivalue: false,
            binsize: 250,
        },
    },
    // Full list of text fields
    text_field: {
        id: {
            label: "ID",
            multivalue: false,
        },
        url: {
            label: "Story URL",
            multivalue: false,
        },
        magazine: {
            label: "Magazine",
            multivalue: false,
        },
        author: {
            label: "Author(s)",
            multivalue: true,
        },
        genre: {
            label: "Magazine Genre",
            multivalue: true,
        },
        original_tags: {
            label: "Tags",
            multivalue: true,
        },
        pov: {
            label: "Point of View",
            multivalue: false,
        },
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
    histogram_defaults: {
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
        'q.op': 'AND',
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

// Convenience List of Magazines w/ number of total stories
function solrGetMagazines(successCallback, errorCallback) {
    var params = {
        q: '*',
        'q.op': 'AND',
        wt: 'json',
        fl: 'magazine',
        sort: 'magazine asc',
        group: true,
        'group.field': 'magazine',
    };
    solrSearch(params, function( data ) {
        var magazines = [];
        $.each( data.grouped.magazine.groups, function(index, group) {
            magazines.push(
                {
                    name: group.doclist.docs[0].magazine,
                    totalStories: group.doclist.numFound,
                }
            );
        });
        successCallback( magazines );
    },
    errorCallback);
}

// Convenience Binned Data for Magazine / Metric
function solrGetMagazineMetricBins(magazine, metric, binSize, successCallback, errorCallback) {
    var bin_formula = 'product($binsize,floor(div(' + metric + ',$binsize)))';
    var params = {
        q: 'magazine:"' + magazine + '"',
        wt: 'json',
        fl: 'magazine',
        bin: bin_formula,
        'binsize': binSize,
        sort: '$bin asc',
        group: true,
        'group.func': '$bin',
        rows: 9999999,
    };
    solrSearch(params, function( data ) {
        var results = { 'magazine': magazine,
            'metric': metric,
            bins: [],
        }
        $.each( data.grouped['$bin'].groups, function(index, group) {
            results.bins.push(
                {
                    bin: group.groupValue,
                    count: group.doclist.numFound,
                }
            );
        });
        successCallback( results );
    },
    errorCallback);
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

// UI Functions
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
        console.log(metric);
        $(analysisTableBody).append(
            "<tr id=\"" + metric + "\">" +
            "<td>" + bwconfig.metrics[metric].label + "</td>" +
            "<td class=\"text-right\">" + formatted_value + "</td>" +
            "</tr>"
        );
    });
}

function getFieldLabel( field ) {
    var label = '';
    if (typeof bwconfig.metrics[field] !== 'undefined') {
        label = bwconfig.metrics[field].label;
    } else if (typeof bwconfig.text_fields[field] !== 'undefined') {
        label = bwconfig.text_fields[field].label;
    } else {
        label = "unknown";
    }
    return label;
 }

// Cribbed from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name) {
    var def = (def != null) ? def : "";
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


// Merge Default Histogram Options into Specific Options
var histogram_settings = {};
for (var metric in bwconfig.metrics) {
    histogram_settings[metric] = {
        title: metric.label,
        histogram: {
            bucketSize: metric.binsize,
        },
    };
    for (var attr in bwconfig.histogram_defaults) {
        if (!histogram_settings[metric][attr]) {
            histogram_settings[metric][attr] = bwconfig.histogram_defaults[attr];
        }
    }
}
