const number = document.querySelector("span");
var addition = document.getElementById("add");

var previous;
var current;

var nextNum = false; //set to true if an order of operation is the most recent button pressed

var adding = false; //set to true once the user presses the "+" button

one.addEventListener("click", function (e) {
    addition.style.backgroundColor = "#FF9500";
    addition.style.color = "white";
    if (number.textContent == "0" || nextNum) {
        number.textContent = "1";
        nextNum = false;
        if (adding) {
            let sum = addTwo(parseInt(current), 1);
            console.log("sum = " + sum);
            number.textContent = sum;
            console.log("fadsfadf");
            adding = false;
        }
    } else {

        let newNumber = number.textContent + "" + 1;
        number.textContent = newNumber;

    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);

});

two.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "2";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 2;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

three.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "3";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 3;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

four.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "4";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 4;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

five.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "5";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 5;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

six.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "6";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 6;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

seven.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "7";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 7;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

eight.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "8";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 8;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
});

nine.addEventListener("click", function (e) {
    if (number.textContent == "0" || nextNum) {
        number.textContent = "9";
        nextNum = false;
    } else {
        let newNumber = number.textContent + "" + 9;
        number.textContent = newNumber;
    }

    if (previous == null) {
        current = number.textContent;
        previous = current;
    } else {
        previous = current;
        current = number.textContent;
    }

    console.log("previous: " + previous + ", current: " + current);
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
    clearButtonHighlight();
}

clear.addEventListener("click", clearNumber);


//Adding

function addTwo(num1, num2) {
    return num1 + num2;
}

addition.addEventListener("click", function (e) {
    nextNum = true;
    addition.style.backgroundColor = "white";
    addition.style.color = "#FF9500";

    previous = current;
    adding = true;
})


