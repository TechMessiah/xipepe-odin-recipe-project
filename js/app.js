var toggle = document.getElementById('toggle-menu');
var menu = document.getElementById('navbar-menu');
var toggleIcons = document.querySelectorAll('.toggle-icon');
var menuLista = document.querySelectorAll('#navbar-menu li');

if(toggle) {
    toggle.addEventListener('click', ()=> {
        if(menu.classList.contains('display-flex')){
            menu.classList.remove('display-flex');
            toggleIcons[0].style.transform = 'rotate(0)';
            toggleIcons[1].style.transform = 'rotate(0)';
            toggleIcons[0].style.marginTop = '21px';
            toggleIcons[1].style.marginTop = '0';
            toggleIcons[2].style.display = 'block';
        } else {
            menu.classList.add('display-flex');
            toggleIcons[0].style.transform = 'rotate(45deg)';
            toggleIcons[1].style.transform = 'rotate(-45deg)';
            toggleIcons[0].style.marginTop = '21px';
            toggleIcons[1].style.marginTop = '-9px';
            toggleIcons[2].style.display = 'none';

        }
    })
}
