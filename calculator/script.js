function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function backspace() {
  let display = document.getElementById("display").innerText;
  if (display.length > 1) {
    document.getElementById("display").innerText = display.slice(0, -1);
  } else {
    document.getElementById("display").innerText = "0";
  }
}

function appendToDisplay(value) {
  let display = document.getElementById("display").innerText;
  if (display === "0") {
    display = "";
  }
  document.getElementById("display").innerText = display + value;
}

function calculate() {
  let display = document.getElementById("display").innerText;
  try {
    // Replace ^ with ** for exponentiation
    display = display.replace(/\^/g, '**');
    
    // Handle square root function
    display = display.replace(/√/g, 'Math.sqrt');
    
    let result = eval(display);
    document.getElementById("display").innerText = result;
  } catch (error) {
    document.getElementById("display").innerText = "Error";
  }
}
