Binary Attack
Binary Attack is a web-based tool designed for decoding and analyzing binary or text-based data, particularly for cryptographic puzzles, geocaching, and other pattern-based challenges. Hosted at nowlistento.me/binaryattack, it provides an intuitive interface to process input data using various encoding methods and customizable parameters.

Features
Multiple Decoding Methods:
Binary: Converts binary strings to numbers, alphabet characters, or ASCII based on user-defined word sizes (2–50 bits) or natural breaks (spaces/newlines).
Bacon Cipher: Supports two styles (Style 1 and Style 2) for decoding binary data into alphabetical text using a 5-bit mapping.
Braille: Decodes binary sequences into Braille characters, supporting row or column-based dot arrangements.
Morse Code: Translates binary sequences (0s and 1s) into Morse code letters, numbers, or punctuation.
Pixel View: Formats binary data into space-separated chunks for visual pattern analysis, with configurable column sizes (2–60).
Customizable Input Processing:
Character Mapping: Users can define custom characters (e.g., 'O' and 'I') to represent 0 and 1, with additional mappings for 'A'/'B' and '-'/'.".
Interpretation Options: Supports normal, inverse, or both interpretations of binary data for flexible decoding.
Alphabet Customization: Allows users to specify a custom alphabet for mapping binary values (default: A-Z, 0-9).
Keyword Scoring:
Scans output for predefined keywords (e.g., "ZERO," "NORTH," "COORDINATE") to identify relevant terms, useful for geocaching or puzzle-solving.
Optionally sorts results by keyword match scores for prioritizing meaningful outputs.
Output Flexibility:
Displays results in a selectable list with detailed breakdowns, including keyword matches and visual binary patterns (0 as '.', 1 as '█').
Supports multiple output formats for binary decoding: auto-detect (alphabet/ASCII/numbers), numbers only, alphabet only, or ASCII only.
User-Friendly Interface:
Interactive form with dropdowns, checkboxes, and text inputs for configuring decoding parameters.
Clear button to reset inputs and outputs.
Supports URL parameters (input and cipher) for preloading data or actions.
Use Cases
Geocaching: Decode binary or text puzzles to extract coordinates or instructions using keyword scanning (e.g., "DEGREES," "CACHE").
Cryptography: Analyze and decode binary data using Bacon, Braille, or Morse ciphers.
Puzzle Solving: Break down complex binary sequences into readable formats for pattern recognition or message extraction.
Educational Tools: Learn about binary encodings and ciphers through hands-on experimentation.
How It Works
Input Data: Enter binary or text data in the input textarea (e.g., 0010101010101010101010).
Configure Parameters:
Select a decoding method (Binary, Bacon, Braille, Morse, Pixel).
Choose word size, output format, or style where applicable.
Customize character mappings, alphabet, and interpretation (normal/inverse).
Enable keyword scoring or sorting for relevant results.
Analyze: Click the corresponding action button (e.g., "Binary," "Morse") to process the input.
View Results: Outputs appear in a selectable list, with details shown in a readonly textarea, including keyword matches and visual patterns.
Technical Details
Frontend: Built with HTML, CSS, and JavaScript.
index.html: Defines the UI, including forms, dropdowns, and textareas, with event-driven JavaScript for interactivity.
binaryconversions.js: Contains core decoding logic for Binary, Bacon, Braille, Morse, and Pixel methods, plus keyword scanning and chunking utilities.
Dependencies:
External scripts: Font Awesome for icons, Google Tag Manager for analytics.
Local scripts: hamburgermenu.js for navigation, genanal.js for shared utilities.
Customization: Supports user-defined keywords, alphabets, and character mappings for flexible decoding.
