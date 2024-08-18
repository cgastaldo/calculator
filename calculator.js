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
    else if (operator == '÷'){
        return divide(num1,num2);
    }
    else{
        return "Nooo!"
    }
}

let calcArr=[];
const operators ='+-*÷';
let displayValue = document.getElementById("display")

function dsplyNumber(button){
    if (displayValue.textContent === ''){
        displayValue.textContent = button;
    }
    else if (operators.includes(displayValue.textContent)){
        calcArr.push(displayValue.textContent);
        displayValue.textContent = button;
    }
    else if (displayValue.textContent.length <5){
        displayValue.textContent += button;
    }
    console.log(displayValue.textContent, displayValue.textContent)
}

function dsplyOperator(button){
    if (operators.includes(displayValue.textContent)){
        displayValue.textContent = button;
    }
    else if(typeof(Number(displayValue.textContent)) === 'number'){
        console.log(typeof(Number(displayValue.textContent)) === 'number')
        calcArr.push(Number(displayValue.textContent));
        displayValue.textContent = button;
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
document.getElementById("btn9").addEventListener("click", ()=> dsplyNumber(9));;

document.getElementById("btnAdd").addEventListener("click", ()=> dsplyOperator('+'));
document.getElementById("btnSub").addEventListener("click", ()=> dsplyOperator('-'));
document.getElementById("btnMult").addEventListener("click", ()=> dsplyOperator('*'));
document.getElementById("btnDiv").addEventListener("click", ()=> dsplyOperator('÷'));

document.getElementById("btnPolarity").addEventListener("click", function(){
    displayValue.textContent = (String(Number(displayValue.textContent) * -1))
})

document.getElementById("btnPercentage").addEventListener("click", function(){
    displayValue.textContent = (String(Number(displayValue.textContent) * 0.01))
})

document.getElementById("btnDec").addEventListener("click", function(){
    if (displayValue.textContent.includes('.')){
        return
    }
    displayValue.textContent = (String(Number(displayValue.textContent) + '.'));
})

document.getElementById("btnClear").addEventListener("click", function(){
    displayValue.textContent = '';
    calcArr.length = [];
})

document.getElementById("btnEqual").addEventListener("click", function(){
    calcArr.push(Number(displayValue.textContent));
    console.log(calcArr);
    result = operate(calcArr[calcArr.length-3], 
        calcArr[calcArr.length-2], calcArr[calcArr.length-1]);
    if (String(result).length > 10){
        result = result.toFixed(8);
    }
    displayValue.textContent = result;
})