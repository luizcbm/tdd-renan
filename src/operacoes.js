

// Definindo as funções para as operações matemáticas
function sum(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { throw 'Erro' }
    return num1 + num2
}

function sub(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { throw 'Erro' } return num1 - num2
}

function div(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw ('Erro');
      }
      if (num2 === 0) {
        throw ('Erro');
      }
      return num1 / num2;
  }

function mul(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw 'Erro'
    }

    return num1 * num2
}

function pot(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw 'Erro';
    }
    return num1 ** num2
}
function rai(num1) {
    console.log(num1)
    if (isNaN(num1)) {
        throw 'Erro';
    }
    return num1 = Math.sqrt(num1)
}

module.exports = { sum, sub, div, mul, pot, rai }