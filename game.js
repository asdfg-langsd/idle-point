function element(id){
    return document.getElementById(id)
}

function buttonIncrement() {
    point += pointPerClick
    let text = point < 2 ? " Point" : " Points"
    element('pointCounter').textContent = point.toString() + text
}

function buy(obj) {
    if(obj == 'oneBitCalculator'){
        if(point >= objects.oneBitCalculator.cost){
            let text = point < 2 ? " Point" : " Points"
            point -= objects.oneBitCalculator.cost
            objects.oneBitCalculator.amount += 1
            pointPerClick = 1 + objects.oneBitCalculator.amount
            element('increment').textContent = "Increment " + pointPerClick.toString() + text
            element('pointCounter').textContent = point.toString() + text
            element('oneBitCalculatorText').textContent = "Calculator (1-bit): " + objects.oneBitCalculator.amount.toString()
        }
    }
}