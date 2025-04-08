const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test 1: Check permutations returned is more than 0, and that the array state is sorted
const testPermutationsMoreThanZero =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        var count = permutationSort(a1);
        return count >= 0 && JSON.stringify(a1) == JSON.stringify(a2.sort(function(a, b) { return a - b; }));
    });

// Test 2: Test that an Empty array has 0 permutations
const testEmptyArray =
    jsc.forall("bool", function(_) {
        var a1 = [];
        var count = permutationSort(a1);
        return (count === 0 && a1.length === 0);
    });

// Test 3: Test hardcoded input of [2, 1, 3]
const testKnownCase = jsc.forall("bool", function(_) {
    const a1 = [2, 1, 3];
    const a2 = [1, 2, 3];
    const count = permutationSort(a1);
    return (count > 1 && JSON.stringify(a1) === JSON.stringify(a2));
});

// Test 4: Test hardcoded input of [3, 2, 1]
const testWorstCase = jsc.forall("bool", function(_) {
    const a1 = [3, 2, 1];
    const a2 = [1, 2, 3];
    const count = permutationSort(a1);
    return (count === 6 && JSON.stringify(a1) === JSON.stringify(a2));
});

jsc.assert(testPermutationsMoreThanZero);
console.log('testPermutationsMoreThanZero Passed.')
jsc.assert(testEmptyArray);
console.log('testEmpty Passed.')
jsc.assert(testKnownCase);
console.log('testKnownCase Passed.')
jsc.assert(testWorstCase);
console.log('testWorstCase Passed.')