async function populateDiv() {
  const a = document.getElementById("firstNumber").value;
  const b = document.getElementById("secondNumber").value;

  try {
    const response = await fetch(
      "http://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b
    );
    if (!response.ok) {
      throw new Error("Error");
    }
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
  } catch (error) {
    console.error(error);
  }
}
