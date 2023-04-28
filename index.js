
function calculete(ev){
    ev.preventDefault()

    const height = document.getElementById('height').value 
    const weight = document.getElementById('weight').value
    

    const imc = (weight / (height * height)).toFixed(1)
    
    let  result = ""

    if (imc < 18.5) {
        result= 'Abaixo do peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        result = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        result = 'Acima do peso'
    } else if (imc >= 30 && imc <= 34.9) {
        result = 'Obesidade  grau I'
    } else if (imc >= 35 && imc <= 39.9) {
        result= 'Obesidade grau II'
    } else if (imc >= 40) {
        result = 'Obesidade grau III'
    }
    document.getElementById('result').innerHTML = result 
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''

  
}

document.getElementById('tipsForm').addEventListener('submit', calculete)