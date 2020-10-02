exports.min = function min (array){
   if(Array.isArray(array) && array.length >0){
     let minNumber = array[0];
     for (var i = 1; i < array.length; i++){
       if (array[i] < minNumber){
          minNumber = array[i];
       }
     }
     return minNumber;
   } else {
     return 0;
   }
 }
 
 
 exports.max = function max (array){
   if(Array.isArray(array) && array.length >0){
     let maxNumber = array[0];
     for (var i = 1; i < array.length; i++){
       if (array[i] > maxNumber){
          maxNumber = array[i];
       }
     }
     return maxNumber;
   } else {
     return 0;
   }
 }
 
 
  exports.avg = function avg (array){
   if(Array.isArray(array) && array.length >0){
     let averageNumber=0;
     for (var i = 0; i < array.length; i++){
         averageNumber+=array[i];
     }
     return averageNumber / array.length;
   } else {
     return 0;
   }
 }