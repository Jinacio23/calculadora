const btn = document.getElementById('clear')

let visor = document.getElementById('display').value

function getValue(caracter) {
    document.getElementById('display').value += caracter
}

function percent() {
    porCem = document.getElementById('display').value / 100
    document.getElementById('display').value = porCem
}

function result() {
    val = document.getElementById('display').value
    document.getElementById('display').value = eval(val)
}

btn.addEventListener('click', () => {
    document.getElementById('display').value = ""
})