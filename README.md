# Fenwick-Tree

A Fenwick tree or BIT (Binary Indexed Tree) is a data structure that can efficiently calculate prefix sums in a table of numbers. The tree structure allows operations to be performed using only O(log n) node accesses.

This is how sums are stored in the bit array :

<img src="https://github.com/Melshine/Fenwick-Tree/blob/master/Images/fenwick%20tree.JPG?raw=true" width="50%">

For instance, bit[12] stores the sum of elements from arr[9] to arr[12], that is 12 & -12 = 4 elements.

In fact, 12 (10) = 1100 (2) meaning that we can store ..100 = 4 elements from 1100 - 100 = 1000 = 8 exclusive to 12.

11 (10) = 1011 (2) => 1010 (=10) => 1000 (=8)

## What does the operation x & -x does ?

If x contains at least one's 1, it can be written like this : a1z
with whatever "a" and "z" that contains only zeros.

a1z -> a'0z' (~ operation)
-> a'1z (+1 operation)
-> z1z (+a1z)
