// Helper Function for checking if array is sorted
function isSorted(array) {
    for (let index = 1; index < array.length; index++) {
        if (array[index] < array[index - 1]) {
            return false;
        }
    }
    return true;
}

function permutationSort(array) {
    // Base Case: Array only has 1 or 0 elements
    if (array.length <= 1) {
        return 0;
    }

    let permutation_count = 1;
    let counter_array = [];

    // Initialize the Counter Array with all 0s
    for (let index = 0; index < array.length; index++) {
        counter_array[index] = 0;
    }

    // Check if input is already sorted,
    // if yes then return only 1 permutation count
    if (isSorted(array)) {
        return permutation_count;
    }

    // Start permutations with Heap's Algorithm
    let index = 0;
    while (index < array.length) {
        // Loop until all permutations have bene generated

        // Determine whether a swap should be performed at this current index
        if (counter_array[index] < index) {

            // Determine which index to swap based on parity at current index
            // If even -> swap position 0
            // If odd -> swap with counter_array[index]
            let swapIndex;
            if (index % 2 == 0) {
                swapIndex = 0;
            } else {
                swapIndex = counter_array[index]
            }

            // Swap
            let temp = array[swapIndex];
            array[swapIndex] = array[index];
            array[index] = temp;

            permutation_count = permutation_count + 1;

            // Check if we've landed on the proper sorted array state
            if (isSorted(array)) {
                return permutation_count;
            }

            counter_array[index] = counter_array[index] + 1;
            index = 0;
        } else {
            counter_array[index] = 0;
            index = index + 1;
        }
    }

    return permutation_count;
}
