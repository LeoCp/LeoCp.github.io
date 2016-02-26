$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('#fullpage').fullpage({
		anchors: ['1Page', '2Page', '3Page','4Page','5page'],
		menu: '#menu',
		loopTop: true,
		loopBottom: true
	});

});
