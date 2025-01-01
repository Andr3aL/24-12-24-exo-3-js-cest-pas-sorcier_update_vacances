// ----------------------- dark mode ---------------------------

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }

 let toggleSwitch = document.querySelector('#flexSwitchCheckChecked');
 // toggleRectangle.style.width = "300px";
 // toggleRectangle.style.height = "200px";
 // toggleRectangle.style.backgroundColor = "blue";
 
//  let rectangle = document.querySelector(".rectangle");
 // rectangle.style.width = "300px";
 // rectangle.style.height = "200px";
 // rectangle.style.backgroundColor = "blue";

 toggleSwitch.addEventListener('click', ()=>{
     element.classList.toggle('dark-mode');
 });

//  let element = document.getElementById("monLien");
//  element.setAttribute("href", "https://example.com");
//  element.setAttribute("target", "_blank");
 
// function btnClick() {
//     // Sélectionner le bouton
//     let button = document.getElementById("abo");
    
//     // Modifier le texte du bouton
//     button.textContent = "Abonné";

//     // Modifier les classes du bouton pour changer son style
//     button.classList.remove("bg-dark");
//     button.classList.add("bg-success");
// }

// function btnClick() {
//     let button = document.getElementById("abo");
//     button.textContent = "Abonné";
//     button.classList.remove("bg-dark");
//     button.classList.add("bg-success");
// }

// ----------------------- bouton "Abonnez-vous" ---------------------------

function btnClick() {
    let button = document.getElementById("abo");
    button.classList.toggle("bg-dark");
    button.classList.toggle("bg-success");

    button.textContent = (button.textContent === "Abonnez-vous") ? "Abonné" : "Abonnez-vous";
}

// ----------------------- progress bar ---------------------------



// ----------------------- carrousel ---------------------------
