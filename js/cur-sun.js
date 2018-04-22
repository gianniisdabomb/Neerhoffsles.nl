const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    setSunPosition();
});

function setSunPosition(){
    if (document.documentElement.scrollTop < 300){
        sun.style.transform = 'translateX(' + document.documentElement.scrollTop + 200 + '%)';
    }
    //sun.style.webkitTransform = 'translateX(' + document.documentElement.scrollTop * 1.3 + '%)';
}