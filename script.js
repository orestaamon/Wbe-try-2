const menu = document.querySelector("#menu");
const nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

const open =document.getElementById('open');
const modal_container=document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click',() => {
    modal_container.classList.add('show');
})

close.addEventListener('click',() => {
    modal_container.classList.remove('show');
})