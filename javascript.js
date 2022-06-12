const number = document.querySelector("span");
var addition = document.getElementById("add");

//time
//var datetime = new Date();
//document.getElementById("date-time").textContent = datetime.getHours() + ":" + datetime.getMinutes();


//var previous;
var current;

var nextNum = false; //set to true if an order of operation is the most recent button pressed

var adding = false; //set to true once the user presses the "+" button
var subtraction = false;
var multiplication = false;

one.addEventListener("click", function (e) {
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
    addition.style.backgroundColor = "white";
    addition.style.color = "#FF9500";

    current = number.textContent;
    adding = true;
})

//subtraction
minus.addEventListener("click", function () {
    nextNum = true;
    minus.style.backgroundColor = "white";
    minus.style.color = "#FF9500";

    current = number.textContent;
    subtraction = true;
});

//multiplication
multiply.addEventListener("click", function () {
    nextNum = true;
    multiply.style.backgroundColor = "white";
    multiply.style.color = "#FF9500";

    current = number.textContent;
    multiplication = true;
});

//equal
const equal = document.getElementById("equals");

equal.addEventListener("click", function () {
    if (adding) {
        let sum = parseInt(number.textContent) + parseInt(current);
        number.textContent = sum;
        current = sum;
        adding = false;
    } else if (subtraction) {
        let result = parseInt(current) - parseInt(number.textContent);
        number.textContent = result;
        current = result;
        subtraction = false;
    } else if (multiplication) {
        let product = parseInt(current) * parseInt(number.textContent);
        number.textContent = product;
        current = product;
        multiplication = false;
    }
})


