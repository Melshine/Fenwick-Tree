# Fenwick-Tree > Segment Tree to detailled

A Fenwick tree or BIT (Binary Indexed Tree) is a data structure that can efficiently calculate prefix sums in a table of numbers. The tree structure allows operations to be performed using only O(log n) node accesses.

This is how sums are stored in the bit array :

<img src="https://github.com/Melshine/Fenwick-Tree/blob/master/Images/fenwick%20tree.JPG?raw=true" width="50%">

For instance, bit[12] stores the sum of elements from arr[9] to arr[12], that is 12 & -12 = 4 elements.

In fact, 12 (10) = 1100 (2) meaning that we can store ..100 = 4 elements from 1100 - 100 = 1000 = 8 exclusive to 12.

11 (10) = 1011 (2) => 1010 (=10) => 1000 (=8)

## What does the operation x & -x do ?

If x contains at least one's 1, it can be written like this : a1z
with whatever "a" and "z" that contains only zeros.

a1z -> a'0z' (~ operation)
-> a'1z (+1 operation)
-> z1z (+a1z)

## Some exercises
Complete the insertionSort function. It should return an integer that represents the number of shifts required to sort the given array using Insertion Sort method (https://www.hackerrank.com/challenges/insertion-sort/problem).
<details>
  <summary>Solution</summary>

Here, the initial array for bit is not arr (the input), but the array representing for each value arr[i] the number of values arr[i] encountered, at index arr[i]. So the initial array is full of '0'.

````javascript
// Complete the insertionSort function below.
function insertionSort(arr){
    var bit = new Bit(Array(Math.max(...arr)+1).fill(0));
    var shifts = 0;
    
    arr.forEach((v,i) => {
        shifts += bit.sumFromTo(v+1);
        bit.add(arr[i]);
    })

    return shifts;
}

class Bit {
  constructor(arr){
    this.arr = bit(arr);
    this.length = arr.length;
  }

  sumTo(x){
    if(x == undefined) x = this.length-1;
    var sum = 0; x++;
    while(x > 0){
      sum += this.arr[x-1];
      x -= (x & -x);
    }
    return sum;
  }

  sumFromTo(x,y){
    if(y == undefined) y = this.length - 1;
    return this.sumTo(y) - (x==0?0:this.sumTo(x-1));
  }

  add(x){
    x++;
    for(var i=x; i<=this.length; i+=(i & -i)){
      this.arr[i-1] ++;
    }
  }

}

function bit(arr){
  var n = arr.length;
  var b = Array(n).fill(0);
  for(let x=1; x<=n; x++){
    for(let i=x-(x & -x)+1; i<=x; i++) b[x-1] += arr[i-1];
  }
  return b;
}
````
</details>
