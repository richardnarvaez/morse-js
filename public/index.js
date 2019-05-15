
// Variables
    var mToText = { 
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    var tToMorse = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----'
    }


    function decodeMorseToText(morse) {

        let el = document.getElementById("iText"); 
        
        if(!validationMorse(morse)){
            el.value = "No se puede decodificar";
            return null
        }

        var texto_final = morse
        .split('  ')
        .map(
            // Palabras
            palabra => 
                palabra
                .split(' ')
                .map(
                    // Letras
                    letra => mToText[letra]
                ).join('')
        ).join(' ');

        el.value = texto_final;
        return texto_final
    }

    function decodeTextToMorse(text){

        let el = document.getElementById("iMorse"); 
        
        if(!validationText(text)){
            el.value = "No se puede decodificar";
            return null
        }

        var morse = text
        .split(' ')
        .map(
            palabra => 
                palabra
                .split('')
                .map(
                    letra => tToMorse[letra]
                ).join('/')

        ).join(' // ');
        el.value = morse;
        return morse

    }
  
    function validationText(tValid){
        return /^[a-zA-Z0-9 ]*$/.test(tValid);
    }
    
    function validationMorse(tValid){
        return /^[/ .-]*$/.test(tValid);
    }

//   var text = decodeMorseToText("... --- ...");
//   var morse = decodeTextToMorse(text);

//   console.log("PALABRA: " + text);
//   console.log(validationText(text))
//   console.log("MORSE: " + morse);
//   console.log(validationMorse(morse))