
//maximum minnum 
const maxMinArray = [40, 100, 1, 5, 25, 10];


function arrayMax(array) {
  return Math.max.apply(null, array);
}
function arrayMin(array) {
  return Math.min.apply(null, array);
}

document.getElementById("q13").innerHTML = maxMinArray;
document.getElementById("qmax13").innerHTML = " This is Max Value is :  " + arrayMax(maxMinArray);
document.getElementById("qmin13").innerHTML = " This is Min Value is :  " + arrayMin(maxMinArray);
