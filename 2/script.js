//Розрахунок суми для двох аргументів
let button1 = document.querySelector("#btn1");
button1.addEventListener("click", () => {
    let a = document.querySelector("#inp1").value;
    let b = document.querySelector("#inp2").value;
    let sum = Number(a) + Number(b);

    document.querySelector("#txt1").innerHTML = "Результат: " + sum;
});

//Додавання елемента (кола)
let button2 = document.querySelector("#btn2");
button2.addEventListener("click", () => {
    let newCircle = document.createElement("div");
    newCircle.classList.add("circle");

    document.querySelector("#tsk2").appendChild(newCircle);
});

//Розрахунок суми для трьох аргументів
let button3 = document.querySelector("#btn3");
button3.addEventListener("click", () => {
    let a = document.querySelector("#inp3").value;
    let b = document.querySelector("#inp4").value;
    let c = document.querySelector("#inp5").value;
    let sum = Number(a) + Number(b) + Number(c);

    document.querySelector("#txt2").innerHTML = "Результат: " + sum;
});

//Додавання будь-якого об'єкта
let button4 = document.querySelector("#btn4");
button4.addEventListener("click", () => {
    let newBox = document.createElement("div");
    newBox.classList.add("box");

    document.querySelector("#tsk4").appendChild(newBox);
});

let button5 = document.querySelector("#btn5");
button5.addEventListener("click", () => {
    window.location.href = "index.html";
});

