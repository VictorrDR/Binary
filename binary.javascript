document.getElementById('convertButton').addEventListener('click', function () {
  const binaryInput = document.getElementById('binaryInput').value;
  const decimalResult = convertBinaryToDecimal(binaryInput);
  document.getElementById('result').textContent = `Decimal: ${decimalResult}`;
});

function convertBinaryToDecimal(binary) {
  // Check if the input is a valid binary number
  if (/^[01]+$/.test(binary)) {
    return parseInt(binary, 2);
  } else {
    return 'Invalid binary input';
  }
}
