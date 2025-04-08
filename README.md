# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

<hr>

**What is the runtime complexity of the algorithm that you implemented?**

My implementation of `permutationSort` uses the Heap's Algorithm to generate permutations of the input array in-place. At each permutation the array is checked for whether it is sorted.

`isSorted()` runs in linear time since it goes through each element to check if the total array is sorted:

$O(n)$

The total number of generated permutations from the Heap's Algorithm works by going linearly through all elements in the array, but stopping at each element to generate all possible combinations (factorially):

$O(n!)$

Runtime Analysis:

$O(n) * O(n!) = O(n * n!)$

**What does a best case input for your implementation look like, what does a worst case input look like?**

A best case input would be when the input is already sorted or has only 0 or 1 elements since I have base cases to catch that situation, that will not enter the while loop. This is because only the `isSorted()` check will run, giving a runtime of just $O(n)$

A worst case input would be one where the last possible permutation generated is the sorted array state. So we would run $n! -1$ unsuccessful permutations until the final correctly sorted one. This gives a runtime of $O(n * n!)$

**How would this complexity change if you generated permutations randomly without memory instead of systematically trying them?**

Randomly generated permutations would still result in an *average* runtime of $O(n * n!)$.

In our worst case scenario above, the last possible permutation at the last element would be the correctly sorted array. With randomly generated permutations, there is now a similar situation where the chance to choose that correct permutation becomes $\frac{1}{n!}$ It is also possible for the permutation guess count to be higher than the length of the array now, since there is no memory and incorrect permutations can overlap. This means that this random method has an unbounded worst-case runtime if it keeps theoretically repeating incorrect guesses.

- Used https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/ to write code for the Heap's algorithm as a reference on how to programatically generate the permutations asked for. I wrote all of this code, and just used this site as a reference.
