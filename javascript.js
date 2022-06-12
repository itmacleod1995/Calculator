const number = document.querySelector("span");
var addition = document.getElementById("add");

//var previous;
var current;

var nextNum = false; //set to true if an order of operation is the most recent button pressed

var adding = false; //set to true once the user presses the "+" button
var subtraction = false;
var multiplication = false;
var division = false;
var addingDecimal = false;
var decimalCount = 0; //make sure we can't add more than one decimal at a time

//converting current number to a positive or negative 
function convert() {
    let newNum = parseInt(number.textContent) * -1;
    number.textContent = newNum;
}

posOrNeg.addEventListener("click", convert);

one.addEventListener("click", function (e) {
    one.classList.add("clickedOn");
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "1";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 1;
        number.textContent = newNumber;

    }

});

two.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "2";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 2;
        number.textContent = newNumber;
    }
});

three.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "3";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 3;
        number.textContent = newNumber;
    }

});

four.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "4";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 4;
        number.textContent = newNumber;
    }
});

five.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "5";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 5;
        number.textContent = newNumber;
    }
});

six.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "6";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 6;
        number.textContent = newNumber;
    }
});

seven.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "7";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 7;
        number.textContent = newNumber;
    }
});

eight.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "8";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 8;
        number.textContent = newNumber;
    }
});

nine.addEventListener("click", function (e) {

    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "9";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 9;
        number.textContent = newNumber;
    }
});

zero.addEventListener("click", function (e) {
    if (adding) {
        addition.style.backgroundColor = "#FF9500";
        addition.style.color = "white";
    }

    if (subtraction) {
        minus.style.backgroundColor = "#FF9500";
        minus.style.color = "white";
    }

    if (multiplication) {
        multiply.style.backgroundColor = "#FF9500";
        multiply.style.color = "white";
    }

    if (division) {
        divide.style.backgroundColor = "#FF9500";
        divide.style.color = "white";
    }

    if (number.textContent == "0" || nextNum) {
        number.textContent = "0";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 0;
        number.textContent = newNumber;
    }
});

function clearButtonHighlight() {
    var all = document.getElementsByTagName("button");
    for (let i = 0; i < all.length; i++) {
        if ((all[i].id == "add") || (all[i].id == "minus") || (all[i].id == "divide") || (all[i].id == "multiply") || (all[i].id == "equals")) {
            all[i].style.backgroundColor = "#FF9500";
            all[i].style.color = "white";
        }
    }
}

//Clearing functionality

function clearNumber() {
    number.textContent = "0";
    current = 0;
    clearButtonHighlight();
}

clear.addEventListener("click", clearNumber);

//addition
addition.addEventListener("click", function (e) {
    nextNum = true;
    addingDecimal = false;
    decimalCount = 0;
    addition.style.backgroundColor = "white";
    addition.style.color = "#FF9500";

    current = number.textContent;
    adding = true;
})

//subtraction
minus.addEventListener("click", function () {
    nextNum = true;
    addingDecimal = false;
    decimalCount = 0;
    minus.style.backgroundColor = "white";
    minus.style.color = "#FF9500";

    current = number.textContent;
    subtraction = true;
});

//multiplication
multiply.addEventListener("click", function () {
    nextNum = true;
    addingDecimal = false;
    decimalCount = 0;
    multiply.style.backgroundColor = "white";
    multiply.style.color = "#FF9500";

    current = number.textContent;
    multiplication = true;
});

//division
divide.addEventListener("click", function () {
    nextNum = true;
    addingDecimal = false;
    decimalCount = 0;
    divide.style.backgroundColor = "white";
    divide.style.color = "#FF9500";

    current = number.textContent;
    division = true;
})

//equal
const equal = document.getElementById("equals");

equal.addEventListener("click", function () {
    if (adding) {
        let sum = parseFloat(number.textContent) + parseFloat(current);
        number.textContent = sum;
        current = sum;
        adding = false;
    } else if (subtraction) {
        let result = parseFloat(current) - parseFloat(number.textContent);
        number.textContent = result;
        current = result;
        subtraction = false;
    } else if (multiplication) {
        let product = parseFloat(current) * parseFloat(number.textContent);
        number.textContent = product;
        current = product;
        multiplication = false;
    } else if (division) {
        let quotient = (parseFloat(current) / parseFloat(number.textContent)).toFixed(2);
        number.textContent = quotient;
        current = quotient;
        division = false;
    }
})

//decimal
decimal.addEventListener("click", function () {
    addingDecimal = true;
    if (decimalCount < 1) {
        let num = number.textContent + ".";
        decimalCount++;
        number.textContent = num;
    }
})


