FitNavigation();
footer();


alert('omin fout');
window.addEventListener('resize', () =>{
    footer();
});

function FitNavigation(){
    const hamburgermenu = document.getElementById('burgermenu');
    const navigation = document.getElementById('nav-container');

    let navigationshowed = false;
    hamburgermenu.addEventListener('click', () =>{
    if (navigationshowed === false){
        navigationshowed = true;
        navigation.style.display = 'block';        
    }
    else{
        navigationshowed = false;
        navigation.style.display = 'none';
    }
    });
}
function footer(){
    let hasVScroll = document.body.scrollHeight > window.innerHeight;
    let footer = document.getElementById('footer');
    if (hasVScroll == false){
        footer.style.position = 'absolute';
    }
    else{
        footer.style.position = 'relative';
    }
}
