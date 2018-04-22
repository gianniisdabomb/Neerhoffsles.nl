const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    setSunPosition();
});

function setSunPosition(){
    sun.style.transform = 'translateX(' + document.documentElement.scrollTop * 1.2 + '%)';
}