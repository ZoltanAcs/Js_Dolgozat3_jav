// Feladat 1

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("Android"));
console.log(isIsogram("olam"));
console.log(isIsogram(""));

// Feladat 2 ############################################

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}

console.log(invert(24, -23, 0, -1, 2, 665, -999));

// Feladat 3 ############################################

const stringClean = s => s.replace( /\d/g, "" );

console.log(stringClean("It's a5 ni1ce d4ay no0t to g3et any ba9d marks5, i1sn't 1it? c:3"));
console.log(stringClean("T5amas m1ié3rt f41ra6szta5sz?"));

// Feladat 4 ############################################

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}

console.log(isLeapYear(1250));
console.log(isLeapYear(2004));
console.log(isLeapYear(12215));