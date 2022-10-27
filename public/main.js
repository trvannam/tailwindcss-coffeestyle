//trvannam

const topMenu= document.getElementById('ct-top-menu');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-icon');

document.addEventListener('click',(e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        // click to Toggle Top Menu 
        topMenu.classList.toggle('ct-top-menu-expended');
        topMenu.classList.toggle('hidden');
    }
    else{
        // click Outside from Toggle Top Menu Incon
        if(topMenu.classList.contains('ct-top-menu-expended')){
            topMenu.classList.remove('ct-top-menu-expended');
            topMenu.classList.add('hidden');
        }
    }
})