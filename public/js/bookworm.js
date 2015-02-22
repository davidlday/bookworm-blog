/**
* Common Bookworm JavaScript
*/

// URL of search script
var search_url = 'http://bookworm.davidlday.com/public/scripts/storysearch.py';

// Functions
// General Search via JSONP
function solrSearch(params, successCallback, errorCallback) {
    //params = params.replace(/"/g, '\\"'); // Trying to get quoted stuff working
    console.log(search_url + '?' + params);
    // Invoke search
    $.ajax({url: search_url + '?' + params,
        dataType: 'jsonp',
        jsonpCallback: successCallback,
        jsonp: 'json.wrf',
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(thrownError);
        },
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

// Histogram Configurations
// TODO: Define for all metrics
// Default Options
var default_histogram_settings = {
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
};

// Specific Options
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

// Merge Default Options into Specific Options
for (var attr in default_histogram_settings) {
    for (var setting in histogram_settings) {
        histogram_settings[setting][attr] = default_histogram_settings[attr];
    }
}
