const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    if (document.documentElement.scrollTop < document.documentElement.clientWidth - 15){
        setSunPosition();
    }
});

function setSunPosition(){
    sun.style.transform = 'translateX(' + document.documentElement.scrollTop + '%)';
    sun.style.webkitTransform = 'translateX(' + document.documentElement.scrollTop + '%)';
}