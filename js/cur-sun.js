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
        curprice.innerHTML = '€ ' + sun * 0.2 / 1000 * 0.25  +  '0 per uur';
    }
}

    

