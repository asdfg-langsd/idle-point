function element(id){
    return document.getElementById(id)
}

function int(i){
    return parseInt(i)
}

function reload(){
    let text = point < 2 ? " Point" : " Points"
    element('increment').textContent = "Increment " + pointPerClick.toString() + text
    element('pointCounter').textContent = point.toString() + text
    element('oneBitCalculatorText').textContent = "Calculator (1-bit): " + objects.oneBitCalculator.amount.toString()
    element('oneBitCalculatorCost').textContent = "Cost: " + objects.oneBitCalculator.cost.toString() + text

}

function buttonIncrement() {
    point += pointPerClick
    reload()
}

function buy(obj) {
    if(obj == 'oneBitCalculator'){
        if(point >= objects.oneBitCalculator.cost*buyScale){
            point -= objects.oneBitCalculator.cost * buyScale
            objects.oneBitCalculator.cost += Math.ceil(objects.oneBitCalculator.cost * 0.26)
            objects.oneBitCalculator.amount += 1*buyScale
            pointPerClick = 1 + objects.oneBitCalculator.amount
            reload()
        }
    }
}

function setBuyScale(){
    buyScale = int(element('buyScale').value)
    console.log(buyScale)
    if(isNaN(buyScale)){
        buyScale = 1
    } else if(buyScale == 0){
        buyScale = 1
    }
    console.log(buyScale)
}

function save(){
    localStorage.setItem('point', point)
    localStorage.setItem('ppc', pointPerClick)
    localStorage.setItem('oneBitCalculator', objects.oneBitCalculator.amount)
    localStorage.setItem('oneBitCalculatorCost', objects.oneBitCalculator.cost)
    reload()
}

function load(){
    point = parseInt(localStorage.getItem('point'))
    pointPerClick = int(localStorage.getItem('ppc'))
    objects.oneBitCalculator.cost = int(localStorage.getItem('oneBitCalculatorCost'))
    objects.oneBitCalculator.amount = int(localStorage.getItem('oneBitCalculator'))
    reload()
}
