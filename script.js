function mostrar(tipo) {
    const inputArea = document.getElementById('input-area');
    const resultDiv = document.getElementById('result');
    inputArea.innerHTML = '';
    resultDiv.innerHTML = '';

    switch (tipo) {
        case 'comparar':
            inputArea.innerHTML = `
                <input type="number" id="num1" placeholder="Digite o primeiro número">
                <input type="number" id="num2" placeholder="Digite o segundo número">
                <button onclick="compararNumeros()">Comparar</button>
            `;
            break;
        case 'media':
            inputArea.innerHTML = `
                <input type="number" id="quantidade" placeholder="Quantidade de números">
                <button onclick="criarInputsMedia()">Criar campos</button>
            `;
            break;
        case 'parImpar':
            inputArea.innerHTML = `
                <button onclick="displayParImpar('p')">Números Pares</button>
                <button onclick="displayParImpar('i')">Números Ímpares</button>
            `;
            break;
        case 'tabuada':
            inputArea.innerHTML = `
                <input type="number" id="tabuadaNum" placeholder="Digite um número">
                <button onclick="displayTabuada()">Mostrar Tabuada</button>
            `;
            break;
        case 'calculadora':
            inputArea.innerHTML = `
                <input type="number" id="calcNum1" placeholder="Digite o primeiro número">
                <input type="number" id="calcNum2" placeholder="Digite o segundo número">
                <select id="operacao">
                    <option value="1">Adição</option>
                    <option value="2">Subtração</option>
                    <option value="3">Divisão</option>
                    <option value="4">Multiplicação</option>
                </select>
                <button onclick="calculadora()">Calcular</button>
            `;
            break;
        case 'primo':
            inputArea.innerHTML = `
                <input type="number" id="primoNum" placeholder="Digite um número">
                <button onclick="verificarPrimo()">Verificar</button>
            `;
            break;
    }
}

function compararNumeros() {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (a > b) {
        resultDiv.innerHTML = `${a} é maior que ${b}`;
    } else if (a === b) {
        resultDiv.innerHTML = `${a} é igual a ${b}`;
    } else {
        resultDiv.innerHTML = `${a} é menor que ${b}`;
    }
}

function criarInputsMedia() {
    const qtdNums = Number(document.getElementById('quantidade').value);
    const inputArea = document.getElementById('input-area');
    inputArea.innerHTML = '';

    if (qtdNums > 0) {
        for (let i = 0; i < qtdNums; i++) {
            inputArea.innerHTML += `<input type="number" class="numero" placeholder="Digite o número ${i + 1}"><br>`;
        }
        inputArea.innerHTML += `<button onclick="calcularMedia()">Calcular Média</button>`;
    } else {
        inputArea.innerHTML = 'Digite uma quantidade válida.';
    }
}

function calcularMedia() {
    const numeros = document.querySelectorAll('.numero');
    let soma = 0;

    numeros.forEach(input => {
        soma += Number(input.value);
    });

    const media = soma / numeros.length;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `A média é: ${media.toFixed(1)}`;
}

function displayParImpar(opcao) {
    const resultDiv = document.getElementById('result');
    let numeros = [];
    
    if (opcao === 'p') {
        for (let i = 2; i <= 100; i += 2) {
            numeros.push(i);
        }
        resultDiv.innerHTML = "Os números pares até 100 são: " + numeros.join(", ");
    } else {
        for (let i = 1; i <= 100; i += 2) {
            numeros.push(i);
        }
        resultDiv.innerHTML = "Os números ímpares até 100 são: " + numeros.join(", ");
    }
}

function displayTabuada() {
    const tabuada = Number(document.getElementById('tabuadaNum').value);
    const resultDiv = document.getElementById('result');
    let result = "";

    for (let i = 1; i <= 24; i++) {
        result += `${tabuada} x ${i} = ${tabuada * i} <br>`;
    }
    resultDiv.innerHTML = result;
}

function calculadora() {
    const num1 = Number(document.getElementById('calcNum1').value);
    const num2 = Number(document.getElementById('calcNum2').value);
    const operacao = document.getElementById('operacao').value;
    const resultDiv = document.getElementById('result');
    let resultado;

    switch (operacao) {
        case "1":
            resultado = num1 + num2;
            resultDiv.innerHTML = `${num1} + ${num2} = ${resultado}`;
            break;
        case "2":
            resultado = num1 - num2;
            resultDiv.innerHTML = `${num1} - ${num2} = ${resultado}`;
            break;
        case "3":
            if (num2 === 0) {
                resultDiv.innerHTML = "Erro: Divisão por zero!";
            } else {
                resultado = num1 / num2;
                // Formata o resultado para exibir até uma casa decimal, se necessário
                resultDiv.innerHTML = `${num1} / ${num2} = ${resultado % 1 === 0 ? resultado.toFixed(0) : resultado.toFixed(1)}`;
            }
            break;
        case "4":
            resultado = num1 * num2;
            resultDiv.innerHTML = `${num1} x ${num2} = ${resultado}`;
            break;
        default:
            resultDiv.innerHTML = "Escolha uma operação válida!";
    }
}

function verificarPrimo() {
    const num = Number(document.getElementById('primoNum').value);
    const resultDiv = document.getElementById('result');
    let isPrimo = true;

    if (num <= 1) {
        isPrimo = false;
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
    }
    resultDiv.innerHTML = isPrimo ? `${num} é um número primo!` : `${num} não é um número primo.`;
}


