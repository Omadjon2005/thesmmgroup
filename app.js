
// collapse
const list = document.querySelectorAll('.list');

function accordion(e){
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < list.length; i++){
          list[i].classList.remove('active');
        }
            this.classList.add('active');
        }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}




window.onload = function (){
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');

    setTimeout(function() {
        preloader.classList.add('preloader-hide');
    },950)

};


$(document).ready(function(){
	// прячем кнопку #back-top
	$("#back-top").hide();
	
	// появление/затухание кнопки #back-top
	$(function (){
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$('#back-top').fadeIn();
			} else{
				$('#back-top').fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$('#back-top a').click(function (){
			$('body,html').animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});