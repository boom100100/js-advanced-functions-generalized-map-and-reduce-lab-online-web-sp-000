// Add your functions here


function map(array, work){
  let r = [];
  for (let i = 0; i < array.length; i++ ) {
    r.push(work(array[i]));
  }
  return r
  
  
}

function reduce(array, work, startingPoint=0) {
    let r = (!!starting) ? starting : src[0];
    let total = startingPoint;
  for (let i = startingPoint; i < array.length; i++ ) {
    r = work(array[i], total);
    //console.log(Boolean(array[i]));
  }
  return total;
}

//function (){}

