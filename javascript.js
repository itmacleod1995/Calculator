const number = document.querySelector("span");
console.log(number);

const one = document.getElementById("one");

one.addEventListener("click", function (e) {
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