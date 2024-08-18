function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 == 0){return "Can't divide by 0"}
    return num1 / num2;
}

function sign(num){
    return num * -1; 
}

function percent(num){
    return num / 100;
}

function operate(num1, operator, num2){
    if (operator == '+'){
        return add(num1,num2);
    }
    else if (operator == '-'){
        return subtract(num1,num2);
    }
    else if (operator == '*'){
        return multiply(num1,num2);
    }
    else if (operator == '/'){
        return divide(num1,num2);
    }
    else{
        return "Not Valid"
    }
}


//displayReading.innerText ='This';

let calcArr=[];

const operators ='+-*÷';
let displayValue = document.getElementById("display")

function dsplyNumber(button){
    if (displayValue.textContent.length <5){
        displayValue.innerText += button;
    }
    console.log(displayValue.textContent, typeof(displayValue))
}

function dsplyOperator(button){
    if (operators.includes(displayValue.innerText)){
        displayValue.innerText = button;
    }
    else if(typeof(Number(displayValue.textContent)) === 'number'){
        console.log(typeof(Number(displayValue.textContent)) === 'number')
        calcArr.push(Number(displayValue.textContent));
        displayValue.innerText = button;
    }
}

document.getElementById("btn0").addEventListener("click", ()=> dsplyNumber(0));
document.getElementById("btn1").addEventListener("click", ()=> dsplyNumber(1));
document.getElementById("btn2").addEventListener("click", ()=> dsplyNumber(2));
document.getElementById("btn3").addEventListener("click", ()=> dsplyNumber(3));
document.getElementById("btn4").addEventListener("click", ()=> dsplyNumber(4));
document.getElementById("btn5").addEventListener("click", ()=> dsplyNumber(5));
document.getElementById("btn6").addEventListener("click", ()=> dsplyNumber(6));
document.getElementById("btn7").addEventListener("click", ()=> dsplyNumber(7));
document.getElementById("btn8").addEventListener("click", ()=> dsplyNumber(8));
document.getElementById("btn9").addEventListener("click", ()=> dsplyNumber(9));

document.getElementById("btnAdd").addEventListener("click", ()=> dsplyOperator('+'));
document.getElementById("btnSub").addEventListener("click", ()=> dsplyOperator('-'));
document.getElementById("btnMult").addEventListener("click", ()=> dsplyOperator('*'));
document.getElementById("btnDiv").addEventListener("click", ()=> dsplyOperator('÷'));




//extend function into other operators
//add same logic to operator to number
//log when push equal

document.getElementById("btnEqual").addEventListener("click", function(){
    displayValue = document.getElementById("display")
    calcArr = [24, '+', 12];
    if (calcArr[1] === '+'){
        displayValue.innerText = add(calcArr[0], calcArr[2]);
    } 
    else if (calcArr[1] === '-'){
        displayValue.innerText = subtract(calcArr[0], calcArr[2]);
    } 
    else if (calcArr[1] === '*'){
        displayValue.innerText = multiply(calcArr[0], calcArr[2]);
    } 
    else if (calcArr[1] === '÷'){
        displayValue.innerText = divide(calcArr[0], calcArr[2]);
    } 
    else{
        displayValue.innerText = calcArr[0];
    }

})