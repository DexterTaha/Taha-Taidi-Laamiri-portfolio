//Targeting the DOM
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuBranding=document.querySelector('.menu-branding');
const menuNav=document.querySelector('.menu-nav');

const navItems=document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener("click",toggleMenu);
//Toggle Menu
function toggleMenu() {
    //Set the menu state 
    if (!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item =>item.classList.add('show'))
        //Change the state
        showMenu=true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item =>item.classList.remove('show'));

        //Change the state
        showMenu= false;
    }
}

//TypeWriter Effect

//Init after Dom loads
document.addEventListener('DOMContentLoaded',init);

//Class
class TypeWriter{
    constructor(textelement,words,wait=80) {
        this.textelement=textelement;
        this.text='';
        this.words=words;
        this.wordIndex = 0;
        this.wait=parseInt(wait,10);
        this.type();
        this.isDeleting=false;   
    }
    type(){
        const currentIndex = this.wordIndex % this.words.length;
    
    //Get the fulltext
    const role=this.words[currentIndex];
    // console.log(role);

    //Check if it is deleting
    if (this.isDeleting) {
        //remove character
        this.text=role.substring(0,this.text.length-1);
    } else {
        //add char
        this.text=role.substring(0,this.text.length+1);
    }
    //Insert text into element
    this.textelement.innerHTML = `<span id ="rtext">${this.text}</span>`;
    
    //Type Speed 
    //we are using let here as the variable will be dyanamic
    let typeSpeed = 100;
    if (this.isDeleting) {
        typeSpeed=typeSpeed / 2.78;
    }
    //check if the word is complete
    if(!this.isDeleting && this.text === role){
        //pause at the end
        typeSpeed=this.wait;
        this.isDeleting=true;
    }
    else if (this.isDeleting && this.text === '') {
        this.isDeleting=false;
        this.wordIndex++;
        typeSpeed=300;
    }
    // console.log("Hello");
    setTimeout(()=> this.type(),typeSpeed)
    }
}
//Init app
function init() {
    const textelement = document.querySelector('.txt-type');
    const words = JSON.parse(textelement.getAttribute('data-words'));
    const wait = textelement.getAttribute('data-waiting-time');
    //Init Typewriter
    new TypeWriter(textelement,words,wait);
}

//DARK Mode toggle
let icon=document.querySelector(".icon");
console.log(icon);
icon.addEventListener("click",toggleMode);
let dark=false;
function toggleMode() {
   if (!dark) {
       document.body.classList.add("dark-theme");
       dark=true;
   }
   else{
       document.body.classList.remove("dark-theme");
    dark=false;
   }
   
}