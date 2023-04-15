const diameterLogic = radius => 2 * radius;
const circumferenceLogic = radius => 2 * Math.PI * radius;
const areaLogic = radius => Math.PI * radius * radius;

const calculate = function(radiiArr, callback) {
    const narr = [];

    for(const radius of radiiArr) {
        const answer = callback(radius);
        narr.push(answer);
    }

    return narr;
}

const radii = [2, 1, 3, 5];

console.log(calculate(radii, diameterLogic));
console.log(calculate(radii, circumferenceLogic));
console.log(calculate(radii, areaLogic));



//Closures:
function parent() {
    const a = 10;

    function child() {
        console.log(a);
        return 'Something';
    }

    return child;
}

const parentReturnedValue = parent();
const childReturnedValue = parentReturnedValue();
console.log(childReturnedValue); 