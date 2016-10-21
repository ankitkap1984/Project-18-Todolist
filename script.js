$(document).ready(function(){
	$("span").hide();
});

//Check off specific ToDos by clicking on them
$("ul").on('click',"li",strikeLis);
function strikeLis(){
	$(this).toggleClass("strikeUnstrike");
	/* or use below long code
	if ($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
		color:"black",
		textDecoration:"none"
	});
	}
	else{
	$(this).css({
		color:"grey",
		textDecoration:"line-through"
	});}*/
};
	
	
//click on X to delete todo
$("ul").on("click","span",strikeClicked);
function strikeClicked(e){
	e.stopPropagation();//avoids parent click calls since X is inside li ul div body. To avoid calling all parents. Plase alerts and test it
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
};


$("ul").on('mouseover','li',liHovered);
function liHovered(e){
	var targetSpan=$(this).children("span");
	 $(targetSpan).show(300);
};
$("ul").on('mouseleave',"li",liHovered2);
function liHovered2(e){
	var targetSpan2=$(this).children("span");
	 $(targetSpan2).hide();
};


$("input[type='text']").on("keypress",enterNewToto);
function enterNewToto(ePress){
	if (ePress.which===13){
		var textEntered=$(this).val();//grab entered value
		//console.log(textEntered);
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+textEntered+"</li>");
		$("span").hide();
	}
};


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});