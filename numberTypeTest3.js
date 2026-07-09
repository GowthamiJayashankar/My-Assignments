/*Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result*/


function checkNumber(number){

  if (number>0){
    console.log("Positive number");
  }
  else if (number<0){
    console.log("Negative number");
  }
  else {
    console.log("Neutral number");
  }
}
checkNumber(-17);
checkNumber(0);
checkNumber(2);
checkNumber(-5);
