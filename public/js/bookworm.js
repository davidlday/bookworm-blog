/**
* Common Bookworm JavaScript
*/
"use strict";

// Defaults
var bookworm = bookworm || {};

// Date display options
bookworm.date_options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

// Field Definitions
// Maybe extract this from Solr
bookworm.fields = {
        url: {
            label: "Story URL",
            multivalue: false,
            binsize: 1.0,
            datatype: 'text',
        },
        magazine: {
            label: "Magazine",
            multivalue: false,
            binsize: 1.0,
            datatype: 'text',
        },
        author: {
            label: "Author(s)",
            multivalue: true,
            binsize: 1.0,
            datatype: 'text',
        },
        genre: {
            label: "Magazine Genre",
            multivalue: true,
            binsize: 1.0,
            datatype: 'text',
        },
        original_tags: {
            label: "Story Tags",
            multivalue: true,
            binsize: 1.0,
            datatype: 'text',
        },
        pov: {
            label: "Point of View",
            multivalue: false,
            binsize: 1.0,
            datatype: 'text',
        },
        automated_readability_index: {
            label: "Readability: Automated Readability Index",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        avg_syllables_per_word: {
            label: "Avg. Syllables per Word",
            multivalue: false,
            binsize: 0.1,
            datatype: 'numeric',
        },
        avg_words_per_sentence: {
            label: "Avg. Words per Sentence",
            multivalue: false,
            binsize: 1.0,
            datatype: 'numeric',
        },
        coleman_liau_index: {
            label: "Readability: Coleman Liau Index",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        dialogue_syllable_percentage: {
            label: "Percent Dialogue (Syllables)",
            multivalue: false,
            binsize: 5.0,
            datatype: 'numeric',
        },
        dialogue_word_percentage: {
            label: "Percent Dialogue (Words)",
            multivalue: false,
            binsize: 5.0,
            datatype: 'numeric',
        },
        dialogue_syllable_count: {
            label: "Dialogue Syllable Count",
            multivalue: false,
            binsize: 500,
            datatype: 'numeric',
        },
        dialogue_unique_word_count: {
            label: "Dialogue Unique Word Count",
            multivalue: false,
            binsize: 1.0,
            datatype: 'numeric',
        },
        dialogue_word_count: {
            label: "Dialogue Word Count",
            multivalue: false,
            binsize: 500,
            datatype: 'numeric',
        },
        flesch_kincaid_grade_level: {
            label: "Readability: Flesch Kincaid Grade Level",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        flesch_reading_ease: {
            label: "Readability: Flesch Reading Ease",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        gunning_fog_index: {
            label: "Readability: Gunning Fox Index",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        lix: {
            label: "Readability: LIX",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        narrative_syllable_count: {
            label: "Narrative Syllable Count",
            multivalue: false,
            binsize: 500,
            datatype: 'numeric',
        },
        narrative_word_count: {
            label: "Narrative Word Count",
            multivalue: false,
            binsize: 500,
            datatype: 'numeric',
        },
        rix: {
            label: "Readability: RIX",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        sentence_count: {
            label: "Sentence Count",
            multivalue: false,
            binsize: 10,
            datatype: 'numeric',
        },
        smog_index: {
            label: "Readability: SMOG Index",
            multivalue: false,
            binsize: 0.5,
            datatype: 'numeric',
        },
        syllable_count: {
            label: "Syllable Count",
            multivalue: false,
            binsize: 500,
            datatype: 'numeric',
        },
        unique_word_count: {
            label: "Unique Word Count",
            multivalue: false,
            binsize: 1.0,
            datatype: 'numeric',
        },
        word_count: {
            label: "Word Count",
            multivalue: false,
            binsize: 250,
            datatype: 'numeric',
        },
    };

// Controls what metrics are displayed.
bookworm.display_results = [
        'syllable_count',
        'word_count',
        'sentence_count',
        'avg_syllables_per_word',
        'avg_words_per_sentence',
        'dialogue_word_percentage',
        'pov',
        'coleman_liau_index',
//         'automated_readability_index',
//         'flesch_kincaid_grade_level',
//         'smog_index',
//         'flesch_reading_ease',
//         'gunning_fog_index',
//         'rix',
//         'lix',
    ];

// URLs
bookworm.urls = {
        // search script
        search: 'http://bookworm.davidlday.com/public/scripts/storysearch.py',
        // MoreLikeThis script
        mlt: 'http://bookworm.davidlday.com/public/scripts/storieslikethis.py',
        // Analyzer script
        analyzer: 'http://bookworm.davidlday.com/public/scripts/analyze.py',
    };

// MoreLikeThis
bookworm.mlt = {
        fl: 'text',
        minwl: 3,
        maxqt: 50,
        rows: 20,
    };

// Solr Functions
// General Search
function solrSearch( params, successCallback, errorCallback ) {
    $.ajax( {type: "GET",
        url: bookworm.urls.search,
        data: params,
        crossDomain: true,
        dataType: 'json',
        success: function( data ) {
            successCallback( data )
        },
        error: function ( xhr, ajaxOptions, thrownError ) {
            errorCallback( thrownError );
        },
    });
}

// Convenience Search
function solrSearchText( txt, start, rows, fields, successCallback, errorCallback) {
    var params = {
        q: txt,
        'q.op': 'AND',
        wt: 'json',
        fl: 'magazine,title,url,id,author,pub_date,score,' + fields.join(),
        mlt: true,
        'mlt.fl': bookworm.mlt.fl,
        'mlt.count': bookworm.mlt.rows,
        rows: rows,
        start: start,
    };
    solrSearch( params, successCallback, errorCallback);
}

// Convenience List of Magazines w/ number of total stories
function solrGetMagazines( successCallback, errorCallback ) {
    var params = {
        q: '*',
        'q.op': 'AND',
        wt: 'json',
        fl: 'magazine',
        sort: 'magazine asc',
        group: true,
        'group.field': 'magazine',
    };
    solrSearch( params, function( data ) {
        var magazines = [];
        $.each( data.grouped.magazine.groups, function( index, group ) {
            magazines.push(
                {
                    name: group.doclist.docs[0].magazine,
                    totalStories: group.doclist.numFound,
                }
            );
        });
        successCallback( magazines );
    },
    errorCallback );
}

// Convenience Binned Data for Magazine / Metric
function solrGetBinnedMetric( magazine, metric, successCallback, errorCallback ) {
    // Test if we're grouping on numbers or text fields
    if ( bookworm.fields[metric].datatype === 'numeric') {
        var bin_formula = 'product($binsize,floor(div(' + metric + ',$binsize)))';
        var params = {
            q: 'magazine:"' + magazine + '"',
            wt: 'json',
            fl: 'magazine',
            bin: bin_formula,
            binsize: bookworm.fields[metric].binsize,
            sort: '$bin asc',
            group: true,
            'group.func': '$bin',
            rows: 9999999,
        };
        solrSearch( params, function( data ) {
            var results = {
                magazine: magazine,
                metric: metric,
                bins: [],
            }
            $.each( data.grouped['$bin'].groups, function( index, group ) {
                results.bins.push(
                    {
                        bin: group.groupValue,
                        count: group.doclist.numFound,
                    }
                );
            });
            successCallback( results );
        },
        errorCallback );
    } else {
        var params = {
            q: 'magazine:"' + magazine + '"',
            wt: 'json',
            fl: metric,
            group: true,
            'group.field': metric,
            rows: 9999999,
            sort: metric + ' asc',
        };
        solrSearch( params, function( data ) {
            var groups = [];
            var results = {
                magazine: magazine,
                metric: metric,
                bins: [],
            }
            $.each( data.grouped[metric].groups, function( index, group ) {
                results.bins.push(
                    {
                        bin: group.groupValue,
                        count: group.doclist.numFound,
                    }
                );
            });
            successCallback( results );
        },
        errorCallback );
    }
}

// General MoreLikeThis
function solrMoreLikeThis( params, successCallback, errorCallback ) {
    $.ajax( {type: "POST",
        url: bookworm.urls.mlt,
        crossDomain: true,
        data: params,
        dataType: 'json',
        success: function( data ) {
            successCallback( data.response.docs )
        },
        error: function ( xhr, ajaxOptions, thrownError ) {
            errorCallback( thrownError );
        },
    });
}

// Convenience MoreLikeThis
function solrMoreLikeThisText( txt, successCallback, errorCallback ) {
    var params = {
        'stream.body': txt,
        rows: bookworm.mlt.rows,
        'mlt.match.include': false,
        fl: '*,score',
        'mlt.interestingTerms': 'details',
        'mlt.fl': bookworm.mlt.fl,
        'mlt.minwl': bookworm.mlt.minwl,
        'mlt.maxqt': bookworm.mlt.maxqt,
    };
    solrMoreLikeThis( params, successCallback, errorCallback );
}

// Analyze Text using Bookworm Utility Script
function analyzeText( txt, successCallback, errorCallback ) {
    var post_data = {'text': txt};
    $.ajax( {
        type: "POST",
        url: bookworm.urls.analyzer,
        crossDomain: true,
        data: post_data,
        dataType: 'json',
        success: function( data ) {
            successCallback( data );
        },
        error: function ( xhr, ajaxOptions, thrownError ) {
            errorCallback( thrownError );
        },
    });
}

// UI Functions
// Add stories to mlt table body
function populateMltTableBody( mltTableBody, docs ) {
    $.each( docs, function( index, doc ) {
        var published_date = new Date( doc.pub_date );
        $( mltTableBody ).append(
            "<tr id=\"mlt-" + index + "\">" +
            "<td><a href=\"" +doc.url + "\" target=\"story\">" + doc.title + "</a></td>" +
            "<td>" + doc.author.join( ', ') + "</td>" +
            "<td>" + doc.magazine + "</td>" +
            "<td>" + published_date.toLocaleDateString( 'en-us', bookworm.date_options ) + "</td>" +
            "</tr>"
        );
    });
}

// Add metrics to analysis table body
function populateAnalysisTableBody( analysisTableBody, display_metrics, data ) {
    // Add results to summary table
    $.each( display_metrics, function( index, metric ) {
        var formatted_value = data[metric];
        if ( !isNaN( data[metric])) {
            var value = Number( data[metric]);
            if ( Number.isInteger( value )) {
                formatted_value = value;
            } else {
                formatted_value = Number( value ).toFixed( 4 );
            }
        }
        $( analysisTableBody ).append(
            "<tr id=\"" + metric + "\">" +
            "<td>" + getFieldLabel( metric ) + "</td>" +
            "<td class=\"text-right\">" + formatted_value + "</td>" +
            "</tr>"
        );
    });
}

// Get chart options for a field
function getFlotChartOptions( field ) {
    var options = {
        series: {
            stack: true,
            lines: {
                show: false,
                fill: true,
                steps: false,
            },
            bars: {
                align: 'center',
                show: true,
                barWidth: bookworm.fields[field].binsize * 0.8,
                lineWidth: 0,
                fill: 0.9,
            },
        },
        grid: {
            hoverable: true,
            clickable: true,
            autoHighlight: true
        },
        selection: {
            mode: "xy",
        },
        legend: {
            sorted: 'ascending',
        },
    };
    if ( bookworm.fields[field].datatype !== 'numeric') {
        options['xaxis'] = {
            mode: 'categories',
        };
    }
    return options;
}
// Return the text label for a bookworm field
function getFieldLabel( field ) {
    return bookworm.fields[field].label;
}

// Check if something is defined
function isDefined( variable ) {
    return ( typeof variable !== 'undefined' );
}

// Cribbed from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName( name ) {
    var def = ( def !== null ) ? def : "";
    name = name.replace( /[\[]/, "\\[").replace( /[\]]/, "\\]");
    var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec( location.search );
    return results === null ? "" : decodeURIComponent( results[1].replace( /\+/g, " "));
}

// Default Ajax Error Handler
function logAjaxError( message ) {
    console.log( message );
}
