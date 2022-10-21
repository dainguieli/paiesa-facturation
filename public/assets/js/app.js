var btnMenu = document.querySelector(".logo-menu");
console.log(btnMenu);

var menu = document.querySelector(".liste-nav");

if(btnMenu){
    btnMenu.addEventListener("click", function () {
        menu.classList.toggle('active');
    });
}
   



const allLinks = document.querySelector('.item-nav');

if(allLinks){
    allLinks.forEach(function (item) {

        item.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    
    });
}


