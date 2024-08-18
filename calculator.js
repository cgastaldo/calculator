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

const displayReading = document.getElementById("display");
//displayReading.innerText ='This';

function display(button){
    if (typeof(button) == 'number'){
        displayReading.innerText =button;
    } 
}

const values =[]



//document.getElementById("btn1").addEventListener("click", ()=> values.push(1));
document.getElementById("btn1").addEventListener("click", function(){
    display(1)
})