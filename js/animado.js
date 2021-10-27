var efectoHeader = document.querySelectorAll(".mi-efecto-header");

function mostrarHeader(){
    let scrollTop = document.documentElement.scrollTop;
    for(i = 0; i< efectoHeader.length; i++){
        let mostrarHeader = efectoHeader[i].offsetTop;
        if (mostrarHeader - 700 < scrollTop) {

            efectoHeader[i].style.opacity = .9;
            

            
        }

    }

}
window.addEventListener('scroll', mostrarHeader);