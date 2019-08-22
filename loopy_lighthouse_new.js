function loopyLighthouse (array1, array2, array3) {
  
  let num;
  for(num = array1[0]; num <= array1[1]; num++) {
    if(num % array2[0] === 0 && num % array2[1] === 0) {
      console.log(array3[0] + array3[1]);
    } 

    else if(num % array2[0] === 0) {
      console.log(array3[0]);
    }

    else if(num % array2[1] === 0) {
      console.log(array3[1]);
    }
    
    else {
      console.log(num);
    }
    
  }
  
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

