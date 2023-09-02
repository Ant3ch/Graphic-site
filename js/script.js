let sub_menu = document.getElementsByClassName('sub-menu')[0];
let menu_icon = document.getElementsByClassName('fa-arrow-down')[0];
let funny_button = document.getElementById('funny-button');
function change_title(text,time){
    if (time === null){
        time=1000;
    }

    let title = document.getElementsByTagName('title')[0];
    setTimeout(() => {
        title.innerText = text;
        console.log('Title changed !')
    },time)

}


function open_menu() {

    if (sub_menu.style.getPropertyValue('display') === 'block') {
        /*animation replay*/

        sub_menu.style.setProperty('animation','open_menu 1s alternate-reverse')


        sub_menu.style.setProperty('display', 'none');
        menu_icon.style.setProperty('transform', 'rotate(0deg)');
    }else {
        sub_menu.style.setProperty('display', 'block');
        menu_icon.style.setProperty('transform', 'rotate(180deg)');
        sub_menu.style.setProperty('animation','open_menu 1s')


    }

}

funny_button.onmouseenter = () => {
    setTimeout(() => {
        funny_button.style.setProperty('position', 'absolute');
        var x = Math.round((Math.random() * 101)) + "%",
            y = Math.round((Math.random() * 101)) + "%";
        funny_button.style.left = x;
        funny_button.style.top = y;
    }, 100)







}

funny_button.onclick = () =>{
    console.log('got it')
    window.open('buy.html','_self')
}



function load_3dmodel(){
    document.getElementById('graphic-card-3d').dismissPoster()
}