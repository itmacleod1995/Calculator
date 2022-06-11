const number = document.querySelector("span");
var addition = document.getElementById("add");

one.addEventListener("click", function (e) {
    addition.style.backgroundColor = "#FF9500";
    addition.style.color = "white";
    if (number.textContent == "0") {
        number.textContent = "1";
    } else {
        let newNumber = number.textContent + "" + 1;
        number.textContent = newNumber;
    }

});

two.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "2";
    } else {
        let newNumber = number.textContent + "" + 2;
        number.textContent = newNumber;
    }
});

three.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "3";
    } else {
        let newNumber = number.textContent + "" + 3;
        number.textContent = newNumber;
    }
});

four.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "4";
    } else {
        let newNumber = number.textContent + "" + 4;
        number.textContent = newNumber;
    }
});

five.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "5";
    } else {
        let newNumber = number.textContent + "" + 5;
        number.textContent = newNumber;
    }
});

six.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "6";
    } else {
        let newNumber = number.textContent + "" + 6;
        number.textContent = newNumber;
    }
});

seven.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "7";
    } else {
        let newNumber = number.textContent + "" + 7;
        number.textContent = newNumber;
    }
});

eight.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "8";
    } else {
        let newNumber = number.textContent + "" + 8;
        number.textContent = newNumber;
    }
});

nine.addEventListener("click", function (e) {
    if (number.textContent == "0") {
        number.textContent = "9";
    } else {
        let newNumber = number.textContent + "" + 9;
        number.textContent = newNumber;
    }
});

function clearNumber() {
    number.textContent = "0";
}

clear.addEventListener("click", clearNumber);

addition.addEventListener("click", function (e) {
    addition.style.backgroundColor = "white";
    addition.style.color = "#FF9500";

    let newNumber = number.textContent + " + ";
    number.textContent = newNumber;
})
