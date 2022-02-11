export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    if (str == null) return -1;
    var rezult = 0,
        value = 0,
        prev = 0;

    for (var i = 0; i < str.length; i++) {
        var current = char_to_int(str.charAt(i));
        if (current > prev) {
            rezult -= 2 * value;
        }
        if (current !== prev) {
            value = 0; //
        }
        value += current;
        rezult += current;
        prev = current;
    }
    return rezult;
}

function char_to_int(character) {
    switch (character) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
