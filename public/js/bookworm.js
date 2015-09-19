/**
* Common Bookworm JavaScript
*/

// Create Namespace
(function( bookworm, $, undefined ) {

"use strict";

// Fields available in Solr
// Maybe extract this from Solr
var fields = {
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


// High-Level Functions
// Cribbed from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
bookworm.getParameterByName = function( name ) {
    var def = ( def !== null ) ? def : "";
    name = name.replace( /[\[]/, "\\[").replace( /[\]]/, "\\]");
    var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec( location.search );
    return results === null ? "" : decodeURIComponent( results[1].replace( /\+/g, " "));
};

// Because several browsers don't support Number.isInteger()
bookworm.isInteger = function( value ) {
    return value % 1 === 0;
}

// Return a full field definition
bookworm.getField = function( field ) {
    return fields[field];
};

// Return the text label for a bookworm field
bookworm.getFieldLabel = function( field ) {
    return fields[field].label;
};

// Return the full field definition object
bookworm.getFields = function() {
    return fields;
};

// Return a list of numeric fields
bookworm.getNumericFieldKeys = function() {
    var numericFields = [];
    $.each( fields, function( key, val ) {
        if ( val.datatype === 'numeric' ) {
            numericFields.push( key );
        }
    });
    return numericFields;
};

// Because JavaScript doesn't have a stinking mean function
bookworm.mean = function( array ) {
    var total = 0
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}


// Date display options
bookworm.date_options = {
    year: "numeric",
    month: "long",
    day: "numeric"
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
    'automated_readability_index',
    'flesch_kincaid_grade_level',
//     'flesch_reading_ease',
    'smog_index',
    'gunning_fog_index',
    'rix',
    'lix',
];

// Solr Interface
bookworm.solr = {
    // Default Search settings
    searchAjaxSettings: {
        url: 'http://bookworm.davidlday.com/public/scripts/storysearch.py',
        type: "GET",
        crossDomain: true,
        dataType: 'json',
        data: {
            'q.op': 'AND',
            wt: 'json',
            mlt: true,
            'mlt.fl': 'text',
            'mlt.count': 20,
            'mlt.minwl': 3,
            'mlt.maxqt': 50
        }
    },
    // General Search
    search: function( settings ) {
        return $.ajax(
            $.extend(
                true,
                {},
                this.searchAjaxSettings,
                settings
            )
        );
    },
    // Default More Like This settings
    mltAjaxSettings: {
        url: 'http://bookworm.davidlday.com/public/scripts/storieslikethis.py',
        type: "POST",
        crossDomain: true,
        data: {
            rows: 20,
            'mlt.match.include': false,
            fl: '*,score',
            'mlt.interestingTerms': 'details',
            'mlt.fl': 'text',
            'mlt.minwl': 3,
            'mlt.maxqt': 50,
        },
        dataType: 'json',
    },
    // More Like This Handler
    moreLikeThis: function( settings ) {
        return $.ajax(
            $.extend(
                true,
                {},
                this.mltAjaxSettings,
                settings
            )
         );
    },
    // Bookworm Specific
    // Array of Magazines w/ number of total stories
    getMagazines: function() {
        var settings = {
            data: {
                q: '*',
                fl: 'magazine',
                mlt: false,
                sort: 'magazine asc',
                group: true,
                'group.field': 'magazine'
            }
        };
        return bookworm.solr.search( settings )
    },
    // Create an array of Magazines w/ number of total stories
    // from Solr Ajax response
    magazinesFactory: function( data ) {
        var magazines = []
        // Populate magazine array
        $.each( data.grouped.magazine.groups, function( index, group ) {
            var magazine_name = group.doclist.docs[0].magazine,
                magazine_id = magazine_name.replace(/[\s\.]/g,'_').toLowerCase();
            magazines.push(
                {
                    name: magazine_name,
                    id: magazine_id,
                    totalStories: group.doclist.numFound,
                }
            );
        });
        return magazines;
    },
    // Statistics of all numeric fields for a magazine
    getMagazineStatistics: function( magazine ) {
        var settings = {
            // Needed to explode stats.field into
            // multiple parameters when passed
            traditional: true,
            data: {
                bwmagazine: magazine,
                q: 'magazine:"' + magazine + '"',
                stats: true,
                rows: 1,
                'stats.field': bookworm.getNumericFieldKeys(),
            }
        };
        return bookworm.solr.search( settings );
    },
    // Create an array of magazine statistics
    // from Solr Ajax response
    magazineStatisticsFactory: function( data ) {
        var results = {
            magazine: data.responseHeader.params.bwmagazine,
            totalStories: data.response.numFound,
            stats: data.stats.stats_fields
        }
        return results;
    },
    // Binned Data for Magazine / Metric
    getBinnedData: function( magazine, metric ) {
        // Test if we're grouping on numbers or text fields
        if ( fields[metric].datatype === 'numeric') {
            var bin_formula = 'product($binsize,floor(div(' + metric + ',$binsize)))';
            var settings = {
                data: {
                    bwmetric: metric,
                    bwmagazine: magazine,
                    q: 'magazine:"' + magazine + '"',
                    fl: 'magazine',
                    bin: bin_formula,
                    binsize: fields[metric].binsize,
                    sort: '$bin asc',
                    group: true,
                    'group.func': '$bin',
                    rows: 9999999,
                    mlt: false
                }
            };
            return bookworm.solr.search( settings )
        } else {
            var settings = {
                data: {
                    bwmetric: metric,
                    bwmagazine: magazine,
                    q: 'magazine:"' + magazine + '"',
                    fl: metric,
                    group: true,
                    'group.field': metric,
                    rows: 9999999,
                    sort: metric + ' asc',
                    mlt: false
                }
            };
            return bookworm.solr.search( settings )
        }
    },
    // Create an object of binned data for Magazine / Metric.
    binnedDataFactory: function( data ) {
        var metric = data.responseHeader.params.bwmetric,
            results = {
                magazine: data.responseHeader.params.bwmagazine,
                metric: metric,
                bins: [],
            },
            bins = data.grouped.$bin || data.grouped[metric];
        $.each( bins.groups, function( index, group ) {
            results.bins.push(
                {
                    bin: group.groupValue,
                    count: group.doclist.numFound,
                }
            );
        });
        return results;
    }
}


// Analyzer
bookworm.analyzer = {
    url: 'http://api.davidlday.com/bookworm/core/v1/analysis',
    analyzeText: function analyzeText( txt ) {
        return $.ajax({
            type: "POST",
            url: this.url,
            crossDomain: true,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify( { 'prose': txt } ),
            dataType: 'json',
        });
    },
    analysisResultsFactory: function( data ) {
        var results = {};
        return $.extend( {}, results, data );
    }
}

// Extractor
bookworm.extractor = {
    url: 'http://api.davidlday.com/bookworm/core/v1/extraction',
    extractText: function extractText( file ) {
        var fData = new FormData();
        fData.append( 'file', file );
        return $.ajax({
            type: "POST",
            url: this.url,
            data: fData,
            contentType: false,
            processData: false,
            crossDomain: true,
            dataType: 'json',
            cache: false,
        });
    }
}

// User Interface
bookworm.ui = {
    // Add stories to mlt table body
    populateMltTableBody: function( mltTableBody, docs ) {
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
    },
    // Add metrics to analysis table body
    populateAnalysisTableBody: function( analysisTableBody,
            display_metrics, data ) {
        // Add results to summary table
        $.each( display_metrics, function( index, metric ) {
            var formatted_value = data[metric];
            if ( !isNaN( data[metric])) {
                var value = Number( data[metric]);
                if ( bookworm.isInteger( value ) ) {
                    formatted_value = value;
                } else {
                    formatted_value = Number( value ).toFixed( 4 );
                }
            }
            $( analysisTableBody ).append(
                "<tr id=\"" + metric + "\">" +
                "<td>" + bookworm.getFieldLabel( metric ) + "</td>" +
                "<td class=\"text-right\">" + formatted_value + "</td>" +
                "</tr>"
            );
        });
    },
    drawLineGauge: function( id, width, point, lrc ) {
        // Dark Green: 006600
        // Light Green: 33cc00
        // Light Yellow: ffff00
        // Dark Yellow: ffcc00
        // Light Red: cc3300
        // Dark Red: 990033
        var gradients = {
            left: 'l(0, 1, 1, 1)#006600-#33cc00-#ffff00-#ffcc00-#cc3300-#990033',
            right: 'l(0, 1, 1, 1)#990033-#cc3300-#ffcc00-#ffff00-#33cc00-#006600',
            center: 'l(0, 1, 1, 1)#990033-#cc3300-#ffcc00-#ffff00-#33cc00-#006600-#33cc00-#ffff00-#ffcc00-#cc3300-#990033',
        };
        lrc = lrc || 'left';
        var s = Snap( '#' + id ),
            g = s.gradient(gradients[lrc]),
            block = s.rect(0, 10, width, 10).attr({
                fill: g,
                stroke: "#000",
                strokeWidth: 0
            });
        var arrow = s.polygon( [
                point - 10, 25,
                point, 15,
                point - 10, 5,
                point + 10, 5,
                point, 15,
                point + 10, 25,
                ] )
            .attr({
                fill: 'black'
            });
    },

};

// Flot functions / options
bookworm.flot = {
    default_options:  {
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
    },
    getChartOptions: function( field ) {
        var options = $.extend(true, {}, this.default_options);
        options.series.bars.barWidth = fields[field].binsize * 0.8;
        if ( fields[field].datatype !== 'numeric' ) {
            options['xaxis'] = {
                mode: 'categories',
            };
        }
        return options;
    },
    // Generate a list of colors
    // Cribbed from: http://colorswatches.info/web-safe-colors/
    websafeColors: function( step ) {
        var inc = step || 1;
        var vals = ['00', '33', '66', '99', 'cc', 'ff'];
        var len = vals.length;
        var colors = [];
        for (var r = 0; r < len; r += inc) {
            for (var g = 0; g < len; g += inc) {
                for (var b = 0; b < len; b += inc) {
                    colors.push( '#' + vals[r] + vals[g] + vals[b] );
                }
            }
        }
        return colors;
    }
}

}( window.bookworm = window.bookworm || {}, jQuery ));
