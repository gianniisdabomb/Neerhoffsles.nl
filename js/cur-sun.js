const sun = document.getElementById('moving-sun').children[0];

window.addEventListener('scroll', () =>{
    setSunPosition();
});

function setSunPosition(){
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 250 && document.documentElement.scrollTop < document.documentElement.clientWidth + 200){
        sun.style.webkitTransform = 'translateX(' + (document.documentElement.scrollTop - 250) + '%)';
    }
}

CurrentSun();
  
async function CurrentSun(){
    const sunspan = document.getElementById('current-sun');
    const curprice = document.getElementById('current-price')
    const res = await fetch('https://api.buienradar.nl/data/public/1.1/jsonfeed');
    const json = await res.json();
    const sun = json.buienradarnl.weergegevens.actueel_weer.weerstations.weerstation[1].zonintensiteitWM2

    if (sun == '-'){
        sunspan.innerHTML = '0 KW uur';
    }
    else{
        sunspan.innerHTML = sun + ' Watt per M2';
        curprice.innerHTML = '€ ' + Math.round(sun * 0.2 * 0,25) + ' per uur';
    }
}

    

