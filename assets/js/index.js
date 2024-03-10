const checkImg = document.querySelector(".checkImg")
const inputList = document.querySelector(".inputList")

const circle_hover = document.querySelectorAll('.circle_hover')
const h2 = document.querySelectorAll('h2')


const light_mode_img = document.querySelector('#light_mode_img')
const section = document.querySelector('section')
const todolist = document.querySelector('#todolist')
const inputTodo = document.querySelector('#inputTodo')




// Function pour changer d'image apres 5 caracteres entres par utialisateurs
function verifChar() {
    checkImg.src = 'assets/img/Oval.svg';
    if (inputList.value.length >= 5) {
        checkImg.src = "./assets/img/active.svg";
    }
    else{
        checkImg.src = "./assets/img/Oval.svg";
    }
}

// Effects sur les boutton de listes 
circle_hover.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.src = './assets/img/hover.svg';
    })
    element.addEventListener('mouseout', ()=>{
        element.src = './assets/img/Oval.svg';
    })
});


// Effects sur les boutton de listes au click 
circle_hover.forEach(element => {
    element.addEventListener('click', ()=>{
        element.src = '/assets/img/check-active.svg';
    })
   
});

// Dark mode training
light_mode_img.addEventListener('click', ()=>{
    if (light_mode_img.src = '/assets/img/img-light.svg') {
        light_mode_img.src = '/assets/img/img-night.svg';

        section.style.backgroundImage = "url('assets/img/nignt-mode.svg')";
        section.style.backgroundSize = "cover";
        section.style.backgroundPosition = "center";
        section.style.backgroundRepeat = "no-repeat";


        document.body.style.background = '#171823';
        inputList.style.background = '#25273D';
        inputTodo.style.background = '#25273D';
        todolist.style.background = '#25273D';
        todolist.style.boxShadow = '0px 0px 0px 0px black';
        h3.forEach(x =>{
            x.style.color = 'white';
            x.style.fontSize = '1.2rem';
        })

    }
    
   
})




// ternaire
// let isClicked = false;
// condition ? NON : OUI

// function tag(id){
//     document.getElementById(id);
//     if (!isClicked) {
        
//     }
// }