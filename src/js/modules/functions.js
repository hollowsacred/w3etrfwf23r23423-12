console.log("ауе пудж")
//Modals

//Menu
const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");
//Open
burger.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.add("menu_active");
    console.log("1");
});
//Close
close.addEventListener("click",function(e){
    e.preventDefault();
    menu.classList.remove("menu_active")
    console.log(`1`);
})

//Percents
const percent = document.querySelectorAll(".percent__rate");
const percentLevel = document.querySelectorAll(".percent__level");

function putPercent (item,i) {
        item.style.width = percent[i].textContent;
}
for (let i = 0; i < percentLevel.length; i++) {
    putPercent(percentLevel[i],i);
   
}

