const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");

const resultDiv = document.getElementById("content");

const isValidInteger = (num) => {
  return !isNaN(num) && num !== "" && num % 1 === 0 && num !== null;
};

console.log(num1)

if (!isValidInteger(    num1) || !isValidInteger(num2)) {
  const errorSpan = document.createElement("span");
  errorSpan.textContent = "Error!";
  errorSpan.style.color = "red";
  errorSpan.style.fontWeight = "bold";
  resultDiv.appendChild(errorSpan);
  const errorText = document.createElement("span");
  errorText.textContent = ` You must enter integers. You entered "${num1}" and "${num2}". Try again.`;
  resultDiv.appendChild(errorText);
} else {
  const num1Int = parseInt(num1);
  const num2Int = parseInt(num2);
  const result = num1Int + num2Int;
  const calculusSpan = document.createElement("span");
  calculusSpan.textContent = `${num1Int} + ${num2Int} = `;
  resultDiv.appendChild(calculusSpan);
  const resultSpan = document.createElement("span");
  resultSpan.textContent = result;
  resultSpan.style.color = "red";
  resultSpan.style.fontWeight = "bold";
  resultDiv.appendChild(resultSpan);
}

// var sum = parseFloat(num1) + parseFloat(num2);
