const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    if (document.documentElement.scrollTop < document.documentElement.clientWidth - 15){
        setSunPosition();
    }
});

function setSunPosition(){
    sun.animate([
        { transform: 'translateX(' + document.documentElement.scrollTop + '%)' }, 
        { transform: 'translateX(' + document.documentElement.scrollTop + '%)' }
      ], { 
        duration: 1000,
        iterations: Infinity
      });
}