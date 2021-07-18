var main_circle = document.querySelector(".main-circle");
var wave = document.querySelector(".wave");
console.log(wave);
main_circle.addEventListener("click" , function(){
    let wave = document.createElement("div");
    main_circle.appendChild(wave);
    wave.classList.add("wave-animation" , "wave");
    setTimeout(function(){ 
        main_circle.children[1].remove();
        
     }, 5000);

})