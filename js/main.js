$(document).on('ready',function(){
	/*Mostrar menu movil*/
	var NavBar=$('.NavBar-nav');
	var body=$('body,html');
	var btnMenu=$('.btn-menu-mobile');
	$('.btn-menu-mobile').on('click', function(e){
		e.preventDefault();
		if(NavBar.hasClass('NavBar-show')){
			btnMenu.removeClass('zmdi-close').addClass('zmdi-more-vert');
			NavBar.removeClass('NavBar-show');
			body.removeClass('No-Scroll');
		}else{
			btnMenu.removeClass('zmdi-more-vert').addClass('zmdi-close');
			NavBar.addClass('NavBar-show');
			body.addClass('No-Scroll');
		}
	});
});