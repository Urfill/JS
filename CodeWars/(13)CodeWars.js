/*

Very simple, given a number, find its opposite.

*/

let opposite = num => {
    if (num >= 0) { // pos to neg
        num -= (num * 2);
        //num *= -1; // Или так
    } else { // neg to pos
        num = Math.abs(num);
        //num *= -1; // или так
    }
    console.log(num);
    return num;
}

opposite(1); // -1
opposite(-1); // 1