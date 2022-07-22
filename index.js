// var brandObject = {
//   Audi: ['A4', 'A8L', 'Q3', 'RS4'],
//   Mercedes: ['S class', 'GLC', 'GLE', 'AMG'],
//   BMW: ['ALPINA', 'i8', 'M3', 'X5'],
//   Volvo: ['V70', 'XC90', 'S80', 'Amazon'],
// };

// console.log(brandObject);

// function populate(s1, s2){
//   var s1 = document.getElementById('brand');
//   var s2 = document.getElementById('model');

//   s2.innerHTML = '';

//   if (s1.value == 'audi') {
//     var optionArray = ['select brand|Select brand', 'a4|A4', 'a8l|A8L', 'q3|Q3', 'rs4|RS4'];
//   } else if (s1.value == 'mercedes') {
//     var optionArray = ['select brand|Select brand', 's class|S class', 'glc|GLC', 'gle|GLE', 'amg|AMG'];
//   } else if (s1.value == 'bmw') {
//     var optionArray = ['select brand|Select brand', 'alpina|ALPINA', 'i8|i8', 'm3|M3', 'x5|X5'];
//   } else if (s1.value == 'volvo') {
//     var optionArray = ['select brand|Select brand', 'v70|V70', 'xc90|XC90', 's80|S80', 'amazon|Amazon'];
//   }else{
//     var optionArray = ['select brand|Select brand']
//   }

//   for(var option in optionArray){
//     var pair = optionArray[option].split('|');
//     var newOption = document.createElement('option');

//     newOption.value = pair[0];
//     newOption.innerHTML=pair[1];
//     s2.options.add(newOption);
//   }
// };
