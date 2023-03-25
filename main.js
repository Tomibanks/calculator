//js code

let input = ""; // initialise the input varaible to an empty string 

function appendToInput(value) {
input += value //Append the button value to the input string 
document.getElementById('result').value = input; // set the input field to the input string
}

function calculate() {
  const result = eval(input); //use the eval() function to calculate the input string

  document.getElementById('result').value = result;
  input = ''; // Reset the input variable to an empty string
}

function clearInput() {
  input = ''; //Reset the input variable variable to an empty string 
  document.getElementById('result').value = ''; // Reset the input field to an empty string 
};

