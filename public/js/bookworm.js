/**
* Common Bookworm JavaScript
*/

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
var histogram_settings = {
    word_count: {
        chart_options: {
            title: bookworm_labels.word_count,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 500 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    avg_words_per_sentence: {
        chart_options: {
            title: bookworm_labels.avg_words_per_sentence,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    dialogue_word_percentage: {
        chart_options: {
            title: bookworm_labels.dialogue_word_percentage,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    automated_readability_index: {
        chart_options: {
            title: bookworm_labels.automated_readability_index,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    coleman_liau_index: {
        chart_options: {
            title: bookworm_labels.coleman_liau_index,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    flesch_kincaid_grade_level: {
        chart_options: {
            title: bookworm_labels.flesch_kincaid_grade_level,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    flesch_reading_ease: {
        chart_options: {
            title: bookworm_labels.flesch_reading_ease,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    gunning_fog_index: {
        chart_options: {
            title: bookworm_labels.gunning_fog_index,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    lix: {
        chart_options: {
            title: bookworm_labels.lix,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    rix: {
        chart_options: {
            title: bookworm_labels.rix,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
    smog_index: {
        chart_options: {
            title: bookworm_labels.smog_index,
            legend:    {
                position: 'none'},
            histogram: {
                bucketSize: 0.5 },
            enableInteractivity: true,
            chartArea: {
                width: '90%',
                height: '90%',
            },
        },
    },
};