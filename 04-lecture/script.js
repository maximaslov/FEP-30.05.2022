const ACTIONS = ['+', '-', '*', '/', '%'];

main();

function main() {
  const action = getAction();
  const operandA = getOperand('A', 2);
  const operandB = getOperand('B', 5);


  if (!isValidAction(action)) {
    return alert('Wrong action');
  }
  if (!isOperandValid(operandA) || !isOperandValid(operandB)) {
    return alert('Wrong operand');
  }

  const result = calc(operandA, operandB, action);
  
  showResult(operandA, operandB, action, result);
}

function getAction() {
  return prompt(`Enter operator ${ACTIONS.join(', ')}`, '+');
}

function isValidAction(action) {
  return ACTIONS.includes(action);
}

function isOperandValid(operand) {
  return !isNaN(operand);
}

function getOperand(operandName, def) {
  return Number(prompt(`Enter operand ${operandName}`, def));
}

function calc(operandA, operandB, action) {
  switch (action) {
    case '+': return add(operandA, operandB);
    case '-': return sub(operandA, operandB);
    case '*': return mul(operandA, operandB);
    case '/': return div(operandA, operandB);
    default: return 'Wrong action';
  }
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function showResult(operandA, operandB, action, result) {
  console.log(`${operandA} ${action} ${operandB} = ${result}`);
}