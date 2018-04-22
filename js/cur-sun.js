const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    setSunPosition();
});

function setSunPosition(){
    sun.style.transform = 'translateX(' + document.documentElement.scrollTop * 1.2 + '%)';
}

CurrentSun();
  
async function CurrentSunIntensity(){
    const temp_span = document.getElementById('current-temp');
    const res = await fetch('https://api.buienradar.nl/data/public/1.1/jsonfeed');
    const json = await res.json();
    const temp = json.buienradarnl.weergegevens.actueel_weer.weerstations.weerstation[1].temperatuurGC

    temp_span.getElementsByTagName('span')[0].innerHTML = temp + ' C';
}

    

