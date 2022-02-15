function getPri(letter) {
    let pri;
    switch (letter) {
        case 'I':
            pri = 1;
            break;
        case 'V':
            pri = 5;
            break;
        case 'X':
            pri = 10;
            break;
        case 'L':
            pri = 50;
            break;
        case 'C':
            pri = 100;
            break;
        case 'D':
            pri = 500;
            break;
        case 'M':
            pri = 1000;
            break;
        default:
            pri = 0;
    }
    return pri;
}

export function romanToInteger(str) {
    let result = 0;

    for (let i = 0; i < str.length; ) {
        let curLetter = str[i];
        let nextLetter = str[i + 1];
        let curLetterPri = getPri(curLetter);
        let nextLetterPri = getPri(nextLetter);

        if (curLetterPri < nextLetterPri) {
            result += nextLetterPri - curLetterPri;
            // переходим через элемент
            i += 2;
        } else {
            result += curLetterPri;
            i++;
        }
    }
    return result;
}
