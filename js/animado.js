var efectoScroll = document.querySelectorAll(".mi-efecto");
var efectoHeader = document.querySelectorAll(".mi-efecto-header");

function mostrarHeader(){
    let scrollTop = document.documentElement.scrollTop;
    for(i = 0; i< efectoHeader.length; i++){
        let mostrarHeader = efectoHeader[i].offsetTop;
        if (mostrarHeader - 700 < scrollTop) {

            efectoHeader[i].style.opacity = .5;
            
        }

    }

}

function mostrarContenido(){
    let scrollTop = document.documentElement.scrollTop;
    for(i = 0; i< efectoScroll.length; i++){
        let altura_contenido = efectoScroll[i].offsetTop;
        if (altura_contenido - 700 < scrollTop) {

            efectoScroll[i].style.opacity = 1;
            
        }

    }

}

window.addEventListener('scroll', mostrarContenido);
window.addEventListener('scroll', mostrarHeader);