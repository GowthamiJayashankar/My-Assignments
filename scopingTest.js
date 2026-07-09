let genderType = 'female';

function printGender(){
  let color = 'brown';

  if( genderType == 'female'){
  var age = 30;
  let color = 'pink';
  console.log('the color inside the if block is',color);
  console.log('the age inside the if block is',age);
  }
  console.log('the age outside the if block is',age);
  console.log('the color outside the if block is',color);
}
printGender();
