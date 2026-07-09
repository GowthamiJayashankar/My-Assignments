//  Conditional Statements


function launchBrowser(browserName) {
 
 if (browserName == 'Chrome') {
   console.log('Launching Chrome browser...');
 }

 else {
  console.log('Chrome is not launching...');
 }
}
launchBrowser('Chrome');
launchBrowser('Edge');



function runTests(testType){
 switch(testType){

  case 'Smoke':
    console.log('Smoke test cases are running...');
    break;
  case 'Sanity':
    console.log("Sanity test cases are running...");
    break;
  case 'Regression':
    console.log("Regression test cases are running...");
    break;
  default:
    console.log("By default its smoke");
    break;
 }
}
runTests('Regression');
runTests('AdHoc');