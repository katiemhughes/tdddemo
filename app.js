arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  };
  
  console.log(arrSum([1,2,3,4]));

module.exports = { 
    arrSum
};