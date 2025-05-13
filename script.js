const accept = (inputButton) => {
  let display = document.querySelector('.display').innerHTML;
  if (display.includes('=')) {
    // Only keep the result for further calculations
    display = display.split('=')[1].trim();
  }
  
  // Put a space before and after the operator
  let space = '';
  if (inputButton === '+' || inputButton === '-' || inputButton === '*' || inputButton === '/') 
    space = ' ';
  else 
    space = '';
  
    // Do not add space around equal sign before evaluating
  if (inputButton !== '=') {
    display += `${space}${inputButton}${space}`;
    document.querySelector('.display').innerHTML = display;
  }

  if (inputButton === '=') {
    console.log(display);
    const result = eval(display);
    console.log(result);
    document.querySelector('.display').innerHTML = `${display} = ${result}`;
  }

  if (inputButton === 'C') {
    document.querySelector('.display').innerHTML = '';
  }
}
