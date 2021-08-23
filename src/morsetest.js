const MORSE_TABLE = {
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

function decoder(input) {
    input = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
    let result=''
    let array = input.split('**********')
    let arrzer =[];
      for (let i = 0; i < array.length; i++) {
       let codeletter = array[i].match(/.{10}/g);
         for( let b = 0; b < codeletter.length; b++) {
            arrzer.push(parseInt(codeletter[b]).toString()); 
         }
        arrzer.push('');
        
     }
     
      let decodedmorseletter = [];
     for( let i=0; i <arrzer.length; i++){
        let morseletter = arrzer[i].match(/.{2}/g);
        
        if (morseletter === null) {
        decodedmorseletter.push('');
        result += ' '
        continue;
        };
        
        for(let b=0; b < morseletter.length; b++){
            if ( morseletter[b] === '11') {
                decodedmorseletter.push('-')
                
            } else {
                decodedmorseletter.push('.')
            }
        }
       
        let letter =decodedmorseletter.join('').trim(); 
        decodedmorseletter=[];
        //  console.log(MORSE_TABLE[letter]);
         result += MORSE_TABLE[letter]
        
         
     }
  console.log(result)
  return result;
     


};

decoder()
