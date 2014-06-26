var pageTitle = document.getElementsByTagName('h1')[0];

pageTitle.onclick = function() {
	alert("you clicked the title");
};

$(document).ready(function(){
	$('h1').on('click', function(){
		alert("you clicked the title");
	})
})