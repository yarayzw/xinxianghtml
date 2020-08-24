// JavaScript Document


$(document).ready(function(){
	
	
	$('.li_title').hover(function(){
		
		$(this).parent().parent().find('.li_con').css('display','none');
		$(this).next().css('display','block');
		},function(){
		});	
	$('.btn').click(function(){
		$(this).parent().parent().find('.btn').css('background-color','#f8f8f8');
		$(this).parent().parent().find('.btn').css('border','1px solid rgb(237, 237, 237)');
		$(this).parent().parent().find('.btn').css('color','#333');
		$(this).css('background-color','#a32900');
		$(this).css('border','1px solid #a32900');
		$(this).css('color','#fff');
		$(this).parent().parent().find('ul').css('display','none');
		$(this).next().css('display','block');
		});	
	
})

function sousuoOnfocus(){
		var s = document.getElementById("sousuo").value;
		if(s=='ËÑË÷')
		{
			document.getElementById("sousuo").value="";
		}
		$('.search-l').animate({width:"280px"});
		$('.search-l').css('box-shadow','0px 1px 8px #ffff00');
	}	
	
function sousuoOnBlur(){
		var f = document.getElementById("sousuo").value;
		if(f==null || f=='')
		{
			document.getElementById("sousuo").value="ËÑË÷";
		}
		$('.search-l').animate({width:"200px"});
		$('.search-l').css('box-shadow','none');
}

	