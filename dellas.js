console.log("hej");
const linkKnapp = document.querySelector(".linkKnapp");
const linkItem = document.querySelector(".linkItem");
const linkItem2 = document.querySelector(".linkItem2");
const button = document.querySelector("button");
linkKnapp.addEventListener("click", function(){
    console.log("klick!");
    linkItem.classList.toggle("finns");
    linkItem2.classList.toggle("finns");
    linkKnapp.classList.toggle("container")
    });
button.addEventListener("click",function(){
    window.open("https://www.instagram.com/labradoodle_della/", "_blank");
    // _blank kan behövas eftersom vissa webbläsare får popupfönster vet inte exakt dock.
    });