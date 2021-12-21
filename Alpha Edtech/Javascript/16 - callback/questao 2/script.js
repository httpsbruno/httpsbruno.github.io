let numbers = [];
let indexTime = 0;

function sortear() {
    reiniciar();
    limparNumeros();
    const btn = document.getElementById('btn-sortear');
    btn.disabled = true;
    position = 1;
    indexTime = setInterval(ciclico, 1000);
}
  

function reiniciar() {
    const numbersVector = [];
    for(let i = 1; i <= 60; i++) {
        numbersVector.push(i);
    }
    numbers = numbersVector;
}



function sortearNumero(conjunto) {
  const n = Math.floor(Math.random() * conjunto.length);
  return conjunto[n];
}


function limparNumeros() {
  const ballElements = document.querySelectorAll('.numbers');
  ballElements.forEach((item) => {
    item.innerHTML = '';
  })
}

let position = 1;

function ciclico() {
  const element = document.getElementById(`num-${position}`);
  const numeroSorteado = sortearNumero(numbers);
  numbers.splice(numbers.indexOf(numeroSorteado), 1);
  element.innerHTML = numeroSorteado

  if(position === 6) {
    clearInterval(indexTime);
    position = 1;
    document.getElementById('btn-sortear').disabled = false;
  }

  position += 1;
}
