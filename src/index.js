module.exports = function getZerosCount(number, base) {
  // your implementation
  let int = 2;
  let index = 0;
  let arr = [];
  let count = 0;
  while (base > 1)
  {
      while (base % int == 0)
      {
        base = base / int;
        arr.push(int);
      }
      int++;
  }

  for(let i = 0; i < arr.length; ++i){
      if(arr[i] == arr[arr.length - 1])
        count++;
  }

  while(number > 0)
  {
      if(number>1){
        number /= int-1;
        index += Math.floor(number);
      }else{
        break;
      }
  }
  return Math.floor(index/count);
}