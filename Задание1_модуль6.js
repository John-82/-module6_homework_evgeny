// Задание 1
function filterNumbers() {
    let arr = [0, 1, 2, 4, 3, 5, 8, 7, 9, 0];
    let evenElem = arr.filter(elem => elem % 2 == 0);
    console.log( evenElem.length );
    let oddElem = arr.filter(elem => elem % 2 != 0);
    console.log( oddElem.length );
     let nullElem = arr.filter(elem => elem === 0);
    console.log( nullElem.length )
  }
  
  filterNumbers()