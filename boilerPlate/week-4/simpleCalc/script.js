function populateDiv() {
  const element = document.getElementById("finalSum");
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;
  element.innerHTML = parseInt(a) + parseInt(b);
}
