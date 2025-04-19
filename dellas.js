console.log("hej");
const linkKnapp = document.querySelector(".linkKnapp");
const linkItem = document.querySelector(".linkItem");
const linkItem2 = document.querySelector(".linkItem2")
linkKnapp.addEventListener("click", function(){
    console.log("klick!");
    linkItem.classList.toggle("finns");
    linkItem2.classList.toggle("finns");
    });