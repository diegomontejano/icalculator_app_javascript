window.onload = function clock(){
    let time = new Date()
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let fullMinutes = minutes > 9 ? minutes : `0` + minutes  // add "0" before minutes with one digit
    topClock.innerHTML = `${hour}:${fullMinutes}` 
    mainClock.innerHTML = `${hour}:${fullMinutes}`

    if(hour >= 6 && hour < 12){
        regards.innerHTML = `Good Morning`
        mobile.style.backgroundImage = "url(./files/morning.png)"
    } if(hour >= 12 && hour < 18){
        regards.innerHTML = `Good Afternoon`
        mobile.style.backgroundImage = "url(./files/afternoon.png)"
    } if(hour >= 18 && hour < 24 || hour >= 0 && hour < 6){
        regards.innerHTML = `Good Evening`
        mobile.style.backgroundImage = "url(./files/evening.png)"
    }
}

function allClear(){  
    display1.value = " "
    display2.value = "0"
}

function backspace(){
    if(display2.value != "0"){
        display2.value = display2.value.substring(0, display2.value.length-1) 
    }  // remove the last item (number)
    if(display2.value == " "){ 
        display2.value = "0"
    } 
}

function number(number){
    if(display2.value == "0"){  
        display2.value = " "  
    } 
    display2.value += number 
}

function operator(operator){
    if(display1.value != " " && "0"){  
        equal() // call "equal()" if "display1" is filled and an operator is pressed
    }
    if(display2.value != "0" && operator != "±"){ 
        display2.value += operator 
        display1.value = display2.value  
        display2.value = "0" 
    }
    if(display2.value != "0" && operator == "±"){
        display2.value = display2.value - display2.value * 2
    }
} 

function equal(){
    let operador = display1.value[display1.value.length-1]  // store the last item (operator) 
    display1.value = display1.value.substring(0, display1.value.length-1)  // remove the last item (operator)
    let d1 = Number(display1.value) 
    let d2 = Number(display2.value)  
    display1.value = " "

    if(operador == "+"){
        display2.value = d1+d2
    } 
    if(operador == "-"){
        display2.value = d1-d2
    }
    if(operador == "*"){
        display2.value = d1*d2
    }
    if(operador == "÷"){
        display2.value = d1/d2
    }
}
