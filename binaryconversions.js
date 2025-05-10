function chunk(inputText, chunksize) {
    var chunks = [];
    for (j = 0; j < inputText.length; j += chunksize) {
        chunks.push(inputText.substr(j, chunksize));
    }
    return (chunks);
}

function GetKeywordsArrayInString(sInput, aKeywords) {
    var output = [];
    for (let j = 0; j < sInput.length; j++) {
        for (let i = 0; i < aKeywords.length; i++) {
            if (sInput.substr(j, aKeywords[i].length) == aKeywords[i]) {
                //Found the exact word
                output.push(aKeywords[i]);
                j = j + aKeywords[i].length - 1; // skip letters in sentence
                break;
            }
        }
    }
    return (output);
}
function GetKeywordsInString(sInput, sKeywords) {
    var aKeywords = sKeywords.split(",");

    sInput = sInput.replace(/ /g, "");
    sInput = sInput.toUpperCase(); // UCASE compare
    for (let i = 0; i < aKeywords.length; i++) {
        aKeywords[i] = aKeywords[i].trim().toUpperCase(); //Kill spaces and UCASE
    }
    output = GetKeywordsArrayInString(sInput, aKeywords);

    return (output);
}

function TryBinary(inputText, wsize, oOutput, sAlphabet) {

    var tuples;

    if (wsize == 'Breaks') {
        inputText = inputText.replace(/[^01 ]/g, '');
    } else {
        inputText = inputText.replace(/[^01]/g, '');
    }

    var outputText = "";

    if (wsize == 'Breaks')
        tuples = inputText.split(" ");
    else
        tuples = chunk(inputText.trim(), parseInt(wsize));


    for (j = 0; j < tuples.length; j++) {
        if (tuples[j].length != 0) {
            if (j != 0 && (oOutput == 'Detect' || oOutput == 'Numbers')) outputText += " ";
            v = parseInt(tuples[j], 2);
            switch (oOutput) {
                case 'Detect':
                    if (v > 0 && v < 27) {
                        outputText += sAlphabet.substr(v - 1, 1);
                    } else if (v > 31 && v < 256) {
                        outputText += String.fromCharCode(v);
                    }
                    else
                        outputText += v.toString();
                    break;
                case 'Numbers':
                    outputText += v.toString();
                    break;
                case 'Ascii':
                    if (v > 0 && v < 256) {
                        outputText += String.fromCharCode(v);
                    }
                    else
                        outputText += v.toString();
                    break;
                case 'Alphabet':
                    if (v > 0 && v < 27) {
                        outputText += sAlphabet.substr(v - 1, 1);
                    }
                    else
                        outputText += v.toString();
                    break;
            }
        }
    }
  
    return (outputText);
}

function TryBacon(inputText, ostyle, sAlphabet) {

    inputText = inputText.replace(/[^01]/g, '');
    var outputText = "";
    tuples = chunk(inputText.trim(), 5);
    if (ostyle == 'bcstyle2') {
        for (j = 0; j < tuples.length; j++) {
            v = parseInt(tuples[j], 2);
            if (v >= 0 && v < 26) {
                outputText += sAlphabet.substr(v , 1);
            }
            else
                outputText += "?";
        }
    } else {
        for (j = 0; j < tuples.length; j++) {
            v = parseInt(tuples[j], 2);
            if (v >= 0 && v < 24) {
                if (v<9)
                    outputText += sAlphabet.substr(v , 1);
                else if (v < 20)
                    outputText += sAlphabet.substr(v + 1, 1);
                else
                    outputText += sAlphabet.substr(v +2, 1);
            }
        }
    }
    return (outputText);
}

function BrailleTransform(txt, style) {
    if (style == 'ByColumn') return (txt);
    else
        return (txt.substr(0, 1) + txt.substr(3, 1) + txt.substr(1, 1) + txt.substr(4, 1) + txt.substr(2, 1) + txt.substr(5, 1));
}

function TryBraille(inputText, ostyle) {
    inputText = inputText.replace(/[^01]/g, '');

    const map1 = new Map();
    // By column
    map1.set(BrailleTransform("100000", ostyle), "1");
    map1.set(BrailleTransform("110000", ostyle), "2");
    map1.set(BrailleTransform("100100", ostyle), "3");
    map1.set(BrailleTransform("100110", ostyle), "4");
    map1.set(BrailleTransform("100010", ostyle), "5");
    map1.set(BrailleTransform("110100", ostyle), "6");
    map1.set(BrailleTransform("110110", ostyle), "7");
    map1.set(BrailleTransform("110010", ostyle), "8");
    map1.set(BrailleTransform("010100", ostyle), "9");
    map1.set(BrailleTransform("010110", ostyle), "0");
    map1.set(BrailleTransform("101000", ostyle), "K");
    map1.set(BrailleTransform("111000", ostyle), "L");
    map1.set(BrailleTransform("101100", ostyle), "M");
    map1.set(BrailleTransform("101110", ostyle), "N");
    map1.set(BrailleTransform("101010", ostyle), "O");
    map1.set(BrailleTransform("111100", ostyle), "P");
    map1.set(BrailleTransform("111110", ostyle), "Q");
    map1.set(BrailleTransform("111010", ostyle), "R");
    map1.set(BrailleTransform("011100", ostyle), "S");
    map1.set(BrailleTransform("011110", ostyle), "T");
    map1.set(BrailleTransform("101001", ostyle), "U");
    map1.set(BrailleTransform("111001", ostyle), "V");
    map1.set(BrailleTransform("010111", ostyle), "W");
    map1.set(BrailleTransform("101101", ostyle), "X");
    map1.set(BrailleTransform("101111", ostyle), "Y");
    map1.set(BrailleTransform("101011", ostyle), "Z");
    map1.set(BrailleTransform("111101", ostyle), " AND ");
    map1.set(BrailleTransform("111111", ostyle), " FOR ");
    map1.set(BrailleTransform("111011", ostyle), " OF ");
    map1.set(BrailleTransform("011101", ostyle), " THE ");
    map1.set(BrailleTransform("011111", ostyle), " WITH ");
    map1.set(BrailleTransform("100001", ostyle), "CH");
    map1.set(BrailleTransform("110001", ostyle), "GH");
    map1.set(BrailleTransform("100101", ostyle), "SH");
    map1.set(BrailleTransform("100111", ostyle), "TH");
    map1.set(BrailleTransform("100011", ostyle), "WH");
    map1.set(BrailleTransform("110101", ostyle), "ED");
    map1.set(BrailleTransform("110111", ostyle), "ER");
    map1.set(BrailleTransform("110011", ostyle), "OU");
    map1.set(BrailleTransform("010101", ostyle), "OW");
    map1.set(BrailleTransform("010000", ostyle), "EA");
    map1.set(BrailleTransform("011000", ostyle), "BB");
    map1.set(BrailleTransform("010010", ostyle), "CC");
    map1.set(BrailleTransform("010001", ostyle), "EN");
    map1.set(BrailleTransform("011010", ostyle), "!");
    map1.set(BrailleTransform("010011", ostyle), ".");
    map1.set(BrailleTransform("011001", ostyle), "?");
    map1.set(BrailleTransform("001010", ostyle), "*");
    map1.set(BrailleTransform("001011", ostyle), " BY ");
    map1.set(BrailleTransform("000000", ostyle), " ");
    map1.set(BrailleTransform("000100", ostyle), "'");
    map1.set(BrailleTransform("000110", ostyle), "(abbrev)");
    map1.set(BrailleTransform("001100", ostyle), "ST");
    map1.set(BrailleTransform("001110", ostyle), "@");
    map1.set(BrailleTransform("001101", ostyle), "ING");
    map1.set(BrailleTransform("001111", ostyle), "#"); //Number
    map1.set(BrailleTransform("000011", ostyle), "$"); //Letter

    var outputText = "";
    var bNumber = false;
    tuples = chunk(inputText.trim(), 6);
    for (j = 0; j < tuples.length; j++) {
        if (map1.has(tuples[j])) {
            t = map1.get(tuples[j]);
            if (t >= '0' && t <= '9') {
                if (bNumber == false) {
                    if (t == '0') t = 'J';
                    else t = String.fromCharCode(65 + parseInt(t) - 1);
                }
            }
            else
                bNumber = false;
            if (t == '#' || t == '$') {
                bNumber = (t == '#');
            }
            else
                outputText += t;
        }
        else
            outputText += "?";
    }
    return (outputText);
}

function TryMorse(inputText) {
    inputText = inputText.replaceAll('\n', ' ');
    inputText = inputText.replace(/[^01 ]/g, '');
    inputText = inputText.replaceAll('/', ' ');

    var outputText = "";
    const map1 = new Map();
    map1.set("10", "A");
    map1.set("0111", "B");
    map1.set("0101", "C");
    map1.set("011", "D");
    map1.set("1", "E");
    map1.set("1101", "F");
    map1.set("001", "G");
    map1.set("1111", "H");
    map1.set("11", "I");
    map1.set("1000", "J");
    map1.set("010", "K");
    map1.set("1011", "L");
    map1.set("00", "M");
    map1.set("01", "N");
    map1.set("000", "O");
    map1.set("1001", "P");
    map1.set("0010", "Q");
    map1.set("101", "R");
    map1.set("111", "S");
    map1.set("0", "T");
    map1.set("110", "U");
    map1.set("1110", "V");
    map1.set("100", "W");
    map1.set("0110", "X");
    map1.set("0100", "Y");
    map1.set("0011", "Z");
    map1.set("00000", "0");
    map1.set("10000", "1");
    map1.set("11000", "2");
    map1.set("11100", "3");
    map1.set("11110", "4");
    map1.set("11111", "5");
    map1.set("01111", "6");
    map1.set("00111", "7");
    map1.set("00011", "8");
    map1.set("00001", "9");
    map1.set("101010", ".");


    tuples = inputText.split(" ");
    for (j = 0; j < tuples.length; j++) {
        if (tuples[j].length != 0) {
            if (map1.has(tuples[j])) {
                outputText += map1.get(tuples[j]);
            }
            else
                outputText += "?";
        }
    }
    return (outputText);
}


function TryPixel(inputText, wsize) {

    var tuples;

    if (wsize == 'Breaks') {
        inputText = inputText.replace(/[^01 ]/g, '');
    } else {
        inputText = inputText.replace(/[^01]/g, '');
    }

    var outputText = "";

    if (wsize == 'Breaks')
        tuples = inputText.split(" ");
    else
        tuples = chunk(inputText.trim(), parseInt(wsize));

    return (tuples.join(" "));
}