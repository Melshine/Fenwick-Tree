function bit(arr){
  var n = arr.length;
  var b = Array(n).fill(0);
  for(let x=1; x<=n; x++){
    // (x & -x) is the range sum for x
    for(let i=x-(x & -x)+1; i<=x; i++) b[x-1] += arr[i-1];
  }
  return b;
}

class Bit {
  constructor(arr){
    this.arr = bit(arr); // BIT array
    this.init = arr; // input array
    this.length = arr.length;
  }

  // cumulative sum to index x
  sumTo(x){
    if(x == undefined) x = this.length-1;
    var sum = 0; x++;
    while(x > 0){
      sum += this.arr[x-1];
      x -= (x & -x);
    }
    return sum;
  }

  // cumulative inclusive sum from index x to y
  sumFromTo(x,y){
    if(y == undefined) y = this.length - 1;
    return this.sumTo(y) - (x==0?0:this.sumTo(x-1));
  }

  read(x){
    return this.init[x];
  }

  // add v to init[x], and update bit array
  addTo(x,v){
    this.init[x] += v;
    x++;
    for(var i=x; i<=this.length; i+=(i & -i)){
      this.arr[i-1] += v;
    }
  }

  // replace init[x] value by v, and update bit array
  update(x,v){
    var vv = this.init[x];
    this.init[x] = v;
    x++;
    for(var i=x; i<=this.length; i+=(i & -i)){
      this.arr[i-1] += (v - vv);
    }
  }

}
