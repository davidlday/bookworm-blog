#!/usr/bin/env python2.7
# -*- coding: UTF-8 -*-
import sys
import json
import cgi
import cgitb
import bookworm.utils.parsers as parsers
import bookworm.utils.counters as counters
import bookworm.utils.calculators as calculators

cgitb.enable()

fs = cgi.FieldStorage()

text = fs.getvalue('text').decode('utf-8')

result = {}

# Syllables, Words, and Sentences
result['syllable_count'] = calculators.calc_syllables_in_text(text)
result['word_count'] = counters.count_words(text)
result['unique_words'] = parsers.parse_unique_words(text)
result['unique_word_count'] = len(result['unique_words'])
result['complex_word_count'] = counters.count_complex_words(text)
result['avg_syllables_per_word'] = result['syllable_count'] / result['word_count']
result['sentence_count'] = counters.count_sentences(text)
result['avg_words_per_sentence'] = result['word_count'] / result['sentence_count']

# Readability Scores
scores = calculators.calc_readability_scores_for_text(text)
result['flesch_reading_ease'] = scores['flesch_reading_ease']
result['flesch_kincaid_grade_level'] = scores['flesch_kincaid']
result['gunning_fog_index'] = scores['gunning_fog']
result['coleman_liau_index'] = scores['coleman_liau']
result['smog_index'] = scores['smog']
result['automated_readability_index'] = scores['ari']
result['lix'] = scores['lix']
result['rix'] = scores['rix']

# Point of View
#result['pov_indicators'] = parsers.parse_pov(text)
result['pov'] = calculators.est_point_of_view_for_text(text)

# Dialogue vs. Narrative
dialogue_lines = parsers.parse_dialogue_lines(text)
dialogue_text = "\n".join(dialogue_lines)
dialogue_unique_words = parsers.parse_unique_words(dialogue_text)
result['dialogue_unique_words'] = parsers.parse_unique_words(dialogue_text)
result['dialogue_word_count'] = counters.count_words(dialogue_text)
result['dialogue_syllable_count'] = calculators.calc_syllables_in_text(dialogue_text)
result['dialogue_unique_word_count'] = len(result['dialogue_unique_words'])
result['narrative_word_count'] = result['word_count'] - result['dialogue_word_count']
result['narrative_syllable_count'] = result['syllable_count'] - result['dialogue_syllable_count']
result['dialogue_word_percentage'] = result['dialogue_word_count'] / result['word_count'] * 100
result['dialogue_syllable_percentage'] = result['dialogue_syllable_count'] / result['syllable_count'] * 100


sys.stdout.write("Content-Type: application/json;charset=utf-8\n\n")
sys.stdout.write(json.dumps(result,indent=1))
sys.stdout.write("\n")
sys.stdout.close()
